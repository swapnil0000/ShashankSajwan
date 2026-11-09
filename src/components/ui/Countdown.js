import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { tr, useContent } from '../../context/ContentContext';

const diff = (date) => {
  const ms = Math.max(0, new Date(date) - Date.now()) || 0;
  return {
    days: Math.floor(ms / 864e5),
    hrs: Math.floor((ms / 36e5) % 24),
    mins: Math.floor((ms / 6e4) % 60),
  };
};

const Unit = ({ value, label }) => (
  <Box sx={{ flex: 1, textAlign: 'center', py: 1, borderRadius: '14px', bgcolor: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)' }}>
    <Box sx={{ height: 34, overflow: 'hidden', position: 'relative' }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div key={value} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -24, opacity: 0 }} transition={{ duration: 0.3 }}>
          <Typography sx={{ fontSize: 28, fontWeight: 800, lineHeight: '34px', fontVariantNumeric: 'tabular-nums' }}>
            {String(value).padStart(2, '0')}
          </Typography>
        </motion.div>
      </AnimatePresence>
    </Box>
    <Typography sx={{ fontSize: 11, opacity: 0.75, textTransform: 'uppercase', letterSpacing: '.08em' }}>{label}</Typography>
  </Box>
);

const Countdown = () => {
  const { t, lang } = useApp();
  const { prelimsDate, prelimsLabel } = useContent('site');
  const [left, setLeft] = useState(() => diff(prelimsDate));

  useEffect(() => {
    setLeft(diff(prelimsDate));
    const id = setInterval(() => setLeft(diff(prelimsDate)), 30000);
    return () => clearInterval(id);
  }, [prelimsDate]);

  return (
    <Box className="glow-card" sx={{ p: { xs: 2, md: 2.5 }, borderRadius: '22px', color: '#fff' }}>
      <Typography sx={{ fontSize: 13, fontWeight: 700, opacity: 0.9 }}>⏳ {tr(prelimsLabel, lang)}</Typography>
      <Stack direction="row" alignItems="stretch" gap={1.2} sx={{ mt: 1.5, position: 'relative', zIndex: 1 }}>
        <Unit value={left.days} label={t('days')} />
        <Unit value={left.hrs} label={t('hrs')} />
        <Unit value={left.mins} label={t('mins')} />
      </Stack>
      <Typography sx={{ fontSize: 10.5, opacity: 0.6, mt: 0.5 }}>{t('tentative')}</Typography>
    </Box>
  );
};

export default Countdown;
