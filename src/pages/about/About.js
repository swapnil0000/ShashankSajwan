import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PageHero from '../../components/ui/PageHero';
import Section from '../../components/ui/Section';
import { Reveal, stagger, staggerItem } from '../../components/ui/Motion';
import { useContent } from '../../context/ContentContext';

const About = () => {
  const c = useContent('about');
  const { socials } = useContent('site');
  return (
  <Box>
    <PageHero title={c.heroTitle} accent={c.heroAccent} eyebrow="About" subtitle={c.heroSub} />

    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '380px 1fr' }, gap: { xs: 3, md: 6 }, alignItems: 'center' }}>
        <Reveal>
          <Box sx={{ position: 'relative', maxWidth: 380, mx: 'auto' }}>
            <Box sx={{ position: 'absolute', inset: -10, borderRadius: '32px', background: 'var(--grad)', opacity: 0.9, transform: 'rotate(-3deg)' }} />
            <Box component="img" src={c.photo} alt="Shashank Sajwan" sx={{ position: 'relative', width: '100%', borderRadius: '28px', display: 'block', bgcolor: 'background.paper' }} />
          </Box>
        </Reveal>
        <Box>
          <Reveal>
            <Typography variant="h2">Our <Box component="span" className="text-gradient">Director</Box></Typography>
          </Reveal>
          <Stack gap={1.5} sx={{ mt: 2 }}>
            {c.bio.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}><Typography color="text.secondary">{p}</Typography></Reveal>
            ))}
          </Stack>
          <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mt: 3 }}>
            <Button variant="contained" href={socials.youtube} target="_blank" rel="noopener" startIcon={<YouTubeIcon />}>YouTube</Button>
            <Button variant="outlined" color="inherit" href={socials.instagram} target="_blank" rel="noopener" startIcon={<InstagramIcon />} sx={{ borderColor: 'divider' }}>Instagram</Button>
            <Button variant="outlined" color="inherit" href={socials.telegram} target="_blank" rel="noopener" startIcon={<TelegramIcon />} sx={{ borderColor: 'divider' }}>Telegram</Button>
          </Stack>
        </Box>
      </Box>
    </Container>

    <Section title="Milestones">
      <Box sx={{ display: 'grid', gap: 1.5, gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' } }}>
        {c.milestones.map(({ value: n, label: l }, i) => (
          <Reveal key={`${l}-${i}`} delay={i * 0.06}>
            <Box className="glow-card" sx={{ p: { xs: 2, md: 3 }, borderRadius: '24px', color: '#fff', height: '100%' }}>
              <Typography sx={{ fontSize: { xs: 26, md: 36 }, fontWeight: 800, color: 'secondary.main' }}>{n}</Typography>
              <Typography sx={{ opacity: 0.85, fontSize: { xs: 13, md: 15 } }}>{l}</Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>

    <Section title="Our" accent="Vision" subtitle="Our mission has always prioritised delivering top-notch education at affordable rates." sx={{ bgcolor: 'action.hover' }}>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(5, 1fr)' } }}>
          {c.vision.map(({ icon, title: t, text: d }, i) => (
            <motion.div key={`${t}-${i}`} variants={staggerItem}>
              <Box sx={{ p: 2.5, borderRadius: '20px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', height: '100%' }}>
                <Box sx={{ fontSize: 28 }}>{icon}</Box>
                <Typography variant="h6" sx={{ mt: 1 }}>{t}</Typography>
                <Typography variant="body2" color="text.secondary">{d}</Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Section>

    <Section title="Our" accent="Team">
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
        <Reveal>
          <Typography color="text.secondary">{c.team}</Typography>
        </Reveal>
        <Stack gap={1.2}>
          {c.teamPoints.map((p, i) => (
            <Reveal key={p} delay={i * 0.06}>
              <Stack direction="row" gap={1.2}><CheckCircleRoundedIcon sx={{ color: 'secondary.main' }} /><Typography>{p}</Typography></Stack>
            </Reveal>
          ))}
        </Stack>
      </Box>
    </Section>
  </Box>
  );
};

export default About;
