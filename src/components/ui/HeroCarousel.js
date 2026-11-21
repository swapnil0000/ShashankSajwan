import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, ButtonBase, Container, IconButton } from '@mui/material';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useContent, useContentReady, useRawContent } from '../../context/ContentContext';

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

// Image that fades in once loaded, so a slide never paints half-drawn.
const FadeImg = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(false), [src]);
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      draggable={false}
      ref={(el) => { if (el?.complete && el.naturalWidth && !loaded) setLoaded(true); }}
      onLoad={() => setLoaded(true)}
      sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', userSelect: 'none', opacity: loaded ? 1 : 0, transition: 'opacity .35s ease' }}
    />
  );
};

const frameSx = (square) => ({
  position: 'relative', overflow: 'hidden', borderRadius: { xs: '18px', md: '24px' }, bgcolor: 'action.hover',
  aspectRatio: { xs: square ? '1 / 1' : '3 / 1', md: '3 / 1' },
  boxShadow: '0 30px 60px -36px rgba(11,22,64,.55)',
});

// `aside` (large screens only) sits to the right of the slider at the same height.
const Shell = ({ children, aside }) => (
  <Box component="section" sx={{ position: 'relative', zIndex: 1, pt: { xs: '72px', md: '88px' } }}>
    <Container maxWidth={false} sx={{ maxWidth: 1440, px: { xs: 1.5, sm: 3, lg: 4 } }}>
      {aside ? (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: 'minmax(0, 1fr) 320px', xl: 'minmax(0, 1fr) 360px' }, gap: 2, alignItems: 'stretch' }}>
          <Box sx={{ minWidth: 0 }}>{children}</Box>
          {aside}
        </Box>
      ) : children}
    </Container>
  </Box>
);

// Full-width slider at the top of Home; slides come from Admin → Carousel.
// Until the admin's slides are known it shows an empty frame of the same size, so the
// built-in default banners never flash first and the page below doesn't jump.
const HeroCarousel = ({ aside, fallback = null }) => {
  const ready = useContentReady();
  const { slides = [], interval = 5 } = useContent('carousel');
  const { slides: rawSlides = [] } = useRawContent('carousel');
  // Decide which slides are live from the stored data: an uploaded image is '' while it
  // loads, and dropping it then would make the slider change size and jump.
  const live = useMemo(
    () => rawSlides.map((raw, i) => ({ raw, slide: slides[i] || raw })).filter(({ raw }) => raw.img && isScheduledNow(raw)).map(({ slide }) => slide),
    [rawSlides, slides],
  );
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

  if (!ready) return <Shell aside={aside}><Box className="shimmer" sx={frameSx(true)} aria-hidden /></Shell>;
  if (!count) return fallback;
  const slide = live[current];

  return (
    <Shell aside={aside}>
        <Box
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={slide.img ? undefined : 'shimmer'}
          sx={frameSx(Boolean(slide.imgMobile || rawSlides.find((r) => r.img && isScheduledNow(r))?.imgMobile))}
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
                  {slide.img && <FadeImg src={slide.img} alt={slide.alt || ''} />}
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
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setState([i, i > current ? 1 : -1])}
                    sx={{ height: 8, width: i === current ? 24 : 8, borderRadius: 9, bgcolor: i === current ? '#fff' : 'rgba(255,255,255,.55)', transition: 'width .3s', boxShadow: '0 1px 4px rgba(0,0,0,.3)' }}
                  />
                ))}
              </Box>
            </>
          )}
        </Box>
    </Shell>
  );
};

export default HeroCarousel;
