import React, { useState } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import { useContent } from '../context/ContentContext';

const storageKey = (text) => `ss-ann-${text.length}-${text.slice(0, 24)}`;
const wasDismissed = (text) => { try { return localStorage.getItem(storageKey(text)) === '1'; } catch { return false; } };

// Floating announcement pill set from Admin → Site settings.
const Announcement = () => {
  const { announcement } = useContent('site');
  const text = announcement?.text?.trim() || '';
  const [closed, setClosed] = useState(() => wasDismissed(text));
  const show = announcement?.enabled && text && !closed && !wasDismissed(text);

  const close = () => {
    try { localStorage.setItem(storageKey(text), '1'); } catch { /* ignore */ }
    setClosed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.6 }}
          style={{ position: 'fixed', left: 12, right: 12, zIndex: 1150, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}
          className="announcement"
        >
          <Stack direction="row" alignItems="center" gap={1} sx={{ pointerEvents: 'auto', maxWidth: 640, width: '100%', pl: 2, pr: 0.5, py: 0.5, borderRadius: '999px', background: 'var(--grad-navy)', color: '#fff', boxShadow: '0 16px 40px -16px rgba(11,22,64,.7)' }}>
            <CampaignRoundedIcon sx={{ color: 'secondary.main' }} />
            <Box
              component={announcement.link ? 'a' : 'span'}
              href={announcement.link || undefined}
              target={announcement.link?.startsWith('http') ? '_blank' : undefined}
              rel="noopener"
              sx={{ flex: 1, color: '#fff', py: 1, minWidth: 0 }}
            >
              <Typography sx={{ fontSize: 14, fontWeight: 600 }} noWrap>{text}</Typography>
            </Box>
            <IconButton size="small" onClick={close} aria-label="Dismiss" sx={{ color: '#fff' }}><CloseRoundedIcon fontSize="small" /></IconButton>
          </Stack>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Announcement;
