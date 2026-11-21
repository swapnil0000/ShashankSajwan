import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { isMediaRef, mediaId, resolveImage } from '../lib/media';
import { contentDefaults } from '../data/content';

const ContentContext = createContext({ remote: {}, resolved: {}, ready: true });

// Collects every "media:<id>" string inside a content value.
const collectMedia = (v, out) => {
  if (isMediaRef(v)) out.add(mediaId(v));
  else if (Array.isArray(v)) v.forEach((x) => collectMedia(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => collectMedia(x, out));
  return out;
};

// Swaps "media:<id>" for the loaded image ('' until it arrives, so nothing shows a broken image).
const swapMedia = (v, urls) => {
  if (isMediaRef(v)) return urls[mediaId(v)] || '';
  if (Array.isArray(v)) return v.map((x) => swapMedia(x, urls));
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, swapMedia(x, urls)]));
  return v;
};

// Live-subscribes to the `content` collection. Every block falls back to
// the defaults in data/content.js, so the site works with no database at all.
// The last content from the database is kept in the browser, so returning visitors see
// the admin's banners, texts and pop-ups straight away instead of the built-in defaults
// for a moment (that swap looked like a flicker).
const CACHE_KEY = 'ss-content-v1';
const readCache = () => {
  try { return JSON.parse(localStorage.getItem(CACHE_KEY)) || null; } catch { return null; }
};
const writeCache = (value) => {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(value)); } catch { /* storage full or blocked: just no cache */ }
};
// If the database doesn't answer in time (slow network), fall back to the defaults.
const READY_TIMEOUT_MS = 8000;

export const ContentProvider = ({ children }) => {
  const [remote, setRemote] = useState(() => (db && readCache()) || {});
  const [urls, setUrls] = useState({});
  // `ready` = the content on screen is the admin's (from the database or the browser copy).
  const [ready, setReady] = useState(() => !db || Boolean(readCache()));

  useEffect(() => {
    if (!db) return undefined;
    const timer = setTimeout(() => setReady(true), READY_TIMEOUT_MS);
    const stop = onSnapshot(
      collection(db, 'content'),
      (snap) => {
        const next = {};
        snap.forEach((d) => { next[d.id] = d.data(); });
        setRemote(next);
        setReady(true);
        writeCache(next);
      },
      () => setReady(true),
    );
    return () => { clearTimeout(timer); stop(); };
  }, []);

  // Load any uploaded images the content points to.
  useEffect(() => {
    if (!db) return;
    collectMedia(remote, new Set()).forEach((id) => {
      if (urls[id]) return;
      resolveImage(id).then((url) => { if (url) setUrls((u) => (u[id] ? u : { ...u, [id]: url })); });
    });
  }, [remote, urls]);

  const resolved = useMemo(() => swapMedia(remote, urls), [remote, urls]);

  return <ContentContext.Provider value={{ remote, resolved, ready }}>{children}</ContentContext.Provider>;
};

// Content ready for display (uploaded images resolved to real URLs).
export const useContent = (key) => {
  const { resolved } = useContext(ContentContext);
  return { ...contentDefaults[key], ...(resolved[key] || {}) };
};

// True once the content on screen is the admin's — used to hold back banners and pop-ups
// so the built-in defaults never flash first.
export const useContentReady = () => useContext(ContentContext).ready;

// Content exactly as stored — used by the admin editor so saves keep the small "media:<id>" references.
export const useRawContent = (key) => {
  const { remote } = useContext(ContentContext);
  return { ...contentDefaults[key], ...(remote[key] || {}) };
};

export const useContentMeta = () => useContext(ContentContext);

export const saveContent = (key, value) => setDoc(doc(db, 'content', key), JSON.parse(JSON.stringify(value)));
export const resetContent = (key) => deleteDoc(doc(db, 'content', key));

// Picks the current language from an { en, hi } field, or returns plain strings as-is.
export const tr = (value, lang) => (value && typeof value === 'object' ? value[lang] || value.en || '' : value || '');
