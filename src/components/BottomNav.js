import React, { useState } from 'react';
import { Box, ButtonBase, Drawer, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { useApp } from '../context/AppContext';
import { socials } from '../data/studyHub';

const tabs = [
  { key: 'home', to: '/', icon: HomeRoundedIcon },
  { key: 'study', to: '/study', icon: AutoStoriesRoundedIcon },
  { key: 'pyqs', to: '/pyqs', icon: QuizRoundedIcon },
  { key: 'books', to: '/books', icon: MenuBookRoundedIcon },
  { key: 'more', to: null, icon: AppsRoundedIcon },
];

const moreLinks = [
  { label: { en: 'Videos', hi: 'वीडियो' }, to: '/videos', icon: '▶️' },
  { label: { en: 'Syllabus', hi: 'पाठ्यक्रम' }, to: '/syllabus', icon: '🧭' },
  { label: { en: 'NCERT', hi: 'NCERT' }, to: '/ncert', icon: '📘' },
  { label: { en: 'GS Notes', hi: 'GS नोट्स' }, to: '/general', icon: '🏛️' },
  { label: { en: 'Optional', hi: 'वैकल्पिक' }, to: '/optional', icon: '📚' },
  { label: { en: 'News 2025', hi: 'समाचार 2025' }, to: '/newsnotes25', icon: '📰' },
  { label: { en: 'News 2024', hi: 'समाचार 2024' }, to: '/newsnotes', icon: '🗞️' },
  { label: { en: 'About', hi: 'परिचय' }, to: '/about', icon: '👤' },
  { label: { en: 'Contact', hi: 'संपर्क' }, to: '/contact', icon: '✉️' },
  { label: { en: 'FAQs', hi: 'प्रश्न' }, to: '/faqs', icon: '❓' },
  { label: { en: 'Telegram', hi: 'टेलीग्राम' }, href: socials.telegram, icon: '✈️' },
  { label: { en: 'YouTube', hi: 'यूट्यूब' }, href: socials.youtube, icon: '📺' },
];

const isActive = (pathname, to) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

const BottomNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t, lang } = useApp();
  const [sheet, setSheet] = useState(false);

  if (!isMobile) return null;

  const go = (item) => {
    setSheet(false);
    if (item.href) window.open(item.href, '_blank', 'noopener');
    else navigate(item.to);
  };

  return (
    <>
      <Box
        component="nav"
        className="glass"
        sx={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1100,
          borderTop: `1px solid ${theme.palette.divider}`,
          pb: 'env(safe-area-inset-bottom)',
        }}
      >
        <Stack direction="row" sx={{ height: 68 }}>
          {tabs.map((tab) => {
            const active = tab.to ? isActive(pathname, tab.to) : sheet;
            const Icon = tab.icon;
            return (
              <ButtonBase
                key={tab.key}
                onClick={() => (tab.to ? navigate(tab.to) : setSheet(true))}
                sx={{ flex: 1, flexDirection: 'column', gap: 0.4, borderRadius: 3 }}
                aria-label={t(tab.key)}
              >
                <Box sx={{ position: 'relative', width: 60, height: 30, display: 'grid', placeItems: 'center' }}>
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                      style={{ position: 'absolute', inset: 0, borderRadius: 999, background: 'linear-gradient(100deg, rgba(255,138,31,.22), rgba(224,41,74,.22))' }}
                    />
                  )}
                  <Icon sx={{ position: 'relative', fontSize: 24, color: active ? 'primary.main' : 'text.secondary' }} />
                </Box>
                <Typography sx={{ fontSize: 11.5, fontWeight: active ? 800 : 600, color: active ? 'text.primary' : 'text.secondary' }}>
                  {t(tab.key)}
                </Typography>
              </ButtonBase>
            );
          })}
        </Stack>
      </Box>

      <Drawer
        anchor="bottom"
        open={sheet}
        onClose={() => setSheet(false)}
        PaperProps={{ sx: { borderTopLeftRadius: 28, borderTopRightRadius: 28, pb: 'calc(24px + env(safe-area-inset-bottom))', bgcolor: 'background.paper' } }}
      >
        <Box sx={{ width: 40, height: 5, borderRadius: 9, bgcolor: 'divider', mx: 'auto', mt: 1.5, mb: 2 }} />
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, px: 2 }}>
          {moreLinks.map((l, i) => (
            <motion.div key={l.label.en} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.025 }}>
              <ButtonBase onClick={() => go(l)} sx={{ width: '100%', flexDirection: 'column', gap: 0.8, py: 1.5, borderRadius: 4 }}>
                <Box sx={{ width: 52, height: 52, borderRadius: '18px', display: 'grid', placeItems: 'center', fontSize: 24, bgcolor: 'action.hover' }}>{l.icon}</Box>
                <Typography sx={{ fontSize: 12, fontWeight: 600, textAlign: 'center' }}>{l.label[lang]}</Typography>
              </ButtonBase>
            </motion.div>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default BottomNav;
