import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Chip, Container, InputBase, Stack, Typography } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useApp } from '../../context/AppContext';
import { subjects } from '../../data/studyHub';
import { tr, useContent } from '../../context/ContentContext';
import StudyCard from '../../components/ui/StudyCard';
import { stagger } from '../../components/ui/Motion';

export const SearchField = ({ value, onChange, inputRef, onSubmit }) => {
  const { t } = useApp();
  return (
    <Stack
      component="form"
      onSubmit={(e) => { e.preventDefault(); onSubmit?.(); }}
      direction="row"
      alignItems="center"
      gap={1}
      sx={{
        px: 2, height: 54, borderRadius: 999, bgcolor: 'background.paper', border: 1, borderColor: 'divider',
        boxShadow: '0 10px 30px -18px rgba(11,22,64,.4)',
        '&:focus-within': { borderColor: 'primary.main', boxShadow: '0 0 0 4px rgba(224,41,74,.12)' },
      }}
    >
      <SearchRoundedIcon sx={{ color: 'text.secondary' }} />
      <InputBase inputRef={inputRef} value={value} onChange={(e) => onChange(e.target.value)} placeholder={t('searchPlaceholder')} fullWidth inputProps={{ 'aria-label': t('searchPlaceholder'), enterKeyHint: 'search' }} />
    </Stack>
  );
};

const StudyHub = () => {
  const { t, lang, bookmarks, recent } = useApp();
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get('q') || '');
  const [filter, setFilter] = useState('all');
  const inputRef = useRef(null);
  const { items: studySections } = useContent('studySections');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (params.get('focus')) inputRef.current?.focus();
  }, [params]);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return studySections.filter((s) => {
      if (filter === 'saved' && !bookmarks.includes(s.id)) return false;
      if (filter !== 'all' && filter !== 'saved' && !(s.tags || []).includes(filter)) return false;
      if (!q) return true;
      return [tr(s.title, 'en'), tr(s.title, 'hi'), tr(s.desc, 'en'), tr(s.desc, 'hi'), ...(s.tags || [])].join(' ').toLowerCase().includes(q);
    });
  }, [query, filter, bookmarks, studySections]);

  const recentSections = recent.map((id) => studySections.find((s) => s.id === id)).filter(Boolean);
  const chips = [['all', t('all')], ['saved', `★ ${t('saved')}`], ...subjects.map((s) => [s, s])];

  return (
    <Box sx={{ pt: { xs: 10, md: 13 }, pb: 4 }} className="grid-bg">
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography variant="h1">{t('studyHub').split(' ')[0]} <Box component="span" className="text-gradient">{t('studyHub').split(' ').slice(1).join(' ')}</Box></Typography>
        <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>{t('studyHubSub')}</Typography>

        <SearchField value={query} onChange={setQuery} inputRef={inputRef} />

        <Stack direction="row" gap={1} className="no-scrollbar" sx={{ overflowX: 'auto', mx: { xs: -2, sm: 0 }, px: { xs: 2, sm: 0 }, py: 2 }}>
          {chips.map(([key, label]) => (
            <Chip
              key={key}
              label={label}
              onClick={() => setFilter(key)}
              color={filter === key ? 'primary' : 'default'}
              variant={filter === key ? 'filled' : 'outlined'}
              sx={{ flexShrink: 0, height: 38, px: 0.5, ...(filter === key && { background: 'var(--grad)' }) }}
            />
          ))}
        </Stack>

        {recentSections.length > 0 && !query && filter === 'all' && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1.5 }}>{t('continueReading')}</Typography>
            <Stack direction="row" gap={1} className="no-scrollbar" sx={{ overflowX: 'auto' }}>
              {recentSections.map((s) => (
                <Chip key={s.id} component={Link} to={s.path} clickable label={`${s.icon} ${tr(s.title, lang)}`} sx={{ height: 40, flexShrink: 0, bgcolor: 'background.paper', border: 1, borderColor: 'divider' }} />
              ))}
            </Stack>
          </Box>
        )}

        <motion.div variants={stagger} initial="hidden" animate="show" key={filter}>
          <Box sx={{ display: 'grid', gap: { xs: 1.5, md: 2.5 }, gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' } }}>
            <AnimatePresence>
              {list.map((s) => <StudyCard key={s.id} section={s} />)}
            </AnimatePresence>
          </Box>
        </motion.div>
        {list.length === 0 && <Typography color="text.secondary" sx={{ py: 6, textAlign: 'center' }}>{t('noResults')}</Typography>}
      </Container>
    </Box>
  );
};

export default StudyHub;
