import React, { useState } from 'react';
import { Box, ButtonBase, Container, Stack, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import PageHero from './PageHero';
import { useApp } from '../../context/AppContext';

// Segmented tab bar with a sliding gradient pill (scrolls sideways on mobile).
export const SegmentTabs = ({ tabs, value, onChange, layoutId = 'seg-pill' }) => (
  <Stack direction="row" gap={0.5} className="no-scrollbar" sx={{ overflowX: 'auto', p: 0.5, borderRadius: '999px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', width: 'fit-content', maxWidth: '100%' }}>
    {tabs.map((label, i) => (
      <ButtonBase
        key={label}
        onClick={() => onChange(i)}
        sx={{ position: 'relative', flexShrink: 0, px: 2.2, height: 40, borderRadius: '999px', fontWeight: 700, fontSize: 14, color: value === i ? '#fff' : 'text.secondary', transition: 'color .2s' }}
      >
        {value === i && (
          <motion.span layoutId={layoutId} transition={{ type: 'spring', stiffness: 500, damping: 38 }} style={{ position: 'absolute', inset: 0, borderRadius: 999, background: 'var(--grad)' }} />
        )}
        <span style={{ position: 'relative', textTransform: 'capitalize' }}>{label.toLowerCase()}</span>
      </ButtonBase>
    ))}
  </Stack>
);

const PdfTile = ({ item, i }) => (
  <motion.a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: Math.min(i * 0.03, 0.4), duration: 0.35 }}
    whileTap={{ scale: 0.97 }}
    style={{ display: 'block', color: 'inherit' }}
  >
    <Box
      sx={{
        borderRadius: '18px', overflow: 'hidden', bgcolor: 'background.paper', border: 1, borderColor: 'divider',
        transition: 'transform .25s, box-shadow .25s',
        '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 40px -22px rgba(11,22,64,.5)' },
        '&:hover .open': { opacity: 1 },
      }}
    >
      <Box sx={{ position: 'relative', bgcolor: 'action.hover' }}>
        <Box component="img" loading="lazy" src={item.img} alt="" sx={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', display: 'block' }} />
        <Box className="open" sx={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', bgcolor: 'rgba(11,22,64,.45)', opacity: { xs: 0, md: 0 }, transition: 'opacity .2s' }}>
          <Stack direction="row" gap={0.8} alignItems="center" sx={{ color: '#fff', fontWeight: 700, px: 2, py: 1, borderRadius: '999px', background: 'var(--grad)' }}>
            Open PDF <OpenInNewRoundedIcon sx={{ fontSize: 16 }} />
          </Stack>
        </Box>
      </Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1.5, py: 1 }}>
        <Typography sx={{ fontSize: 13, fontWeight: 700 }}>{item.title || `Notes ${i + 1}`}</Typography>
        <OpenInNewRoundedIcon sx={{ fontSize: 16, color: 'primary.main' }} />
      </Stack>
    </Box>
  </motion.a>
);

// Shared layout for every PDF resource page (NCERT, PYQs, GS, Optional, Newspaper…).
const ResourceLayout = ({ sectionId, title, accent, subtitle, tabs }) => {
  const { pushRecent } = useApp();
  const [value, setValue] = useState(0);
  const items = tabs[value]?.items || [];

  React.useEffect(() => { if (sectionId) pushRecent(sectionId); }, [sectionId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box sx={{ pb: 4 }}>
      <PageHero title={title} accent={accent} subtitle={subtitle} />
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        {tabs.length > 1 && (
          <Box sx={{ position: { xs: 'sticky', md: 'static' }, top: 64, zIndex: 5, py: 1, mb: 2 }}>
            <SegmentTabs tabs={tabs.map((t) => t.label)} value={value} onChange={setValue} />
          </Box>
        )}
        <Typography color="text.secondary" sx={{ fontSize: 13, mb: 1.5 }}>{items.length} documents</Typography>
        <AnimatePresence mode="wait">
          <motion.div key={value} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <Box sx={{ display: 'grid', gap: { xs: 1.5, md: 2.5 }, gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' } }}>
              {items.map((item, i) => <PdfTile key={`${value}-${item.id}-${i}`} item={item} i={i} />)}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default ResourceLayout;
