import React, { useMemo, useState } from 'react';
import { Box, Button, ButtonBase, Chip, Container, Dialog, IconButton, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import Section from '../../components/ui/Section';
import BatchPromo from '../../components/ui/BatchPromo';
import { SegmentTabs } from '../../components/ui/ResourceLayout';
import { Reveal, stagger, staggerItem } from '../../components/ui/Motion';
import { useContent } from '../../context/ContentContext';

const VIDEO = 'https://book-video.s3.ap-south-1.amazonaws.com/Sajwam+Video+FINAL+For+Amazon.mp4';
const FEATURE_ICONS = [MenuBookRoundedIcon, LayersRoundedIcon, TrackChangesRoundedIcon, AccountTreeRoundedIcon, FactCheckRoundedIcon, EditNoteRoundedIcon];
const isHindi = (b) => /hindi/i.test(`${b.id} ${b.subject}`);

// Book trailer plays in a dialog instead of a large black block on the page.
const TrailerDialog = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth PaperProps={{ sx: { bgcolor: '#000', borderRadius: '20px', overflow: 'hidden', m: 2, width: 'calc(100% - 32px)' } }}>
    <IconButton onClick={onClose} aria-label="Close" sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2, color: '#fff', bgcolor: 'rgba(255,255,255,.12)', '&:hover': { bgcolor: 'rgba(255,255,255,.2)' } }}>
      <CloseRoundedIcon />
    </IconButton>
    {open && <video src={VIDEO} controls autoPlay playsInline style={{ width: '100%', display: 'block', aspectRatio: '16 / 9' }} />}
  </Dialog>
);

const Hero = ({ combo, count, onTrailer }) => (
  <Box component="section" sx={{ position: 'relative', overflow: 'hidden', color: '#fff', background: 'var(--grad-navy)', pt: { xs: 11, md: 15 }, pb: { xs: 7, md: 11 } }}>
    <Box sx={{ position: 'absolute', inset: 0, opacity: 0.5, backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
    <Box sx={{ position: 'absolute', width: 520, height: 520, borderRadius: '50%', right: { xs: -260, md: 40 }, top: 40, background: 'radial-gradient(circle, rgba(255,138,31,.45), transparent 65%)', filter: 'blur(20px)' }} />
    <Container maxWidth="lg" sx={{ position: 'relative', px: { xs: 2, sm: 3 } }}>
      <Box sx={{ display: 'grid', gap: { xs: 4, md: 6 }, gridTemplateColumns: { xs: 'minmax(0,1fr)', md: 'minmax(0,1.15fr) minmax(0,0.85fr)' }, alignItems: 'center' }}>
        <Reveal>
          <Chip label="2nd Edition · Disha Publication" sx={{ bgcolor: 'rgba(255,255,255,.1)', color: '#fff', fontWeight: 700, border: '1px solid rgba(255,255,255,.18)' }} />
          <Typography variant="h1" sx={{ mt: 2 }}>
            General Studies <Box component="span" className="text-gradient">Compendium Series</Box>
          </Typography>
          <Typography sx={{ mt: 2, opacity: 0.8, fontSize: { xs: 15, md: 18 }, maxWidth: 560 }}>
            By Shashank Sajwan — NCERT-mapped, PYQ-rich and built for revision. For UPSC CSE Paper 1 &amp; State PSC.
          </Typography>
          <Stack direction="row" gap={{ xs: 2.5, md: 4 }} sx={{ mt: 3.5 }}>
            {[[count, 'Books'], ['6–12', 'NCERT classes'], ['2017–24', 'PYQs inside']].map(([n, l]) => (
              <Box key={l}>
                <Typography sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, color: 'secondary.main', lineHeight: 1.1 }}>{n}</Typography>
                <Typography sx={{ fontSize: 13, opacity: 0.7 }}>{l}</Typography>
              </Box>
            ))}
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} gap={1.5} sx={{ mt: 4 }}>
            {combo.link && <Button size="large" variant="contained" href={combo.link} target="_blank" rel="noopener" startIcon={<ShoppingCartRoundedIcon />}>Buy combo on Amazon</Button>}
            <Button size="large" onClick={onTrailer} startIcon={<PlayArrowRoundedIcon />} sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', '&:hover': { bgcolor: 'rgba(255,255,255,.16)' } }}>
              Watch book trailer
            </Button>
          </Stack>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            {/* The cover art has a white background, so it sits on a white card instead of floating on navy. */}
            <Box sx={{ position: 'relative', width: '100%', maxWidth: { xs: 300, md: 420 }, mx: 'auto' }}>
              <Box sx={{ position: 'absolute', inset: 0, borderRadius: '32px', background: 'var(--grad)', transform: 'rotate(5deg)', opacity: 0.9 }} />
              <Box sx={{ position: 'relative', borderRadius: '32px', bgcolor: '#fff', p: { xs: 2, md: 3 }, boxShadow: '0 40px 70px -30px rgba(0,0,0,.7)' }}>
                <Box component="img" src={combo.img} alt={combo.title} sx={{ width: '100%', maxHeight: { xs: 280, md: 420 }, objectFit: 'contain', display: 'block' }} />
                <Box sx={{ position: 'absolute', left: { xs: -10, md: -24 }, bottom: { xs: 18, md: 32 }, px: 1.6, py: 1, borderRadius: '14px', bgcolor: '#0B1640', color: '#fff', boxShadow: '0 14px 30px -12px rgba(0,0,0,.6)' }}>
                  <Typography sx={{ fontSize: 11, opacity: 0.7, lineHeight: 1.2 }}>Combo set</Typography>
                  <Typography sx={{ fontSize: 15, fontWeight: 800, lineHeight: 1.2 }}>7 books · 2nd Ed.</Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Reveal>
      </Box>
    </Container>
  </Box>
);

const BookCard = ({ b }) => (
  <motion.div variants={staggerItem} style={{ height: '100%' }}>
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '24px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', overflow: 'hidden', transition: 'transform .25s, box-shadow .25s', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 30px 50px -30px rgba(11,22,64,.5)' }, '&:hover img': { transform: 'scale(1.04) rotate(-1deg)' } }}>
      <Box sx={{ position: 'relative', p: { xs: 1.5, md: 2.5 }, pb: { xs: 1.5, md: 2 }, background: 'linear-gradient(160deg, rgba(255,138,31,.10), rgba(27,42,107,.08))' }}>
        {isHindi(b) && <Chip label="हिंदी" size="small" sx={{ position: 'absolute', top: 12, right: 12, zIndex: 1, fontWeight: 800, background: 'var(--grad)', color: '#fff' }} />}
        <Box component="img" loading="lazy" src={b.img} alt={b.title} sx={{ width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', display: 'block', borderRadius: '8px 14px 14px 8px', boxShadow: '-6px 10px 24px -8px rgba(11,22,64,.55)', transition: 'transform .35s' }} />
      </Box>
      <Box sx={{ p: { xs: 1.5, md: 2 }, pt: 1.5, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Typography variant="caption" sx={{ fontWeight: 700, color: 'secondary.dark' }}>{b.ncert}</Typography>
        <Typography sx={{ fontWeight: 800, fontSize: { xs: 14, md: 16 }, lineHeight: 1.3, mt: 0.3, flex: 1 }}>{b.title}</Typography>
        {b.link
          ? <Button variant="contained" href={b.link} target="_blank" rel="noopener" startIcon={<ShoppingCartRoundedIcon sx={{ fontSize: '18px !important' }} />} sx={{ mt: 1.5, minHeight: 40 }}>Buy now</Button>
          : <Button variant="outlined" disabled sx={{ mt: 1.5, minHeight: 40 }}>Coming soon</Button>}
      </Box>
    </Box>
  </motion.div>
);

const BookPage = () => {
  const { combo, items = [] } = useContent('books');
  const [trailer, setTrailer] = useState(false);
  const [tab, setTab] = useState(0);
  const hasHindi = items.some(isHindi);
  const tabs = hasHindi ? ['All books', 'English', 'हिंदी'] : ['All books'];
  const shown = useMemo(() => (tab === 1 ? items.filter((b) => !isHindi(b)) : tab === 2 ? items.filter(isHindi) : items), [items, tab]);
  const features = (combo.points || []).slice(0, 6);

  return (
    <Box>
      <Hero combo={combo} count={items.length} onTrailer={() => setTrailer(true)} />

      {/* What every book includes, overlapping the hero */}
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, mt: { xs: -4, md: -6 }, position: 'relative', zIndex: 1 }}>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, p: { xs: 1.2, md: 2 }, borderRadius: '28px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', boxShadow: '0 30px 60px -36px rgba(11,22,64,.45)' }}>
            {features.map((f, i) => {
              const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
              return (
                <motion.div key={f} variants={staggerItem}>
                  <Stack direction="row" gap={1.5} alignItems="flex-start" sx={{ p: 1.5, borderRadius: '18px', '&:hover': { bgcolor: 'action.hover' } }}>
                    <Box sx={{ width: 42, height: 42, flexShrink: 0, borderRadius: '13px', display: 'grid', placeItems: 'center', color: '#fff', background: 'var(--grad)' }}><Icon fontSize="small" /></Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.45, pt: 0.2 }}>{f}</Typography>
                  </Stack>
                </motion.div>
              );
            })}
          </Box>
        </motion.div>
      </Container>

      <Section title="Choose your" accent="book" subtitle="Buy the complete set, or pick the subjects you need." action={tabs.length > 1 ? <Box sx={{ display: { xs: 'none', sm: 'block' } }}><SegmentTabs tabs={tabs} value={tab} onChange={setTab} layoutId="book-tabs" /></Box> : null}>
        {tabs.length > 1 && <Box sx={{ display: { xs: 'block', sm: 'none' }, mb: 2 }}><SegmentTabs tabs={tabs} value={tab} onChange={setTab} layoutId="book-tabs-m" /></Box>}
        <motion.div key={tab} variants={stagger} initial="hidden" animate="show">
          <Box sx={{ display: 'grid', gap: { xs: 1.5, md: 2.5 }, gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' } }}>
            {shown.map((b) => <BookCard key={b.id} b={b} />)}
          </Box>
        </motion.div>
      </Section>

      {combo.link && (
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Reveal>
            <ButtonBase component="a" href={combo.link} target="_blank" rel="noopener" sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 }, p: { xs: 2, md: 3 }, borderRadius: '24px', textAlign: 'left', border: 1, borderColor: 'divider', bgcolor: 'background.paper', '&:hover': { borderColor: 'primary.main' } }}>
              <Box component="img" src={combo.img} alt="" sx={{ width: { xs: 64, md: 84 }, height: 'auto', flexShrink: 0 }} />
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 800, fontSize: { xs: 16, md: 20 } }}>{combo.title}</Typography>
                <Typography variant="body2" color="text.secondary">Best value — all 7 English books together, latest 2nd edition.</Typography>
              </Box>
              <Button variant="contained" component="span" startIcon={<ShoppingCartRoundedIcon />} sx={{ display: { xs: 'none', sm: 'inline-flex' }, flexShrink: 0 }}>Buy combo</Button>
            </ButtonBase>
          </Reveal>
        </Container>
      )}

      <BatchPromo />
      <TrailerDialog open={trailer} onClose={() => setTrailer(false)} />
    </Box>
  );
};

export default BookPage;
