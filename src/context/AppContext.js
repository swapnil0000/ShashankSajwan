import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { buildTheme } from '../theme/theme';
import { strings } from '../i18n/strings';

const AppContext = createContext(null);

const read = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};
const write = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
};

export const AppProvider = ({ children }) => {
  const prefersDark = typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const [mode, setMode] = useState(() => read('ss-mode', prefersDark ? 'dark' : 'light'));
  const [lang, setLang] = useState(() => read('ss-lang', 'en'));
  const [bookmarks, setBookmarks] = useState(() => read('ss-bookmarks', []));
  const [recent, setRecent] = useState(() => read('ss-recent', []));

  useEffect(() => write('ss-mode', mode), [mode]);
  useEffect(() => write('ss-lang', lang), [lang]);
  useEffect(() => write('ss-bookmarks', bookmarks), [bookmarks]);
  useEffect(() => write('ss-recent', recent), [recent]);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const theme = useMemo(() => buildTheme(mode), [mode]);

  const value = useMemo(() => ({
    mode,
    toggleMode: () => setMode((m) => (m === 'dark' ? 'light' : 'dark')),
    lang,
    toggleLang: () => setLang((l) => (l === 'en' ? 'hi' : 'en')),
    t: (key) => strings[lang]?.[key] ?? strings.en[key] ?? key,
    bookmarks,
    isBookmarked: (id) => bookmarks.includes(id),
    toggleBookmark: (id) => setBookmarks((b) => (b.includes(id) ? b.filter((x) => x !== id) : [id, ...b])),
    recent,
    pushRecent: (id) => setRecent((r) => [id, ...r.filter((x) => x !== id)].slice(0, 8)),
  }), [mode, lang, bookmarks, recent]);

  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
