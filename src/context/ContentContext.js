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
export const ContentProvider = ({ children }) => {
  const [remote, setRemote] = useState({});
  const [urls, setUrls] = useState({});
  const [ready, setReady] = useState(!db);

  useEffect(() => {
    if (!db) return undefined;
    return onSnapshot(
      collection(db, 'content'),
      (snap) => {
        const next = {};
        snap.forEach((d) => { next[d.id] = d.data(); });
        setRemote(next);
        setReady(true);
      },
      () => setReady(true),
    );
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
