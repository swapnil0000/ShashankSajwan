import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, ButtonBase, Chip, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import PageHero from './PageHero';
import BatchPromo from './BatchPromo';
import { SegmentTabs } from './ResourceLayout';
import { useContent } from '../../context/ContentContext';
import IconTile from './IconTile';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Local YYYY-MM-DD (posts are dated in Indian time by the admin, not UTC).
export const todayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

// Published items, newest first. Future-dated posts stay hidden until their day.
export const useFeed = (key) => {
  const feed = useContent(key);
  const items = useMemo(() => {
    const today = todayKey();
    return (feed.items || []).filter((i) => i.date && i.date <= today && i.hidden !== true).sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  }, [feed.items]);
  return { ...feed, items };
};

export const FeedItem = ({ item, i = 0, compact }) => {
  const [y, m, d] = item.date.split('-').map(Number);
  const isNew = item.date >= todayKey(new Date(Date.now() - 864e5));
  const Wrap = item.link ? 'a' : 'div';
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(i * 0.03, 0.3) }}>
      <Box
        component={Wrap}
        href={item.link || undefined}
        target={item.link ? '_blank' : undefined}
        rel="noopener"
        sx={{
          display: 'flex', gap: 1.5, alignItems: 'center', p: compact ? 1.2 : 1.5, borderRadius: '18px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', color: 'inherit',
          transition: 'border-color .2s, transform .2s', ...(item.link && { '&:hover': { borderColor: 'primary.main', transform: 'translateY(-2px)' } }),
        }}
      >
        <Box sx={{ width: compact ? 48 : 56, flexShrink: 0, textAlign: 'center', borderRadius: '14px', overflow: 'hidden', border: 1, borderColor: 'divider' }}>
          <Box sx={{ background: 'var(--grad)', color: '#fff', fontSize: 10.5, fontWeight: 800, py: 0.3, textTransform: 'uppercase' }}>{MONTHS[m - 1]}</Box>
          <Typography sx={{ fontWeight: 800, fontSize: compact ? 18 : 22, lineHeight: compact ? '26px' : '32px' }}>{d}</Typography>
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Stack direction="row" gap={0.8} alignItems="center">
            {isNew && <Chip label="NEW" size="small" sx={{ height: 18, fontSize: 10, fontWeight: 800, background: 'var(--grad)', color: '#fff' }} />}
            <Typography variant="caption" color="text.secondary">{d} {MONTHS_LONG[m - 1]} {y}</Typography>
          </Stack>
          <Typography sx={{ fontWeight: 700, fontSize: compact ? 14 : 15.5, lineHeight: 1.35 }} noWrap={compact}>{item.title || 'Daily notes'}</Typography>
          {!compact && item.note && <Typography variant="body2" color="text.secondary" sx={{ mt: 0.3 }}>{item.note}</Typography>}
        </Box>
        {item.link && <OpenInNewRoundedIcon sx={{ color: 'primary.main', fontSize: 20, flexShrink: 0 }} />}
      </Box>
    </motion.div>
  );
};

// Full page for one daily feed: month tabs, newest first, plus optional archive links.
// `year` limits the page to one year's posts (e.g. the 2026 archive).
const DailyFeed = ({ feedKey, eyebrow, year, heading, archives = [], emptyText = 'New posts start soon. Check back tomorrow!' }) => {
  const feed = useFeed(feedKey);
  const { subtitle } = feed;
  const title = heading ? heading[0] : feed.title;
  const accent = heading ? heading[1] : feed.accent;
  const items = useMemo(() => (year ? feed.items.filter((i) => i.date.startsWith(`${year}-`)) : feed.items), [feed.items, year]);
  const months = useMemo(() => [...new Set(items.map((i) => i.date.slice(0, 7)))], [items]);
  const [tab, setTab] = useState(0);
  const month = months[Math.min(tab, months.length - 1)];
  const shown = items.filter((i) => i.date.startsWith(month || ''));
  const label = (ym) => { const [y, m] = ym.split('-').map(Number); return `${MONTHS_LONG[m - 1]} ${y}`; };

  return (
    <Box sx={{ pb: 4 }}>
      <PageHero title={title} accent={accent} eyebrow={eyebrow} subtitle={subtitle} />
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        {months.length > 1 && <Box sx={{ mb: 2 }}><SegmentTabs tabs={months.map(label)} value={Math.min(tab, months.length - 1)} onChange={setTab} layoutId={`feed-${feedKey}`} /></Box>}
        {items.length === 0 ? (
          <Box sx={{ p: 4, textAlign: 'center', borderRadius: '20px', border: 1, borderStyle: 'dashed', borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}><IconTile icon="📰" size={56} /></Box>
            <Typography color="text.secondary">{emptyText}</Typography>
          </Box>
        ) : (
          <Stack gap={1.2}>
            {shown.map((item, i) => <FeedItem key={`${item.date}-${i}`} item={item} i={i} />)}
          </Stack>
        )}

        {archives.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 1.5 }}>Archive</Typography>
            <Box sx={{ display: 'grid', gap: 1.5, gridTemplateColumns: { xs: '1fr', sm: `repeat(${Math.min(archives.length, 3)}, 1fr)` } }}>
              {archives.map((a) => (
                <ButtonBase key={a.to} component={Link} to={a.to} sx={{ justifyContent: 'space-between', p: 2, borderRadius: '18px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', '&:hover': { borderColor: 'primary.main' } }}>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography sx={{ fontWeight: 800 }}>{a.label}</Typography>
                    {a.sub && <Typography variant="body2" color="text.secondary">{a.sub}</Typography>}
                  </Box>
                  <ArrowForwardRoundedIcon color="primary" />
                </ButtonBase>
              ))}
            </Box>
          </Box>
        )}
      </Container>
      <BatchPromo />
    </Box>
  );
};

export const LatestFeedButton = ({ feedKey, to }) => {
  const { items } = useFeed(feedKey);
  if (!items.length) return null;
  return <Button component={Link} to={to} size="small" endIcon={<ArrowForwardRoundedIcon />}>See all</Button>;
};

export default DailyFeed;
