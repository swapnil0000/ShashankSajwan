import React, { useEffect, useState } from 'react';
import { Box, Button, IconButton, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useApp } from '../context/AppContext';

const navItems = [
  { to: '/', key: 'home' },
  { to: '/study', key: 'study' },
  { to: '/books', key: 'books' },
  { to: '/videos', key: 'videos' },
  { to: '/about', key: 'about' },
  { to: '/contact', key: 'contact' },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t, mode, toggleMode, lang, toggleLang } = useApp();
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hide on scroll down, reveal on scroll up (Android app-bar behaviour).
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(isMobile && y > 120 && y > last);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  return (
    <motion.header
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
      className="glass"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1100,
        borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : '1px solid transparent',
      }}
    >
      <Stack direction="row" alignItems="center" sx={{ height: { xs: 60, md: 72 }, px: { xs: 2, md: 4 }, maxWidth: 1280, mx: 'auto', gap: 2 }}>
        <Stack component={Link} to="/" direction="row" alignItems="center" gap={1.2} sx={{ textDecoration: 'none', color: 'text.primary', mr: 'auto' }}>
          <Box component="img" src="/assets/shashank.webp" alt="Shashank Sajwan" sx={{ width: { xs: 38, md: 46 }, height: { xs: 38, md: 46 }, borderRadius: '12px', objectFit: 'cover' }} />
          <Box sx={{ lineHeight: 1 }}>
            <Typography sx={{ fontWeight: 800, fontSize: { xs: 15, md: 18 }, letterSpacing: '0.02em' }}>
              SHASHANK <Box component="span" className="text-gradient">SAJWAN</Box>
            </Typography>
            <Typography sx={{ fontSize: { xs: 11, md: 12 }, color: 'text.secondary' }}>{t('tagline')}</Typography>
          </Box>
        </Stack>

        {!isMobile && (
          <Stack direction="row" gap={0.5}>
            {navItems.map((n) => (
              <Button
                key={n.to}
                component={NavLink}
                to={n.to}
                end
                sx={{
                  color: 'text.primary', fontWeight: 600, px: 1.6, minHeight: 40,
                  '&.active': { color: 'primary.main', bgcolor: 'action.hover' },
                }}
              >
                {t(n.key)}
              </Button>
            ))}
          </Stack>
        )}

        <Stack direction="row" alignItems="center" gap={0.5}>
          <Tooltip title="Search">
            <IconButton onClick={() => navigate('/study?focus=1')} sx={{ bgcolor: 'action.hover' }} aria-label="Search">
              <SearchRoundedIcon />
            </IconButton>
          </Tooltip>
          <Button onClick={toggleLang} aria-label="Switch language" sx={{ minWidth: 0, px: 1.4, minHeight: 40, color: 'text.primary', bgcolor: 'action.hover', fontWeight: 800 }}>
            {lang === 'en' ? 'हिं' : 'EN'}
          </Button>
          <IconButton onClick={toggleMode} aria-label="Toggle dark mode" sx={{ bgcolor: 'action.hover' }}>
            {mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
          </IconButton>
        </Stack>
      </Stack>
    </motion.header>
  );
};

export default Header;
