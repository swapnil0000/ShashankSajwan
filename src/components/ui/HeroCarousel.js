import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, ButtonBase, Container, IconButton } from '@mui/material';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useContent } from '../../context/ContentContext';

// A slide is live when enabled and today falls inside its optional start/end window.
export const isScheduledNow = (item, now = new Date()) => {
  if (item.enabled === false) return false;
  if (item.start && new Date(item.start) > now) return false;
  if (item.end && new Date(item.end) < now) return false;
  return true;
};

const SlideLink = ({ link, children }) => {
  const sx = { display: 'block', width: '100%', height: '100%' };
  if (!link) return <Box sx={sx}>{children}</Box>;
  if (/^https?:\/\//.test(link)) return <Box component="a" href={link} target="_blank" rel="noopener" sx={sx}>{children}</Box>;
  return <Box component={Link} to={link} sx={sx}>{children}</Box>;
};

// Full-width slider at the top of Home; slides come from Admin → Carousel.
const HeroCarousel = () => {
  const { slides = [], interval = 5 } = useContent('carousel');
  const live = useMemo(() => slides.filter((s) => s.img && isScheduledNow(s)), [slides]);
  const [[index, dir], setState] = useState([0, 1]);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const count = live.length;
  const current = count ? ((index % count) + count) % count : 0;

  const go = useCallback((step) => setState(([i]) => [i + step, step]), []);

  useEffect(() => {
    if (count < 2 || paused) return undefined;
    const id = setInterval(() => go(1), Math.max(2, Number(interval) || 5) * 1000);
    return () => clearInterval(id);
  }, [count, paused, interval, go]);

  if (!count) return null;
  const slide = live[current];

  return (
    <Box component="section" sx={{ position: 'relative', zIndex: 1, pt: { xs: '72px', md: '88px' } }}>
      <Container maxWidth={false} sx={{ maxWidth: 1440, px: { xs: 1.5, sm: 3, lg: 4 } }}>
        <Box
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          sx={{
            position: 'relative', overflow: 'hidden', borderRadius: { xs: '18px', md: '24px' }, bgcolor: 'action.hover',
            aspectRatio: { xs: slide.imgMobile ? '1 / 1' : '3 / 1', md: '3 / 1' },
            boxShadow: '0 30px 60px -36px rgba(11,22,64,.55)',
          }}
        >
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              initial={reduce ? { opacity: 0 } : { x: `${dir * 100}%` }}
              animate={{ x: 0, opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { x: `${-dir * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              drag={count > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x < -60 || velocity.x < -400) go(1);
                else if (offset.x > 60 || velocity.x > 400) go(-1);
              }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <SlideLink link={slide.link}>
                <picture style={{ display: 'block', width: '100%', height: '100%' }}>
                  {slide.imgMobile && <source media="(max-width: 899px)" srcSet={slide.imgMobile} />}
                  <Box component="img" src={slide.img} alt={slide.alt || ''} draggable={false} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', userSelect: 'none' }} />
                </picture>
              </SlideLink>
            </motion.div>
          </AnimatePresence>

          {count > 1 && (
            <>
              <IconButton onClick={() => go(-1)} aria-label="Previous slide" sx={{ display: { xs: 'none', md: 'flex' }, position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,.85)', color: '#0B1640', '&:hover': { bgcolor: '#fff' } }}>
                <ChevronLeftRoundedIcon />
              </IconButton>
              <IconButton onClick={() => go(1)} aria-label="Next slide" sx={{ display: { xs: 'none', md: 'flex' }, position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,.85)', color: '#0B1640', '&:hover': { bgcolor: '#fff' } }}>
                <ChevronRightRoundedIcon />
              </IconButton>
              <Box sx={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 0.8 }}>
                {live.map((s, i) => (
                  <ButtonBase
                    key={`${s.img}-${i}`}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setState([i, i > current ? 1 : -1])}
                    sx={{ height: 8, width: i === current ? 24 : 8, borderRadius: 9, bgcolor: i === current ? '#fff' : 'rgba(255,255,255,.55)', transition: 'width .3s', boxShadow: '0 1px 4px rgba(0,0,0,.3)' }}
                  />
                ))}
              </Box>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default HeroCarousel;
