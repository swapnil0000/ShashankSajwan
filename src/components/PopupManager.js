import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Button, Dialog, IconButton, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useContent } from '../context/ContentContext';
import { isScheduledNow } from './ui/HeroCarousel';

// Remembers when each pop-up was last shown so it respects its frequency.
const seenKey = (p) => `ss-popup-${p.id || p.title || p.image}`;
const readSeen = (k) => { try { return Number(localStorage.getItem(k)) || Number(sessionStorage.getItem(k)) || 0; } catch { return 0; } };
const markSeen = (k, frequency) => {
  try {
    if (frequency === 'session') sessionStorage.setItem(k, String(Date.now()));
    else localStorage.setItem(k, String(Date.now()));
  } catch { /* storage blocked: the pop-up may show again, which is acceptable */ }
};
const dueAgain = (p) => {
  const last = readSeen(seenKey(p));
  if (!last) return true;
  if (p.frequency === 'always') return true;
  if (p.frequency === 'day') return Date.now() - last > 864e5;
  if (p.frequency === 'once') return false;
  return false; // 'session': shown once until the browser tab session ends
};
const matchesPage = (p, pathname) => {
  if (!p.pages || p.pages === 'all') return true;
  if (p.pages === 'home') return pathname === '/';
  return String(p.pages).split(',').map((s) => s.trim()).filter(Boolean).some((path) => pathname === path || pathname.startsWith(`${path}/`));
};

// Shows the first live pop-up from Admin → Pop-ups that matches this page.
const PopupManager = () => {
  const { items = [] } = useContent('popups');
  const { pathname } = useLocation();
  const [open, setOpen] = useState(null);

  const candidate = useMemo(
    () => items.find((p) => (p.image || p.title) && isScheduledNow(p) && matchesPage(p, pathname) && dueAgain(p)),
    [items, pathname],
  );

  useEffect(() => {
    if (!candidate || pathname.startsWith('/admin')) return undefined;
    const id = setTimeout(() => {
      setOpen(candidate);
      markSeen(seenKey(candidate), candidate.frequency || 'session');
    }, (Number(candidate.delay) || 2) * 1000);
    return () => clearTimeout(id);
  }, [candidate, pathname]);

  if (!open) return null;
  const close = () => setOpen(null);
  const external = /^https?:\/\//.test(open.ctaLink || '');
  const cta = open.ctaLink
    ? (external ? { component: 'a', href: open.ctaLink, target: '_blank', rel: 'noopener' } : { component: Link, to: open.ctaLink })
    : null;

  return (
    <Dialog open onClose={close} maxWidth="xs" fullWidth PaperProps={{ sx: { borderRadius: '24px', overflow: 'hidden', m: 2, width: 'calc(100% - 32px)' } }}>
      <IconButton onClick={close} aria-label="Close" sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2, bgcolor: 'rgba(0,0,0,.45)', color: '#fff', '&:hover': { bgcolor: 'rgba(0,0,0,.6)' } }}>
        <CloseRoundedIcon fontSize="small" />
      </IconButton>
      {open.image && (
        <Box {...(cta || {})} onClick={cta ? close : undefined} sx={{ display: 'block' }}>
          <Box component="img" src={open.image} alt={open.title || ''} sx={{ width: '100%', display: 'block' }} />
        </Box>
      )}
      {(open.title || open.text || (cta && open.ctaLabel)) && (
        <Box sx={{ p: 2.5 }}>
          {open.title && <Typography variant="h6">{open.title}</Typography>}
          {open.text && <Typography color="text.secondary" sx={{ mt: 0.5 }}>{open.text}</Typography>}
          {cta && open.ctaLabel && <Button {...cta} onClick={close} variant="contained" fullWidth sx={{ mt: 2 }}>{open.ctaLabel}</Button>}
        </Box>
      )}
    </Dialog>
  );
};

export default PopupManager;
