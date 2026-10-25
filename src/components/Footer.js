import React from 'react';
import { Box, Container, IconButton, Link as MuiLink, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useApp } from '../context/AppContext';
import { socials } from '../data/studyHub';
import { tokens } from '../theme/theme';

const FootLink = ({ to, children }) => (
  <MuiLink component={Link} to={to} underline="none" sx={{ color: 'rgba(255,255,255,.75)', fontSize: 14, py: 0.5, '&:hover': { color: '#fff' } }}>
    {children}
  </MuiLink>
);

const Footer = () => {
  const { t } = useApp();
  const icons = [
    [socials.youtube, YouTubeIcon, 'YouTube'],
    [socials.instagram, InstagramIcon, 'Instagram'],
    [socials.telegram, TelegramIcon, 'Telegram'],
    [socials.x, XIcon, 'X'],
    [socials.linkedin, LinkedInIcon, 'LinkedIn'],
  ];

  return (
    <Box component="footer" sx={{ background: tokens.gradientNavy, color: '#fff', mt: 6, pb: { xs: 'calc(90px + env(safe-area-inset-bottom))', md: 4 }, position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ height: 4, background: tokens.gradient }} />
      <Container maxWidth="lg" sx={{ pt: 6, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr 1fr', md: '2fr 1fr 1fr 1.5fr' } }}>
          <Box sx={{ gridColumn: { xs: '1 / -1', md: 'auto' } }}>
            <Stack direction="row" alignItems="center" gap={1.5}>
              <Box component="img" src="/assets/shashank.webp" alt="" sx={{ width: 52, height: 52, borderRadius: '14px' }} />
              <Box>
                <Typography sx={{ fontWeight: 800, fontSize: 18 }}>SHASHANK SAJWAN</Typography>
                <Typography sx={{ opacity: 0.7, fontSize: 13 }}>{t('tagline')}</Typography>
              </Box>
            </Stack>
          </Box>
          <Stack>
            <Typography sx={{ fontWeight: 700, mb: 1 }}>{t('quickLinks')}</Typography>
            <FootLink to="/study">{t('studyHub')}</FootLink>
            <FootLink to="/books">{t('ourBooks')}</FootLink>
            <FootLink to="/videos">{t('videos')}</FootLink>
            <FootLink to="/faqs">{t('faqs')}</FootLink>
          </Stack>
          <Stack>
            <Typography sx={{ fontWeight: 700, mb: 1 }}>{t('policies')}</Typography>
            <FootLink to="/private">Privacy Policy</FootLink>
            <FootLink to="/terms">Terms &amp; Conditions</FootLink>
            <FootLink to="/refund">Refund Policy</FootLink>
          </Stack>
          <Box sx={{ gridColumn: { xs: '1 / -1', md: 'auto' } }}>
            <Typography sx={{ fontWeight: 700, mb: 1 }}>{t('connect')}</Typography>
            <Stack direction="row" gap={1} sx={{ mb: 2 }}>
              {icons.map(([href, Icon, label]) => (
                <IconButton key={label} href={href} target="_blank" rel="noopener" aria-label={label} sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,.08)', '&:hover': { bgcolor: 'rgba(255,255,255,.16)' } }}>
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
            <Typography sx={{ fontSize: 13, opacity: 0.7 }}>{t('careers')}</Typography>
            <MuiLink href="mailto:ask.iasmentor@gmail.com" sx={{ color: '#fff', fontWeight: 600 }}>ask.iasmentor@gmail.com</MuiLink>
          </Box>
        </Box>
        <Typography sx={{ mt: 5, pt: 3, borderTop: '1px solid rgba(255,255,255,.1)', fontSize: 13, opacity: 0.6, textAlign: 'center' }}>
          © {new Date().getFullYear()} Shashank Sajwan · {t('rights')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
