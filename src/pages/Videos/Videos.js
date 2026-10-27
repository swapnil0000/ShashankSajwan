import React, { useMemo, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useContent } from '../../context/ContentContext';
import PageHero from '../../components/ui/PageHero';
import LiteYouTube from '../../components/ui/LiteYouTube';
import { SegmentTabs } from '../../components/ui/ResourceLayout';
import { stagger, staggerItem } from '../../components/ui/Motion';


const Videos = () => {
  const { items: videos, categories = [] } = useContent('videos');
  const cats = ['All', ...categories];
  const [tab, setTab] = useState(0);
  const list = useMemo(() => (tab === 0 ? videos : videos.filter((v) => v.cat === cats[tab])), [tab, videos]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box sx={{ pb: 4 }}>
      <PageHero title="Video" accent="Lectures" eyebrow="Videos" subtitle="Hand-picked strategy, concept and motivation videos. Videos load only when you tap — easy on mobile data." />
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box sx={{ mb: 2.5 }}><SegmentTabs tabs={cats} value={tab} onChange={setTab} layoutId="video-pill" /></Box>
        <motion.div key={tab} variants={stagger} initial="hidden" animate="show">
          <Box sx={{ display: 'grid', gap: { xs: 2.5, md: 3 }, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' } }}>
            {list.map((v) => (
              <motion.div key={v.id} variants={staggerItem}>
                <LiteYouTube id={v.id} title={v.title} />
                <Typography sx={{ mt: 1.2, fontWeight: 700 }}>{v.title}</Typography>
                <Typography variant="body2" color="text.secondary">{v.cat}</Typography>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Videos;
