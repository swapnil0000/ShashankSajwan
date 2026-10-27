import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { contentDefaults } from '../data/content';

const ContentContext = createContext({ remote: {}, ready: true });

// Live-subscribes to the `content` collection. Every block falls back to
// the defaults in data/content.js, so the site works with no database at all.
export const ContentProvider = ({ children }) => {
  const [remote, setRemote] = useState({});
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

  return <ContentContext.Provider value={{ remote, ready }}>{children}</ContentContext.Provider>;
};

export const useContent = (key) => {
  const { remote } = useContext(ContentContext);
  return { ...contentDefaults[key], ...(remote[key] || {}) };
};

export const useContentMeta = () => useContext(ContentContext);

export const saveContent = (key, value) => setDoc(doc(db, 'content', key), JSON.parse(JSON.stringify(value)));
export const resetContent = (key) => deleteDoc(doc(db, 'content', key));

// Picks the current language from an { en, hi } field, or returns plain strings as-is.
export const tr = (value, lang) => (value && typeof value === 'object' ? value[lang] || value.en || '' : value || '');
