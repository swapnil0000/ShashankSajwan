import React, { useMemo, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PageHero from '../../components/ui/PageHero';
import LiteYouTube from '../../components/ui/LiteYouTube';
import { SegmentTabs } from '../../components/ui/ResourceLayout';
import { stagger, staggerItem } from '../../components/ui/Motion';

const videos = [
  { id: 'LKDJZ4kgxbA', title: 'NCERTs for IAS exam', cat: 'Strategy' },
  { id: 'RD5uvkib1EY', title: 'How to start IAS preparation?', cat: 'Beginners' },
  { id: 'MS_vuWUDRj0', title: 'My UPSC CSE journey mistakes', cat: 'Motivation' },
  { id: 'mX4nHl2LDmk', title: 'All about CSAT', cat: 'Strategy' },
  { id: '81Af345gor0', title: 'IAS exam pattern', cat: 'Beginners' },
  { id: '590IoW54OXU', title: 'Prelims syllabus analysis', cat: 'Strategy' },
  { id: '4LwUI3_kBtU', title: 'How to read newspaper?', cat: 'Strategy' },
  { id: 'l3J50LCh31k', title: 'English improvement tips', cat: 'Skills' },
  { id: 'c1Kj0nvG6n8', title: 'Time management for aspirants', cat: 'Skills' },
  { id: 'tQMQmtcb1G4', title: 'For school students', cat: 'Beginners' },
  { id: 'RwkX6ThaM_8', title: 'Optional selection strategy', cat: 'Strategy' },
  { id: 'zigTkDzCdvo', title: 'How to read NCERTs?', cat: 'Strategy' },
  { id: 'tI7qhKQGcnE', title: 'Biggest mistake during preparation', cat: 'Motivation' },
  { id: '_IkGnczXwck', title: 'Important UPSC CSE subjects', cat: 'Beginners' },
  { id: '0BQPGWAKfNU', title: 'Answer writing tips', cat: 'Skills' },
  { id: 'HbcHQBsQTAI', title: 'Game changer for UPSC CSE aspirants', cat: 'Motivation' },
  { id: 'd4aegXqxE-U', title: 'Mistakes during preparation', cat: 'Motivation' },
  { id: 'vGRYeiFf2YU', title: 'Social media addiction', cat: 'Motivation' },
];
const cats = ['All', 'Beginners', 'Strategy', 'Skills', 'Motivation'];

const Videos = () => {
  const [tab, setTab] = useState(0);
  const list = useMemo(() => (tab === 0 ? videos : videos.filter((v) => v.cat === cats[tab])), [tab]);

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
