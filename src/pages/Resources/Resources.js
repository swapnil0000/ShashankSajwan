import React from 'react';
import { Link } from 'react-router-dom';
import { Box, ButtonBase, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import PageHero from '../../components/ui/PageHero';
import BatchPromo from '../../components/ui/BatchPromo';
import DailyFeed, { FeedItem, useFeed } from '../../components/ui/DailyFeed';
import { stagger, staggerItem } from '../../components/ui/Motion';

// The Resources section: daily-updated material, each managed from the admin panel.
export const RESOURCE_SECTIONS = [
  { key: 'feed_newspaper', to: '/newspaper', icon: '📰', label: 'Daily Newspaper Notes', desc: 'Every day’s newspaper analysis' },
  { key: 'feed_ca', to: '/resources/current-affairs', icon: '🌏', label: 'Current Affairs', desc: 'Daily current affairs for Prelims & Mains' },
  { key: 'feed_mcq', to: '/resources/ncert-mcqs', icon: '✅', label: 'NCERT MCQs', desc: 'Daily NCERT-based practice questions' },
  { key: 'feed_pyq', to: '/resources/pyqs', icon: '🎯', label: 'PYQs', desc: 'Previous year questions with analysis' },
];

const SectionCard = ({ s }) => {
  const { items } = useFeed(s.key);
  const latest = items[0];
  return (
    <motion.div variants={staggerItem} style={{ height: '100%' }}>
      <ButtonBase component={Link} to={s.to} sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch', textAlign: 'left', p: 2.5, borderRadius: '22px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', transition: 'transform .2s, border-color .2s', '&:hover': { transform: 'translateY(-3px)', borderColor: 'primary.main' } }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box sx={{ width: 52, height: 52, borderRadius: '16px', display: 'grid', placeItems: 'center', fontSize: 26, bgcolor: 'action.hover' }}>{s.icon}</Box>
          {latest && <Typography variant="caption" sx={{ fontWeight: 800, color: 'secondary.main' }}>{items.length} posts</Typography>}
        </Stack>
        <Typography variant="h6" sx={{ mt: 1.5 }}>{s.label}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>{s.desc}</Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1.5 }} noWrap>{latest ? `Latest: ${latest.title || latest.date}` : 'Starting soon'}</Typography>
        <Stack direction="row" alignItems="center" gap={0.5} sx={{ mt: 1, color: 'primary.main', fontWeight: 700, fontSize: 14 }}>Open <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} /></Stack>
      </ButtonBase>
    </motion.div>
  );
};

// Newest posts across every resource feed.
export const useLatestAcrossFeeds = (limit = 6) => {
  const feeds = [useFeed('feed_newspaper'), useFeed('feed_ca'), useFeed('feed_mcq'), useFeed('feed_pyq')];
  return RESOURCE_SECTIONS
    .flatMap((s, n) => feeds[n].items.slice(0, limit).map((i) => ({ ...i, title: `${s.icon} ${i.title || s.label}`, section: s })))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .slice(0, limit);
};

const Latest = () => {
  const all = useLatestAcrossFeeds(6);
  if (!all.length) return null;
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 1.5 }}>Latest updates</Typography>
      <Stack gap={1.2}>{all.map((item, i) => <FeedItem key={`${item.date}-${i}`} item={item} i={i} />)}</Stack>
    </Box>
  );
};

const Resources = () => (
  <Box sx={{ pb: 4 }}>
    <PageHero title="Daily" accent="Resources" eyebrow="Resources" subtitle="Fresh material every day — newspaper notes, current affairs, NCERT MCQs and PYQs." />
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      <motion.div variants={stagger} initial="hidden" animate="show">
        <Box sx={{ display: 'grid', gap: { xs: 1.5, md: 2 }, gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' } }}>
          {RESOURCE_SECTIONS.map((s) => <SectionCard key={s.key} s={s} />)}
        </Box>
      </motion.div>
      <Container maxWidth="md" disableGutters><Latest /></Container>
    </Container>
    <BatchPromo />
  </Box>
);

export const CurrentAffairs = () => <DailyFeed feedKey="feed_ca" eyebrow="Current Affairs" />;
export const NcertMcqs = () => <DailyFeed feedKey="feed_mcq" eyebrow="NCERT MCQs" archives={[{ to: '/ncert', label: 'NCERT books (PDF)', sub: 'Class 6–12, subject-wise' }]} />;
export const PyqFeed = () => <DailyFeed feedKey="feed_pyq" eyebrow="PYQs" archives={[{ to: '/pyqs', label: 'PYQ papers (PDF)', sub: 'Prelims & Mains' }]} />;
export const Newspaper = () => (
  <DailyFeed
    feedKey="feed_newspaper"
    eyebrow="Newspaper Notes"
    archives={[{ to: '/newsnotes25', label: 'Newspaper Notes 2025', sub: 'January – July 2025' }, { to: '/newsnotes', label: 'Newspaper Notes 2024', sub: 'April – December 2024' }]}
  />
);

export default Resources;
