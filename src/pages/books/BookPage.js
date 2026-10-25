import React, { useRef, useState } from 'react';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PageHero from '../../components/ui/PageHero';
import Section from '../../components/ui/Section';
import { Reveal, stagger, staggerItem } from '../../components/ui/Motion';
import { bookCombo, bookList } from '../../data/books';

const VIDEO = 'https://book-video.s3.ap-south-1.amazonaws.com/Sajwam+Video+FINAL+For+Amazon.mp4';

const BookTrailer = () => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };
  return (
    <Box onClick={toggle} sx={{ position: 'relative', borderRadius: '28px', overflow: 'hidden', bgcolor: '#000', cursor: 'pointer', aspectRatio: '16 / 9' }}>
      <video ref={ref} src={VIDEO} preload="metadata" playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      {!playing && (
        <Box sx={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'linear-gradient(180deg, transparent, rgba(0,0,0,.5))' }}>
          <Box className="pulse" sx={{ width: 72, height: 72, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'var(--grad)', color: '#fff' }}>
            <PlayArrowRoundedIcon sx={{ fontSize: 42 }} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

const BookPage = () => (
  <Box>
    <PageHero title="Our" accent="Books" subtitle="The Disha General Studies Compendium series by Shashank Sajwan — NCERT-mapped, PYQ-rich and built for revision." />

    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      <Reveal><BookTrailer /></Reveal>
    </Container>

    <Section>
      <Reveal>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr' }, gap: { xs: 3, md: 5 }, alignItems: 'center', p: { xs: 2.5, md: 4 }, borderRadius: '28px', bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
          <motion.div whileHover={{ scale: 1.03, rotate: -1 }}>
            <Box component="img" src={bookCombo.img} alt={bookCombo.title} sx={{ width: '100%', display: 'block' }} />
          </motion.div>
          <Box>
            <Chip label="Best value · Combo" sx={{ background: 'var(--grad)', color: '#fff', mb: 1.5 }} />
            <Typography variant="h2">{bookCombo.title}</Typography>
            <Stack gap={1} sx={{ mt: 2 }}>
              {bookCombo.points.map((p) => (
                <Stack key={p} direction="row" gap={1.2}><CheckCircleRoundedIcon sx={{ color: 'secondary.main', mt: 0.2 }} fontSize="small" /><Typography variant="body2">{p}</Typography></Stack>
              ))}
            </Stack>
            <Button variant="contained" size="large" href={bookCombo.link} target="_blank" rel="noopener" startIcon={<ShoppingBagRoundedIcon />} sx={{ mt: 3 }}>Buy combo on Amazon</Button>
          </Box>
        </Box>
      </Reveal>
    </Section>

    <Section title="Buy" accent="individually" subtitle="Every book: NCERT coverage, chapter-wise PYQs (2017–24), mind maps and practice MCQs.">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Box sx={{ display: 'grid', gap: { xs: 1.5, md: 2.5 }, gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' } }}>
          {bookList.map((b) => (
            <motion.div key={b.id} variants={staggerItem} whileHover={{ y: -6 }}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '20px', overflow: 'hidden', bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
                <Box component="img" loading="lazy" src={b.img} alt={b.title} sx={{ width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', display: 'block' }} />
                <Box sx={{ p: 1.5, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>{b.ncert}</Typography>
                  <Typography sx={{ fontWeight: 800, fontSize: { xs: 14, md: 16 }, lineHeight: 1.3, flex: 1 }}>{b.title}</Typography>
                  <Button variant="contained" size="small" href={b.link} target="_blank" rel="noopener" sx={{ mt: 1.5, minHeight: 38 }}>Buy now</Button>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Section>
  </Box>
);

export default BookPage;
