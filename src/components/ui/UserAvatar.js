import React, { useState } from 'react';
import { Box } from '@mui/material';

// Profile photo with a letter fallback. Google photos (googleusercontent.com) refuse
// requests that carry a Referer header, so the image is loaded with no-referrer.
const UserAvatar = ({ user, size = 36 }) => {
  const [broken, setBroken] = useState(false);
  const letter = (user?.displayName || user?.email || '?').trim()[0].toUpperCase();

  if (user?.photoURL && !broken) {
    return (
      <Box
        component="img"
        src={user.photoURL}
        alt=""
        referrerPolicy="no-referrer"
        onError={() => setBroken(true)}
        sx={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', display: 'block', flexShrink: 0 }}
      />
    );
  }
  return (
    <Box sx={{ width: size, height: size, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'var(--grad)', color: '#fff', fontWeight: 800, fontSize: size * 0.42, flexShrink: 0 }}>
      {letter}
    </Box>
  );
};

export default UserAvatar;
