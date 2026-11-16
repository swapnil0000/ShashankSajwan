import { collection, doc, getDoc, getDocs, serverTimestamp, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from './firebase';

// Uploads from the admin panel.
// - With Firebase Storage enabled (Blaze plan) files go there and we store a normal https URL.
// - Otherwise they are kept in Firestore (free Spark plan):
//     images → compressed to fit one `media/{id}` doc, referenced in content as  "media:<id>"
//     PDFs / other files → split into `media/{id}/chunks/*`, linked as the site page "/file/<id>"
export const MEDIA_PREFIX = 'media:';
export const FILE_PATH_PREFIX = '/file/';
export const MAX_FILE_MB = 25;

const IMAGE_DOC_LIMIT = 900000; // chars of data URL; Firestore docs max out at 1 MiB
const CHUNK_BYTES = 690000; // → ~920k chars of base64 per chunk doc
const MAX_IMAGE_SIDE = 2400;

export const isMediaRef = (v) => typeof v === 'string' && v.startsWith(MEDIA_PREFIX);
export const mediaId = (v) => (isMediaRef(v) ? v.slice(MEDIA_PREFIX.length) : null);

const newId = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
const safeName = (name) => name.replace(/[^\w.-]/g, '_').slice(-80);

const friendlyError = (e) => {
  const code = e?.code || '';
  if (code.includes('permission-denied') || code.includes('unauthorized')) {
    return 'Permission denied. Make sure you are logged in as an admin and the latest firestore.rules are published (Firebase Console → Firestore → Rules).';
  }
  if (code.includes('storage/') && code.includes('unknown')) return 'Firebase Storage is not set up for this project.';
  return e?.message || 'Upload failed';
};

// ---------- browser cache (ids are immutable, so cache forever) ----------
const CACHE_NAME = 'ss-media-v1';
const cacheUrl = (id, part = 'img') => `/__media-cache/${id}/${part}`;
const cacheGet = async (id, part) => {
  try {
    if (typeof caches === 'undefined') return null;
    const c = await caches.open(CACHE_NAME);
    const res = await c.match(cacheUrl(id, part));
    return res ? res : null;
  } catch { return null; }
};
const cachePut = async (id, part, body, type = 'text/plain') => {
  try {
    if (typeof caches === 'undefined') return;
    const c = await caches.open(CACHE_NAME);
    await c.put(cacheUrl(id, part), new Response(body, { headers: { 'content-type': type } }));
  } catch { /* cache is optional */ }
};

// ---------- image compression ----------
const loadImage = (file) => new Promise((resolve, reject) => {
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
  img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Could not read this image. Try a JPG, PNG or WebP.')); };
  img.src = url;
});

const readAsDataURL = (blob) => new Promise((resolve, reject) => {
  const r = new FileReader();
  r.onload = () => resolve(r.result);
  r.onerror = () => reject(r.error);
  r.readAsDataURL(blob);
});

// Shrinks/re-encodes until the image fits in one Firestore document.
export const compressImage = async (file, limit = IMAGE_DOC_LIMIT) => {
  // Small enough already (and not a format browsers can't show): keep as is.
  if (file.size * 1.37 < limit && /image\/(jpeg|png|webp|gif|svg\+xml)/.test(file.type)) return readAsDataURL(file);
  const img = await loadImage(file);
  let scale = Math.min(1, MAX_IMAGE_SIDE / Math.max(img.naturalWidth, img.naturalHeight));
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  for (let attempt = 0; attempt < 12; attempt += 1) {
    canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    for (const q of [0.9, 0.82, 0.74, 0.65]) {
      let out = canvas.toDataURL('image/webp', q);
      if (!out.startsWith('data:image/webp')) out = canvas.toDataURL('image/jpeg', q); // Safari without WebP encoder
      if (out.length < limit) return out;
    }
    scale *= 0.8;
  }
  throw new Error('Image is too large even after compressing. Please use a smaller image.');
};

// ---------- uploads ----------
const uploadToStorage = (file, onProgress) => new Promise((resolve, reject) => {
  const r = ref(storage, `uploads/${Date.now()}-${safeName(file.name)}`);
  const task = uploadBytesResumable(r, file, { contentType: file.type || 'application/octet-stream' });
  task.on('state_changed',
    (s) => onProgress?.(s.totalBytes ? s.bytesTransferred / s.totalBytes : 0),
    reject,
    async () => { try { resolve(await getDownloadURL(task.snapshot.ref)); } catch (e) { reject(e); } });
});

const bytesToBase64 = (bytes) => {
  let bin = '';
  const step = 0x8000;
  for (let i = 0; i < bytes.length; i += step) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + step));
  return btoa(bin);
};

/** Uploads an image and returns the value to store in the content field. */
export const uploadImage = async (file, onProgress) => {
  if (!file) throw new Error('No file selected');
  if (!file.type.startsWith('image/')) throw new Error('Please choose an image file (JPG, PNG, WebP).');
  if (file.size > MAX_FILE_MB * 1024 * 1024) throw new Error(`Image must be under ${MAX_FILE_MB} MB`);
  try {
    if (storage) {
      let up = file;
      if (file.size > 4.5 * 1024 * 1024) { // storage.rules allow up to 5 MB images
        const blob = await (await fetch(await compressImage(file, 6000000))).blob();
        up = new File([blob], file.name, { type: blob.type });
      }
      return await uploadToStorage(up, onProgress);
    }
    if (!db) throw new Error('Firebase is not configured');
    onProgress?.(0.1);
    const data = await compressImage(file);
    onProgress?.(0.5);
    const id = newId();
    await setDoc(doc(db, 'media', id), { kind: 'image', name: safeName(file.name), type: data.slice(5, data.indexOf(';')), data, createdAt: serverTimestamp() });
    await cachePut(id, 'img', data);
    onProgress?.(1);
    return `${MEDIA_PREFIX}${id}`;
  } catch (e) {
    throw new Error(friendlyError(e));
  }
};

/** Uploads a PDF (or any document) and returns a link visitors can open. */
export const uploadFile = async (file, onProgress) => {
  if (!file) throw new Error('No file selected');
  if (file.size > MAX_FILE_MB * 1024 * 1024) throw new Error(`File must be under ${MAX_FILE_MB} MB`);
  try {
    if (storage) return await uploadToStorage(file, onProgress);
    if (!db) throw new Error('Firebase is not configured');
    const bytes = new Uint8Array(await file.arrayBuffer());
    const total = Math.max(1, Math.ceil(bytes.length / CHUNK_BYTES));
    const id = newId();
    for (let i = 0; i < total; i += 1) {
      const part = bytesToBase64(bytes.subarray(i * CHUNK_BYTES, (i + 1) * CHUNK_BYTES));
      // eslint-disable-next-line no-await-in-loop
      await setDoc(doc(db, 'media', id, 'chunks', String(i).padStart(4, '0')), { i, data: part });
      onProgress?.((i + 1) / (total + 1));
    }
    await setDoc(doc(db, 'media', id), {
      kind: 'file', name: safeName(file.name), type: file.type || 'application/octet-stream', size: file.size, chunks: total, createdAt: serverTimestamp(),
    });
    onProgress?.(1);
    return `${FILE_PATH_PREFIX}${id}`;
  } catch (e) {
    throw new Error(friendlyError(e));
  }
};

// ---------- reading ----------
const imageMemo = new Map(); // id -> Promise<dataURL|null>

/** Resolves "media:<id>" to a displayable data URL (cached in memory + browser cache). */
export const resolveImage = (id) => {
  if (!imageMemo.has(id)) {
    imageMemo.set(id, (async () => {
      const cached = await cacheGet(id, 'img');
      if (cached) return cached.text();
      const snap = await getDoc(doc(db, 'media', id));
      const data = snap.exists() ? snap.data().data : null;
      if (data) cachePut(id, 'img', data);
      return data;
    })().catch(() => { imageMemo.delete(id); return null; }));
  }
  return imageMemo.get(id);
};

/** Loads an uploaded document back into a Blob. */
export const loadFile = async (id) => {
  const cached = await cacheGet(id, 'file');
  const metaSnap = await getDoc(doc(db, 'media', id));
  if (!metaSnap.exists()) throw new Error('This file was not found. It may have been removed.');
  const meta = metaSnap.data();
  if (cached) return { meta, blob: await cached.blob() };
  if (meta.kind === 'image') {
    const blob = await (await fetch(meta.data)).blob();
    return { meta, blob };
  }
  const chunks = await getDocs(collection(db, 'media', id, 'chunks'));
  const parts = chunks.docs
    .map((d) => d.data())
    .sort((a, b) => a.i - b.i)
    .map((c) => Uint8Array.from(atob(c.data), (ch) => ch.charCodeAt(0)));
  const blob = new Blob(parts, { type: meta.type || 'application/pdf' });
  cachePut(id, 'file', blob, blob.type);
  return { meta, blob };
};
