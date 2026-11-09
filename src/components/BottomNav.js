import React, { useState } from 'react';
import { Box, ButtonBase, Drawer, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { useContent } from '../context/ContentContext';
import BatchPromo from './ui/BatchPromo';
import IconTile from './ui/IconTile';

const buildMoreLinks = (socials, withPyqs) => [
  { label: { en: 'Books', hi: 'पुस्तकें' }, to: '/books', icon: '📚' },
  { label: { en: 'Newspaper', hi: 'समाचार पत्र' }, to: '/newspaper', icon: '📰' },
  { label: { en: 'Study Hub', hi: 'स्टडी हब' }, to: '/study', icon: '🗂️' },
  ...(withPyqs ? [{ label: { en: 'PYQs', hi: 'PYQs' }, to: '/pyqs', icon: '🎯' }] : []),
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
const BATCH_PATHS = ['/courses', '/batch'];

const Tab = ({ label, Icon, active, onClick }) => (
  <ButtonBase onClick={onClick} sx={{ flex: 1, flexDirection: 'column', gap: 0.4, borderRadius: '16px' }} aria-label={label}>
    <Box sx={{ position: 'relative', width: 56, height: 30, display: 'grid', placeItems: 'center' }}>
      {active && (
        <motion.div
          layoutId="nav-pill"
          transition={{ type: 'spring', stiffness: 500, damping: 36 }}
          style={{ position: 'absolute', inset: 0, borderRadius: 999, background: 'linear-gradient(100deg, rgba(255,138,31,.22), rgba(224,41,74,.22))' }}
        />
      )}
      <Icon sx={{ position: 'relative', fontSize: 24, color: active ? 'primary.main' : 'text.secondary' }} />
    </Box>
    <Typography sx={{ fontSize: 11.5, fontWeight: active ? 800 : 600, color: active ? 'text.primary' : 'text.secondary' }}>{label}</Typography>
  </ButtonBase>
);

// Raised centre button for the batch — the one paid offering, always one tap away.
const BatchTab = ({ label, active, onClick }) => (
  <ButtonBase onClick={onClick} aria-label={label} sx={{ flex: 1, flexDirection: 'column', gap: 0.4, borderRadius: '16px', position: 'relative' }}>
    <motion.div
      whileTap={{ scale: 0.9 }}
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ marginTop: -26 }}
    >
      <Box
        className={active ? undefined : 'pulse'}
        sx={{
          width: 54, height: 54, borderRadius: '18px', display: 'grid', placeItems: 'center', color: '#fff',
          background: 'var(--grad)', boxShadow: '0 10px 24px -8px rgba(224,41,74,.7)',
          border: '3px solid', borderColor: 'background.paper', transform: 'rotate(-6deg)',
        }}
      >
        <SchoolRoundedIcon sx={{ fontSize: 26, transform: 'rotate(6deg)' }} />
      </Box>
    </motion.div>
    <Typography sx={{ fontSize: 11.5, fontWeight: 800, color: active ? 'primary.main' : 'text.primary' }}>{label}</Typography>
  </ButtonBase>
);

const BottomNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t, lang } = useApp();
  const [sheet, setSheet] = useState(false);
  const { user, isAdmin, configured } = useAuth();
  const { socials } = useContent('site');
  const batch = useContent('batch');
  const batchOn = batch.enabled !== false;
  const moreLinks = [
    ...(configured ? [user
      ? { label: { en: 'Account', hi: 'खाता' }, to: '/account', icon: '🙂' }
      : { label: { en: 'Sign in', hi: 'लॉग इन' }, to: '/login', icon: '🔑' }] : []),
    ...(isAdmin ? [{ label: { en: 'Admin', hi: 'एडमिन' }, to: '/admin', icon: '🛠️' }] : []),
    // PYQs gives its tab slot to the batch button, so it moves in here.
    ...buildMoreLinks(socials, batchOn),
  ];

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
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1100, borderTop: `1px solid ${theme.palette.divider}`, pb: 'env(safe-area-inset-bottom)' }}
      >
        <Stack direction="row" sx={{ height: 68 }}>
          <Tab label={t('home')} Icon={HomeRoundedIcon} active={isActive(pathname, '/')} onClick={() => navigate('/')} />
          <Tab label={t('resources')} Icon={AutoStoriesRoundedIcon} active={isActive(pathname, '/resources') || isActive(pathname, '/newspaper')} onClick={() => navigate('/resources')} />
          {batchOn
            ? <BatchTab label={batch.navLabel || 'Batch'} active={BATCH_PATHS.some((p) => pathname.startsWith(p))} onClick={() => navigate('/courses')} />
            : <Tab label={t('pyqs')} Icon={QuizRoundedIcon} active={isActive(pathname, '/pyqs')} onClick={() => navigate('/pyqs')} />}
          <Tab label={t('study')} Icon={MenuBookRoundedIcon} active={isActive(pathname, '/study')} onClick={() => navigate('/study')} />
          <Tab label={t('more')} Icon={AppsRoundedIcon} active={sheet} onClick={() => setSheet(true)} />
        </Stack>
      </Box>

      <Drawer
        anchor="bottom"
        open={sheet}
        onClose={() => setSheet(false)}
        PaperProps={{ sx: { borderTopLeftRadius: 28, borderTopRightRadius: 28, pb: 'calc(24px + env(safe-area-inset-bottom))', bgcolor: 'background.paper', maxHeight: '85vh' } }}
      >
        <Box sx={{ width: 40, height: 5, borderRadius: 9, bgcolor: 'divider', mx: 'auto', mt: 1.5, mb: 2 }} />
        {batchOn && <Box sx={{ px: 2, mb: 1.5 }} onClick={() => setSheet(false)}><BatchPromo variant="compact" /></Box>}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, px: 2 }}>
          {moreLinks.map((l, i) => (
            <motion.div key={l.label.en} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.025 }}>
              <ButtonBase onClick={() => go(l)} sx={{ width: '100%', flexDirection: 'column', gap: 0.8, py: 1.5, borderRadius: '16px' }}>
                <IconTile icon={l.icon} size={52} radius={18} />
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
