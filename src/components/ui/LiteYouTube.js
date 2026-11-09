import React, { useState } from 'react';
import { Box, ButtonBase } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

// Shows a thumbnail and only loads the YouTube iframe on tap — much lighter on mobile data.
const LiteYouTube = ({ id, title }) => {
  const [play, setPlay] = useState(false);
  return (
    <Box sx={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: '16px', overflow: 'hidden', bgcolor: '#000' }}>
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
          <Box sx={{ position: 'absolute', width: 54, height: 54, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'var(--grad)', color: '#fff', boxShadow: '0 0 0 8px rgba(255,255,255,.22), 0 10px 24px -8px rgba(0,0,0,.6)' }}>
            <PlayArrowRoundedIcon sx={{ fontSize: 32 }} />
          </Box>
        </ButtonBase>
      )}
    </Box>
  );
};

export default LiteYouTube;
