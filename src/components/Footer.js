import React from 'react';
import { Box, Button, Container, IconButton, Link as MuiLink, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import { useApp } from '../context/AppContext';
import { tr, useContent } from '../context/ContentContext';

const FootLink = ({ to, children }) => (
  <MuiLink
    component={Link}
    to={to}
    underline="none"
    sx={{ color: 'rgba(255,255,255,.68)', fontSize: 14.5, lineHeight: 1.5, width: 'fit-content', transition: 'color .2s, transform .2s', '&:hover': { color: '#fff', transform: 'translateX(3px)' } }}
  >
    {children}
  </MuiLink>
);

const Column = ({ title, children }) => (
  <Stack gap={1.3}>
    <Typography sx={{ fontWeight: 800, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', mb: 0.5 }}>{title}</Typography>
    {children}
  </Stack>
);

const Footer = () => {
  const { lang, t } = useApp();
  const { socials, email, tagline, footerText, logo, nameA, nameB } = useContent('site');
  const batch = useContent('batch');
  const icons = [
    [socials.youtube, YouTubeIcon, 'YouTube', '#FF0000'],
    [socials.instagram, InstagramIcon, 'Instagram', '#DD2A7B'],
    [socials.telegram, TelegramIcon, 'Telegram', '#229ED9'],
    [socials.x, XIcon, 'X', '#000'],
    [socials.linkedin, LinkedInIcon, 'LinkedIn', '#0A66C2'],
  ].filter(([href]) => href);

  return (
    <Box component="footer" sx={{ position: 'relative', overflow: 'hidden', mt: 8, color: '#fff', bgcolor: '#070C24', pb: { xs: 'calc(88px + env(safe-area-inset-bottom))', md: 0 } }}>
      {/* soft glows */}
      <Box sx={{ position: 'absolute', width: 520, height: 520, borderRadius: '50%', top: -260, right: -140, background: 'radial-gradient(circle, rgba(255,138,31,.22), transparent 65%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', width: 480, height: 480, borderRadius: '50%', bottom: -280, left: -160, background: 'radial-gradient(circle, rgba(58,75,216,.28), transparent 65%)', pointerEvents: 'none' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', px: { xs: 2, sm: 3 } }}>
        {/* Top row: brand + newsletter-style Telegram call to action */}
        <Box sx={{ display: 'grid', gap: { xs: 3, md: 6 }, gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' }, alignItems: 'center', py: { xs: 5, md: 7 }, borderBottom: '1px solid rgba(255,255,255,.08)' }}>
          <Box>
            <Stack direction="row" alignItems="center" gap={1.5}>
              <Box component="img" src={logo} alt={`${nameA} ${nameB}`} sx={{ width: 56, height: 56, borderRadius: '16px', bgcolor: '#fff' }} />
              <Box>
                <Typography sx={{ fontWeight: 800, fontSize: 20, letterSpacing: '.02em', lineHeight: 1.2 }}>
                  {nameA} <Box component="span" className="text-gradient">{nameB}</Box>
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,.6)', fontSize: 13.5 }}>{tr(tagline, lang)}</Typography>
              </Box>
            </Stack>
            <Typography sx={{ mt: 2, color: 'rgba(255,255,255,.65)', fontSize: 15, maxWidth: 440, lineHeight: 1.7 }}>
              {t('footerAbout')}
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 2.5, md: 3 }, borderRadius: '24px', bgcolor: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', backdropFilter: 'blur(10px)' }}>
            <Typography sx={{ fontWeight: 800, fontSize: 18 }}>{t('footerTgTitle')}</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,.6)', fontSize: 14, mt: 0.5, mb: 2 }}>{t('footerTgText')}</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={1.2}>
              {socials.telegram && (
                <Button href={socials.telegram} target="_blank" rel="noopener" variant="contained" startIcon={<TelegramIcon />} sx={{ flex: 1 }}>{t('footerTgButton')}</Button>
              )}
              {socials.youtube && (
                <Button href={socials.youtube} target="_blank" rel="noopener" startIcon={<YouTubeIcon />} sx={{ flex: 1, color: '#fff', bgcolor: 'rgba(255,255,255,.1)', '&:hover': { bgcolor: 'rgba(255,255,255,.16)' } }}>{t('footerYtButton')}</Button>
              )}
            </Stack>
          </Box>
        </Box>

        {/* Link columns */}
        <Box sx={{ display: 'grid', gap: { xs: 4, md: 3 }, gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1.3fr' }, py: { xs: 4, md: 6 } }}>
          <Column title="Study">
            <FootLink to="/resources">Resources</FootLink>
            <FootLink to="/newspaper">Newspaper Notes</FootLink>
            <FootLink to="/ncert">NCERT Notes</FootLink>
            <FootLink to="/pyqs">PYQs</FootLink>
            <FootLink to="/syllabus">Syllabus</FootLink>
          </Column>
          <Column title="Explore">
            {batch.enabled !== false && (
              <Stack direction="row" alignItems="center" gap={1}>
                <FootLink to="/courses">{batch.navLabel || 'Batch'}</FootLink>
                {batch.status !== 'live' && <Box sx={{ px: 0.8, py: 0.2, borderRadius: '6px', fontSize: 10, fontWeight: 800, letterSpacing: '.04em', color: '#fff', background: 'var(--grad)' }}>SOON</Box>}
              </Stack>
            )}
            <FootLink to="/books">Our Books</FootLink>
            <FootLink to="/videos">Videos</FootLink>
            <FootLink to="/study">Study Hub</FootLink>
            <FootLink to="/about">About</FootLink>
          </Column>
          <Column title="Support">
            <FootLink to="/contact">Contact</FootLink>
            <FootLink to="/faqs">FAQs</FootLink>
            <FootLink to="/private">Privacy Policy</FootLink>
            <FootLink to="/terms">Terms &amp; Conditions</FootLink>
            <FootLink to="/refund">Refund Policy</FootLink>
          </Column>
          <Box sx={{ gridColumn: { xs: '1 / -1', md: 'auto' } }}>
            <Column title="Connect">
              <Stack direction="row" gap={1} flexWrap="wrap">
                {icons.map(([href, Icon, label, color]) => (
                  <IconButton
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener"
                    aria-label={label}
                    sx={{ width: 44, height: 44, color: '#fff', bgcolor: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', transition: 'all .2s', '&:hover': { bgcolor: color, borderColor: color, transform: 'translateY(-2px)' } }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Stack>
              <Box
                component="a"
                href={`mailto:${email}`}
                sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1.2, p: 1.2, pr: 1.5, borderRadius: '14px', bgcolor: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', color: '#fff', '&:hover': { bgcolor: 'rgba(255,255,255,.09)' } }}
              >
                <Box sx={{ width: 36, height: 36, flexShrink: 0, borderRadius: '10px', display: 'grid', placeItems: 'center', background: 'var(--grad)' }}><MailRoundedIcon fontSize="small" /></Box>
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography sx={{ fontSize: 11.5, color: 'rgba(255,255,255,.55)' }}>{t('footerEmailLabel')}</Typography>
                  <Typography noWrap sx={{ fontSize: 14, fontWeight: 700 }}>{email}</Typography>
                </Box>
                <ArrowForwardRoundedIcon sx={{ fontSize: 18, opacity: 0.6 }} />
              </Box>
            </Column>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2} sx={{ py: 3, borderTop: '1px solid rgba(255,255,255,.08)' }}>
          <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>{footerText}</Typography>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            endIcon={<ArrowUpwardRoundedIcon />}
            sx={{ minHeight: 36, fontSize: 13, color: 'rgba(255,255,255,.7)', '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,.06)' } }}
          >
            {t('backToTop')}
          </Button>
        </Stack>
      </Container>
      <Box sx={{ height: 4, background: 'var(--grad)' }} />
    </Box>
  );
};

export default Footer;
