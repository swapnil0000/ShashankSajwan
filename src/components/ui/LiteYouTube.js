import React, { useState } from 'react';
import { Box, ButtonBase } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

// Shows a thumbnail and only loads the YouTube iframe on tap — much lighter on mobile data.
const LiteYouTube = ({ id, title }) => {
  const [play, setPlay] = useState(false);
  return (
    <Box sx={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: 4, overflow: 'hidden', bgcolor: '#000' }}>
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        />
      ) : (
        <ButtonBase onClick={() => setPlay(true)} aria-label={`Play ${title}`} sx={{ position: 'absolute', inset: 0 }}>
          <Box component="img" loading="lazy" src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,.6))' }} />
          <Box className="pulse" sx={{ position: 'absolute', width: 64, height: 64, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'var(--grad)', color: '#fff' }}>
            <PlayArrowRoundedIcon sx={{ fontSize: 38 }} />
          </Box>
        </ButtonBase>
      )}
    </Box>
  );
};

export default LiteYouTube;
