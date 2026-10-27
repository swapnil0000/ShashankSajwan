import React from 'react';
import { Box, ButtonBase, IconButton, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useApp } from '../../context/AppContext';
import { tr } from '../../context/ContentContext';
import { staggerItem } from './Motion';

const StudyCard = ({ section }) => {
  const { lang, isBookmarked, toggleBookmark, pushRecent, t } = useApp();
  const navigate = useNavigate();
  const saved = isBookmarked(section.id);

  const open = () => {
    pushRecent(section.id);
    if (/^https?:\/\//.test(section.path)) window.open(section.path, '_blank', 'noopener'); else navigate(section.path);
  };

  return (
    <motion.div variants={staggerItem} layout whileTap={{ scale: 0.97 }} style={{ height: '100%' }}>
      <Box
        sx={{
          position: 'relative', height: '100%', borderRadius: 5, bgcolor: 'background.paper',
          border: 1, borderColor: 'divider', overflow: 'hidden',
          transition: 'box-shadow .25s, transform .25s, border-color .25s',
          '&:hover': { boxShadow: '0 18px 40px -18px rgba(11,22,64,.35)', transform: 'translateY(-3px)', borderColor: section.accent },
          '&::before': { content: '""', position: 'absolute', inset: 0, background: `radial-gradient(120% 80% at 100% 0%, ${section.accent}1f, transparent 60%)`, pointerEvents: 'none' },
        }}
      >
        <ButtonBase onClick={open} sx={{ display: 'block', textAlign: 'left', width: '100%', height: '100%', p: { xs: 2, md: 2.5 } }}>
          <Box sx={{ width: 48, height: 48, borderRadius: '16px', display: 'grid', placeItems: 'center', fontSize: 24, bgcolor: `${section.accent}1a`, mb: 1.5 }}>
            {section.icon}
          </Box>
          <Typography variant="h6" sx={{ pr: 4 }}>{tr(section.title, lang)}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, minHeight: 40 }}>{tr(section.desc, lang)}</Typography>
          <Stack direction="row" alignItems="center" gap={0.5} sx={{ mt: 1.5, color: 'primary.main', fontWeight: 700, fontSize: 14 }}>
            {t('open')} <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
          </Stack>
        </ButtonBase>
        <IconButton
          onClick={() => toggleBookmark(section.id)}
          aria-label={saved ? 'Remove bookmark' : 'Bookmark'}
          sx={{ position: 'absolute', top: 10, right: 10, color: saved ? 'secondary.main' : 'text.secondary' }}
        >
          <motion.span key={String(saved)} initial={{ scale: 0.4 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 600, damping: 18 }} style={{ display: 'flex' }}>
            {saved ? <BookmarkRoundedIcon /> : <BookmarkBorderRoundedIcon />}
          </motion.span>
        </IconButton>
      </Box>
    </motion.div>
  );
};

export default StudyCard;
