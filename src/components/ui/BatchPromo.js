import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Button, ButtonBase, Container, Stack, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useContent } from '../../context/ContentContext';
import { Reveal } from './Motion';

// Batch call-to-action reused across the site.
//  compact — one tappable row (mobile "More" sheet, hero, small spaces)
//  banner  — full-width strip placed at the end of study pages
const BatchPromo = ({ variant = 'banner' }) => {
  const b = useContent('batch');
  const { pathname } = useLocation();
  if (b.enabled === false || pathname.startsWith('/courses') || pathname.startsWith('/batch')) return null;
  const soon = b.status !== 'live';
  const badge = soon ? 'Coming soon' : b.badge;

  if (variant === 'compact') {
    return (
      <ButtonBase
        component={Link}
        to="/courses"
        sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1.5, p: 1.2, pr: 1.5, borderRadius: '20px', textAlign: 'left', color: '#fff', background: 'var(--grad-navy)', overflow: 'hidden', position: 'relative' }}
      >
        {b.image
          ? <Box component="img" src={b.image} alt="" sx={{ width: 56, height: 56, borderRadius: '14px', objectFit: 'cover', flexShrink: 0 }} />
          : <Box sx={{ width: 56, height: 56, borderRadius: '14px', display: 'grid', placeItems: 'center', fontSize: 26, background: 'var(--grad)', flexShrink: 0 }}>🎓</Box>}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {badge && (
            <Stack direction="row" alignItems="center" gap={0.6}>
              <Box className="pulse" sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#3ddc84' }} />
              <Typography sx={{ fontSize: 11, fontWeight: 800, color: 'secondary.main', textTransform: 'uppercase', letterSpacing: '.06em' }}>{badge}</Typography>
            </Stack>
          )}
          <Typography noWrap sx={{ fontWeight: 800, fontSize: 15 }}>{b.title} {b.accent}</Typography>
          <Typography noWrap sx={{ fontSize: 12, opacity: 0.75 }}>{(b.highlights || []).slice(0, 2).map((h) => h.text).join(' · ')}</Typography>
        </Box>
        <Box sx={{ width: 34, height: 34, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'var(--grad)', flexShrink: 0 }}>
          <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
        </Box>
      </ButtonBase>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, mt: { xs: 4, md: 6 } }}>
      <Reveal>
        <Box className="glow-card" sx={{ p: { xs: 2.5, md: 4 }, borderRadius: '28px', color: '#fff', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, gap: { xs: 2, md: 4 } }}>
          {b.image && <Box component="img" loading="lazy" src={b.image} alt="" sx={{ display: { xs: 'none', sm: 'block' }, width: { sm: '100%', md: 220 }, maxHeight: 160, objectFit: 'cover', borderRadius: '18px', flexShrink: 0 }} />}
          <Box sx={{ flex: 1 }}>
            {badge && <Typography sx={{ fontSize: 12, fontWeight: 800, color: 'secondary.main', textTransform: 'uppercase', letterSpacing: '.08em' }}>🎓 {badge}</Typography>}
            <Typography variant="h3" sx={{ mt: 0.5 }}>{soon ? `${b.title} ${b.accent} is launching soon` : `Want guided preparation? Join the ${b.title} ${b.accent}`}</Typography>
            <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 1.5 }}>
              {(b.highlights || []).slice(0, 4).map((h, i) => (
                <Box key={`${h.text}-${i}`} sx={{ px: 1.2, py: 0.5, borderRadius: '999px', bgcolor: 'rgba(255,255,255,.1)', fontSize: 12.5, fontWeight: 600 }}>{h.icon} {h.text}</Box>
              ))}
            </Stack>
          </Box>
          <Button component={Link} to="/courses" endIcon={<ArrowForwardRoundedIcon />} sx={{ flexShrink: 0, bgcolor: '#fff', color: '#0B1640', '&:hover': { bgcolor: '#eee' }, alignSelf: { xs: 'stretch', md: 'center' } }}>
            {soon ? 'Get notified' : 'View batch'}
          </Button>
        </Box>
      </Reveal>
    </Container>
  );
};

export default BatchPromo;
