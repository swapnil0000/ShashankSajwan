import React, { useEffect, useState } from 'react';
import { Box, Button, IconButton, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { tr, useContent } from '../context/ContentContext';
import UserAvatar from './ui/UserAvatar';
import HeaderWhatsApp from './ui/HeaderWhatsApp';

// `wide` items only fit on extra-large screens; they stay reachable from the footer and the More sheet.
const navItems = [
  { to: '/', key: 'home', exact: true },
  { to: '/resources', key: 'resources' },
  { to: '/newspaper', key: 'newspaper' },
  { to: '/study', key: 'study' },
  { to: '/books', key: 'books' },
  { to: '/videos', key: 'videos', wide: true },
  { to: '/about', key: 'about', wide: true },
  { to: '/contact', key: 'contact', wide: true },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t, mode, toggleMode, lang } = useApp();
  const { user, configured } = useAuth();
  const { tagline, logo, nameA, nameB } = useContent('site');
  const batch = useContent('batch');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const batchOn = batch.enabled !== false;
  const inBatch = pathname.startsWith('/courses') || pathname.startsWith('/batch');
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
      <Stack direction="row" alignItems="center" sx={{ height: { xs: 60, md: 72 }, px: { xs: 2, md: 3, lg: 4 }, maxWidth: { xs: 1280, xl: 1480 }, mx: 'auto', gap: { xs: 1, md: 1, lg: 2 } }}>
        <Stack component={Link} to="/" direction="row" alignItems="center" gap={1.2} sx={{ textDecoration: 'none', color: 'text.primary', mr: 'auto', flexShrink: 0 }}>
          <Box component="img" src={logo} alt={`${nameA} ${nameB}`} sx={{ width: { xs: 38, md: 46 }, height: { xs: 38, md: 46 }, borderRadius: '12px', objectFit: 'cover' }} />
          <Box sx={{ lineHeight: 1 }}>
            <Typography sx={{ fontWeight: 800, fontSize: { xs: 15, md: 16, lg: 18 }, letterSpacing: '0.02em', whiteSpace: 'nowrap', '@media (max-width:379px)': { fontSize: 13.5, letterSpacing: 0 } }}>
              {nameA} <Box component="span" className="text-gradient">{nameB}</Box>
            </Typography>
            <Typography sx={{ fontSize: { xs: 11, md: 12 }, color: 'text.secondary' }}>{tr(tagline, lang)}</Typography>
          </Box>
        </Stack>

        {!isMobile && (
          <Stack direction="row" gap={0.5}>
            {navItems.map((n) => (
              <Button
                key={n.to}
                component={NavLink}
                to={n.to}
                end={n.exact}
                sx={{
                  display: n.wide ? { xs: 'none', xl: 'inline-flex' } : 'inline-flex',
                  color: 'text.primary', fontWeight: 600, px: { md: 0.8, lg: 1.4 }, minWidth: 0, minHeight: 40, whiteSpace: 'nowrap',
                  '&.active': { color: 'primary.main', bgcolor: 'action.hover' },
                }}
              >
                {t(n.key)}
              </Button>
            ))}
          </Stack>
        )}

        {!isMobile && batchOn && (
          <Button
            component={Link}
            to="/courses"
            startIcon={<Box component="span" className={inBatch ? undefined : 'pulse'} sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#3ddc84', display: 'block' }} />}
            sx={{ minHeight: 40, px: 2, flexShrink: 0, whiteSpace: 'nowrap', color: '#fff', background: 'var(--grad)', boxShadow: inBatch ? 'none' : '0 8px 20px -8px rgba(224,41,74,.6)', opacity: inBatch ? 0.85 : 1, '&:hover': { background: 'var(--grad)', filter: 'brightness(1.05)' } }}
          >
            {batch.status !== 'live'
              ? <>{batch.navLabel || 'Batch'}<Box component="span" sx={{ display: { md: 'none', lg: 'inline' } }}>: Coming soon</Box><Box component="span" sx={{ display: { md: 'inline', lg: 'none' } }}>: Soon</Box></>
              : (batch.ctaNav || `Join ${batch.navLabel || 'Batch'}`)}
          </Button>
        )}

        <Stack direction="row" alignItems="center" gap={{ xs: 0.6, md: 0.8 }}>
          <HeaderWhatsApp />
          <Tooltip title="Search">
            <IconButton onClick={() => navigate('/study?focus=1')} sx={{ bgcolor: 'action.hover' }} aria-label="Search">
              <SearchRoundedIcon />
            </IconButton>
          </Tooltip>
          {/* Phones: theme switch is in the More sheet, so the header has room for the WhatsApp button */}
          <IconButton onClick={toggleMode} aria-label="Toggle dark mode" sx={{ bgcolor: 'action.hover', display: { xs: 'none', md: 'inline-flex' } }}>
            {mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
          </IconButton>
          {/* Sign in / Sign up are hidden from the site; they still work at /login and /signup. */}
          {configured && user && (
            <Tooltip title="My account">
              <IconButton component={Link} to="/account" aria-label="My account" sx={{ p: 0.4 }}>
                <UserAvatar user={user} size={36} />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
      </Stack>
    </motion.header>
  );
};

export default Header;
