import React from 'react';
import { Navigate } from 'react-router-dom';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import Section from '../../components/ui/Section';
import FaqList from '../../components/ui/FaqList';
import { Reveal, stagger, staggerItem } from '../../components/ui/Motion';
import { useContent } from '../../context/ContentContext';

// Where the main button goes: the admin-set link, or an email enquiry.
export const useBatchCta = () => {
  const b = useContent('batch');
  const { email } = useContent('site');
  const href = b.ctaLink || `mailto:${email}?subject=${encodeURIComponent(`Enquiry: ${b.title} ${b.accent}`)}`;
  return { href, label: b.ctaLabel || 'Enquire now', external: Boolean(b.ctaLink) };
};

const CtaButton = (props) => {
  const { href, label, external } = useBatchCta();
  return (
    <Button variant="contained" size="large" href={href} target={external ? '_blank' : undefined} rel="noopener" endIcon={<ArrowForwardRoundedIcon />} {...props}>
      {label}
    </Button>
  );
};

const Batch = () => {
  const b = useContent('batch');
  if (b.enabled === false) return <Navigate to="/" replace />;

  return (
    <Box sx={{ pb: { xs: 12, md: 4 } }}>
      {/* Hero */}
      <Box component="section" className="grid-bg" sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 10, md: 14 }, pb: { xs: 4, md: 6 } }}>
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <Container maxWidth="lg" sx={{ position: 'relative', px: { xs: 2, sm: 3 } }}>
          <Box sx={{ display: 'grid', gap: { xs: 3, md: 6 }, gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' }, alignItems: 'center' }}>
            <Box>
              <Reveal>
                {b.badge && <Chip label={`🎓 ${b.badge}`} sx={{ bgcolor: 'rgba(255,138,31,.14)', color: 'secondary.dark', fontWeight: 700, mb: 2 }} />}
                <Typography variant="h1">{b.title} <Box component="span" className="text-gradient">{b.accent}</Box></Typography>
                <Typography color="text.secondary" sx={{ mt: 2, fontSize: { xs: 15, md: 18 }, maxWidth: 560 }}>{b.subtitle}</Typography>
              </Reveal>
              <Reveal delay={0.08}>
                {b.price && (
                  <Typography sx={{ mt: 2.5, fontWeight: 800, fontSize: { xs: 26, md: 32 } }}>
                    {b.price} <Typography component="span" color="text.secondary" sx={{ fontSize: 14, fontWeight: 600 }}>· {b.highlights?.[0]?.text}</Typography>
                  </Typography>
                )}
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={1.2} sx={{ mt: 3 }}>
                  <CtaButton />
                  {b.videoUrl && <Button size="large" variant="outlined" color="inherit" href={b.videoUrl} target="_blank" rel="noopener" startIcon={<PlayCircleRoundedIcon />} sx={{ borderColor: 'divider' }}>Watch intro</Button>}
                  {b.brochureUrl && <Button size="large" variant="outlined" color="inherit" href={b.brochureUrl} target="_blank" rel="noopener" startIcon={<DescriptionRoundedIcon />} sx={{ borderColor: 'divider' }}>Brochure</Button>}
                </Stack>
              </Reveal>
            </Box>
            {b.image && (
              <Reveal delay={0.12}>
                <motion.div whileHover={{ rotateX: 4, rotateY: -6 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} style={{ transformPerspective: 1000 }}>
                  <Box component="img" src={b.image} alt="" sx={{ width: '100%', display: 'block', borderRadius: '28px', boxShadow: '0 40px 80px -40px rgba(11,22,64,.6)' }} />
                </motion.div>
              </Reveal>
            )}
          </Box>

          {/* Highlights */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <Box sx={{ mt: { xs: 3, md: 5 }, display: 'grid', gap: 1.2, gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(3, 1fr)' } }}>
              {(b.highlights || []).map((h, i) => (
                <motion.div key={`${h.text}-${i}`} variants={staggerItem}>
                  <Stack direction="row" alignItems="center" gap={1.2} sx={{ height: '100%', p: { xs: 1.5, md: 2 }, borderRadius: '18px', bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
                    <Box sx={{ width: 40, height: 40, flexShrink: 0, borderRadius: '12px', display: 'grid', placeItems: 'center', fontSize: 20, bgcolor: 'action.hover' }}>{h.icon}</Box>
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: 13, md: 15 }, lineHeight: 1.3 }}>{h.text}</Typography>
                  </Stack>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* What's included */}
      <Section title="What's" accent="included" subtitle="Everything you need from Prelims to Interview, in one batch.">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' } }}>
            {(b.details || []).map((d, i) => (
              <motion.div key={`${d.title}-${i}`} variants={staggerItem}>
                <Box sx={{ position: 'relative', height: '100%', p: 2.5, pt: 3, borderRadius: '20px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', overflow: 'hidden' }}>
                  <Typography className="text-gradient" sx={{ position: 'absolute', top: 6, right: 14, fontSize: 40, fontWeight: 800, opacity: 0.25 }}>{String(i + 1).padStart(2, '0')}</Typography>
                  <Stack direction="row" gap={1} alignItems="center" sx={{ mb: 1, pr: 5 }}>
                    <CheckCircleRoundedIcon sx={{ color: 'secondary.main' }} fontSize="small" />
                    <Typography variant="h6">{d.title}</Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">{d.text}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Section>

      {/* Enquiry banner */}
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Reveal>
          <Box className="glow-card" sx={{ p: { xs: 3, md: 5 }, borderRadius: '28px', color: '#fff', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 2 }}>
            <Box>
              <Typography variant="h2">Ready to start your journey?</Typography>
              <Typography sx={{ opacity: 0.85, mt: 1 }}>Talk to the team about admissions, fees and batch timings.</Typography>
            </Box>
            <CtaButton sx={{ bgcolor: '#fff', color: '#0B1640', background: '#fff', flexShrink: 0, '&:hover': { bgcolor: '#eee' } }} />
          </Box>
        </Reveal>
      </Container>

      {/* FAQs + terms */}
      <Section title="Batch" accent="FAQs">
        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1.6fr 1fr' }, alignItems: 'start' }}>
          <FaqList items={b.faqs || []} />
          {(b.terms || []).length > 0 && (
            <Reveal>
              <Box sx={{ p: 2.5, borderRadius: '20px', bgcolor: 'action.hover', border: 1, borderColor: 'divider', position: { md: 'sticky' }, top: { md: 96 } }}>
                <Stack direction="row" gap={1} alignItems="center" sx={{ mb: 1.5 }}>
                  <GavelRoundedIcon fontSize="small" color="primary" />
                  <Typography variant="h6">Terms &amp; conditions</Typography>
                </Stack>
                <Stack component="ul" gap={1} sx={{ m: 0, pl: 2.5 }}>
                  {b.terms.map((t, i) => <Typography component="li" key={i} variant="body2" color="text.secondary">{t}</Typography>)}
                </Stack>
              </Box>
            </Reveal>
          )}
        </Box>
      </Section>

      {/* Sticky enquiry bar on phones, above the bottom nav */}
      <Box className="glass" sx={{ display: { xs: 'flex', md: 'none' }, position: 'fixed', left: 0, right: 0, bottom: 'calc(68px + env(safe-area-inset-bottom))', zIndex: 1090, px: 2, py: 1.2, gap: 1.5, alignItems: 'center', borderTop: 1, borderColor: 'divider' }}>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography noWrap sx={{ fontWeight: 800, fontSize: 14 }}>{b.price || `${b.title} ${b.accent}`}</Typography>
          <Typography noWrap variant="caption" color="text.secondary">{b.badge}</Typography>
        </Box>
        <CtaButton size="medium" />
      </Box>
    </Box>
  );
};

export default Batch;
