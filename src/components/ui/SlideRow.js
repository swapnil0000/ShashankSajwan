import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, ButtonBase, IconButton, Stack } from '@mui/material';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

// Horizontal snap-scrolling row that auto-advances, with arrows (desktop) and dots.
// Auto-advance pauses while the user is touching or hovering it.
const SlideRow = ({ children, autoplay = 4500 }) => {
  const ref = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const hold = useRef(false);
  const items = React.Children.toArray(children);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const first = el.firstElementChild;
    const step = first ? first.getBoundingClientRect().width + 16 : el.clientWidth;
    const perView = Math.max(1, Math.round(el.clientWidth / step));
    setPages(Math.max(1, items.length - perView + 1));
    setPage(Math.min(Math.round(el.scrollLeft / step), items.length - 1));
  }, [items.length]);

  const scrollTo = useCallback((i) => {
    const el = ref.current;
    if (!el?.children[i]) return;
    el.scrollTo({ left: el.children[i].offsetLeft - el.firstElementChild.offsetLeft, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  useEffect(() => {
    if (!autoplay || pages < 2) return undefined;
    const id = setInterval(() => {
      if (!hold.current) scrollTo(page + 1 >= pages ? 0 : page + 1);
    }, autoplay);
    return () => clearInterval(id);
  }, [autoplay, page, pages, scrollTo]);

  const pause = { onMouseEnter: () => { hold.current = true; }, onMouseLeave: () => { hold.current = false; }, onTouchStart: () => { hold.current = true; }, onTouchEnd: () => { setTimeout(() => { hold.current = false; }, 3000); } };

  return (
    <Box sx={{ position: 'relative' }} {...pause}>
      <Stack ref={ref} onScroll={measure} direction="row" gap={2} className="no-scrollbar snap-x" sx={{ overflowX: 'auto', mx: { xs: -2, sm: 0 }, px: { xs: 2, sm: 0 }, pb: 1 }}>
        {items}
      </Stack>
      {pages > 1 && (
        <>
          <IconButton aria-label="Previous" disabled={page === 0} onClick={() => scrollTo(page - 1)} sx={{ display: { xs: 'none', md: 'flex' }, position: 'absolute', left: -20, top: '38%', bgcolor: 'background.paper', border: 1, borderColor: 'divider', boxShadow: 2, '&:hover': { bgcolor: 'background.paper' } }}>
            <ChevronLeftRoundedIcon />
          </IconButton>
          <IconButton aria-label="Next" disabled={page >= pages - 1} onClick={() => scrollTo(page + 1)} sx={{ display: { xs: 'none', md: 'flex' }, position: 'absolute', right: -20, top: '38%', bgcolor: 'background.paper', border: 1, borderColor: 'divider', boxShadow: 2, '&:hover': { bgcolor: 'background.paper' } }}>
            <ChevronRightRoundedIcon />
          </IconButton>
          <Stack direction="row" justifyContent="center" gap={0.8} sx={{ mt: 1.5 }}>
            {Array.from({ length: pages }).map((_, i) => (
              <ButtonBase key={i} aria-label={`Go to ${i + 1}`} onClick={() => scrollTo(i)} sx={{ height: 8, width: i === page ? 22 : 8, borderRadius: 9, bgcolor: i === page ? 'primary.main' : 'divider', transition: 'width .3s' }} />
            ))}
          </Stack>
        </>
      )}
    </Box>
  );
};

export default SlideRow;
