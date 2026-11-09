import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { animate, motion, useInView, useScroll, useTransform } from 'framer-motion';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useApp } from '../context/AppContext';
import { tr, useContent } from '../context/ContentContext';
import Section from '../components/ui/Section';
import StudyCard from '../components/ui/StudyCard';
import Countdown from '../components/ui/Countdown';
import LiteYouTube from '../components/ui/LiteYouTube';
import { Reveal, stagger, staggerItem } from '../components/ui/Motion';
import { SearchField } from './StudyHub/StudyHub';
import { useBatchCta } from './Batch/Batch';
import { HOME_SECTIONS } from '../data/content';
import HeroCarousel from '../components/ui/HeroCarousel';
import SlideRow from '../components/ui/SlideRow';
import { FeedItem, useFeed } from '../components/ui/DailyFeed';
import { useLatestAcrossFeeds } from './Resources/Resources';
import IconTile from '../components/ui/IconTile';

const statIcons = {
  youtube: <YouTubeIcon sx={{ color: '#FF0000' }} />,
  instagram: <InstagramIcon sx={{ color: '#DD2A7B' }} />,
  telegram: <TelegramIcon sx={{ color: '#0088cc' }} />,
  books: <span>📚</span>,
  star: <span>⭐</span>,
};


const CountUp = ({ to, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    const c = animate(0, Number(to) || 0, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
};

const Rail = ({ children }) => (
  <Stack direction="row" gap={2} className="no-scrollbar snap-x" sx={{ overflowX: 'auto', mx: { xs: -2, sm: 0 }, px: { xs: 2, sm: 0 }, pb: 1 }}>
    {children}
  </Stack>
);

// Small tappable "admissions open" pill at the top of the hero.
const HeroBatchPill = () => {
  const { t } = useApp();
  const b = useContent('batch');
  if (b.enabled === false) return null;
  return (
    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ marginBottom: 12 }}>
      <Box component={Link} to="/courses" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, pl: 0.6, pr: 1.5, py: 0.6, minWidth: 0, borderRadius: '999px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', color: 'text.primary', boxShadow: '0 8px 24px -14px rgba(11,22,64,.5)', maxWidth: '100%', '&:hover': { borderColor: 'primary.main' } }}>
        <Box sx={{ px: 1, py: 0.3, borderRadius: '999px', background: 'var(--grad)', color: '#fff', fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{t('heroPillNew')}</Box>
        <Typography noWrap sx={{ fontSize: 13, fontWeight: 700 }}>{b.status !== 'live' ? `${t('heroPillSoon')}: ` : b.badge ? `${b.badge}: ` : ''}{b.title} {b.accent}</Typography>
        <ArrowForwardRoundedIcon sx={{ fontSize: 16, color: 'primary.main', flexShrink: 0 }} />
      </Box>
    </motion.div>
  );
};

// Right side of the hero: Prelims countdown plus one-tap tiles for the daily sections.
const GlancePanel = () => {
  const { t } = useApp();
  const b = useContent('batch');
  const news = useFeed('feed_newspaper');
  const comingSoon = b.status !== 'live';
  const tiles = [
    { to: '/newspaper', icon: '📰', label: t('tileNews'), sub: news.items[0] ? t('tileNewsToday') : t('tileNewsSub') },
    { to: '/resources/current-affairs', icon: '🌏', label: t('tileCA'), sub: t('tileCASub') },
    { to: '/resources/ncert-mcqs', icon: '✅', label: t('tileMcq'), sub: t('tileMcqSub') },
    b.enabled === false
      ? { to: '/books', icon: '📚', label: 'Our Books', sub: 'NCERT-mapped' }
      : { to: '/courses', icon: '🎓', label: b.navLabel || 'Batch', sub: comingSoon ? t('tileBatchSoon') : (b.badge || 'Join now'), hot: true },
  ];
  return (
    <Stack gap={1.5}>
      <Countdown />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 1.5 }}>
        {tiles.map((tile) => (
          <Box
            key={tile.to}
            component={Link}
            to={tile.to}
            sx={{
              display: 'flex', alignItems: 'center', gap: 1.2, p: 1.5, borderRadius: '18px', color: 'text.primary', bgcolor: 'background.paper', border: 1,
              borderColor: tile.hot ? 'primary.main' : 'divider', boxShadow: '0 10px 30px -22px rgba(11,22,64,.5)', transition: 'transform .2s, border-color .2s',
              '&:hover': { transform: 'translateY(-2px)', borderColor: 'primary.main' },
            }}
          >
            <IconTile icon={tile.icon} size={40} radius={12} solid={tile.hot} />
            <Box sx={{ minWidth: 0 }}>
              <Typography noWrap sx={{ fontWeight: 800, fontSize: 14 }}>{tile.label}</Typography>
              <Typography noWrap variant="caption" sx={{ color: tile.hot ? 'primary.main' : 'text.secondary', fontWeight: tile.hot ? 700 : 400 }}>{tile.sub}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

const Hero = ({ c, first, bare }) => {
  const { t, lang } = useApp();
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <Box component="section" className={bare ? undefined : 'grid-bg'} sx={{ position: 'relative', overflow: bare ? 'visible' : 'hidden', pt: first ? { xs: 11, md: 16 } : { xs: 4, md: 6 }, pb: { xs: 4, md: 8 } }}>
      {!bare && <motion.div className="orb orb-a" style={{ y: orbY }} />}
      {!bare && <motion.div className="orb orb-b" style={{ y: orbY }} />}
      <Container maxWidth="lg" sx={{ position: 'relative', px: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: 'grid', gap: { xs: 4, md: 6 }, gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 1.1fr) minmax(0, 0.9fr)' }, alignItems: 'center' }}>
          <Box sx={{ minWidth: 0 }}>
            <Reveal>
              <HeroBatchPill />
              <Chip label={`🇮🇳 ${tr(c.heroBadge, lang)}`} sx={{ bgcolor: 'rgba(255,138,31,.14)', color: 'secondary.dark', fontWeight: 700, mb: 2 }} />
            </Reveal>
            <Reveal delay={0.05}>
              <Typography variant="h1">
                {tr(c.heroTitleA, lang)}<br />
                <Box component="span" className="text-gradient">{tr(c.heroTitleB, lang)}</Box>
              </Typography>
            </Reveal>
            <Reveal delay={0.1}>
              <Typography color="text.secondary" sx={{ mt: 2, mb: 3, fontSize: { xs: 15, md: 18 }, maxWidth: 560 }}>{tr(c.heroSub, lang)}</Typography>
            </Reveal>
            <Reveal delay={0.15}>
              <SearchField value={q} onChange={setQ} onSubmit={() => navigate(`/study?q=${encodeURIComponent(q)}`)} />
              <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mt: 1.5 }}>
                {(c.heroChips || []).map((s) => (
                  <Chip key={s} label={s} variant="outlined" size="small" onClick={() => navigate(`/ncert?subject=${encodeURIComponent(s)}`)} sx={{ height: 32 }} />
                ))}
              </Stack>
            </Reveal>
            <Reveal delay={0.2}>
              <Stack direction={{ xs: 'column', sm: 'row' }} gap={1.5} sx={{ mt: 3 }}>
                <Button component={Link} to="/study" variant="contained" size="large" endIcon={<ArrowForwardRoundedIcon />}>{t('startStudying')}</Button>
                <Button component={Link} to="/books" variant="outlined" size="large" color="inherit" sx={{ borderColor: 'divider' }}>{t('exploreBooks')}</Button>
              </Stack>
            </Reveal>
          </Box>

          <Reveal delay={0.15}>
            <GlancePanel />
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
};

const Stats = ({ c }) => (
  <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, mt: { xs: 2, md: 6 } }}>
    <Reveal>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: `repeat(${Math.min(c.stats.length, 4) || 1}, 1fr)` }, gap: 1, p: { xs: 1.5, md: 3 }, borderRadius: '24px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', boxShadow: '0 20px 50px -30px rgba(11,22,64,.35)' }}>
        {c.stats.map((it, i) => (
          <Stack key={`${it.label}-${i}`} direction="row" alignItems="center" gap={1.5} sx={{ p: 1.5 }}>
            <Box sx={{ fontSize: 28, display: 'flex' }}>{statIcons[it.icon] || statIcons.star}</Box>
            <Box>
              <Typography className="text-gradient" sx={{ fontSize: { xs: 22, md: 30 }, fontWeight: 800, lineHeight: 1.1 }}><CountUp to={it.value} suffix={it.suffix} /></Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: 12, md: 14 } }}>{it.label}</Typography>
            </Box>
          </Stack>
        ))}
      </Box>
    </Reveal>
  </Container>
);

const StudyGrid = () => {
  const { t } = useApp();
  const { items } = useContent('studySections');
  return (
    <Section title={t('whatStudy')} action={<Button component={Link} to="/study" endIcon={<ArrowForwardRoundedIcon />} sx={{ display: { xs: 'none', sm: 'inline-flex' }, flexShrink: 0 }}>{t('viewAll')}</Button>}>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <Box sx={{ display: 'grid', gap: { xs: 1.5, md: 2.5 }, gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' } }}>
          {items.map((s) => <StudyCard key={s.id} section={s} />)}
        </Box>
      </motion.div>
    </Section>
  );
};

const Books = () => {
  const { t } = useApp();
  const { items } = useContent('books');
  return (
    <Section title={t('ourBooks').split(' ')[0]} accent={t('ourBooks').split(' ').slice(1).join(' ')} subtitle={t('booksSub')} action={<Button component={Link} to="/books" endIcon={<ArrowForwardRoundedIcon />} sx={{ flexShrink: 0 }}>{t('viewAll')}</Button>}>
      <Rail>
        {items.map((b, i) => (
          <motion.div key={b.id || i} className="snap-start" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -10, rotate: -1.5 }} whileTap={{ scale: 0.96 }} style={{ flexShrink: 0 }}>
            <Box component={Link} to="/books" sx={{ display: 'block', width: { xs: 150, md: 200 }, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 24px 40px -24px rgba(11,22,64,.6)' }}>
              <Box component="img" loading="lazy" src={b.img} alt={b.title} sx={{ width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', display: 'block' }} />
            </Box>
            <Typography sx={{ mt: 1, fontWeight: 700, fontSize: 13, width: { xs: 150, md: 200 } }}>{b.title}</Typography>
          </motion.div>
        ))}
      </Rail>
    </Section>
  );
};

const BatchTeaser = () => {
  const { t } = useApp();
  const b = useContent('batch');
  const cta = useBatchCta();
  if (b.enabled === false) return null;
  return (
    <Section>
      <Reveal>
        <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '28px', border: 1, borderColor: 'divider', bgcolor: 'background.paper', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.15fr' }, alignItems: 'center' }}>
          {b.image && (
            <Box sx={{ p: { xs: 0, md: 2.5 } }}>
              <Box component="img" loading="lazy" src={b.image} alt="" sx={{ width: '100%', height: 'auto', display: 'block', borderRadius: { xs: 0, md: '20px' } }} />
            </Box>
          )}
          <Box sx={{ p: { xs: 2.5, md: 4 } }}>
            {(b.status !== 'live' || b.badge) && <Chip size="small" label={b.status !== 'live' ? 'Coming soon' : b.badge} sx={{ bgcolor: 'rgba(255,138,31,.14)', color: 'secondary.dark', fontWeight: 700, mb: 1.5 }} />}
            <Typography variant="h2">{b.title} <Box component="span" className="text-gradient">{b.accent}</Box></Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>{b.subtitle}</Typography>
            <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: '1fr 1fr', mt: 2 }}>
              {(b.highlights || []).slice(0, 6).map((h, i) => (
                <Stack key={`${h.text}-${i}`} direction="row" gap={1} alignItems="flex-start">
                  <CheckCircleRoundedIcon sx={{ fontSize: 18, color: 'secondary.main', mt: '1px' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.3 }}>{h.text}</Typography>
                </Stack>
              ))}
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={1.2} sx={{ mt: 3 }}>
              <Button component={Link} to="/courses" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>{b.status !== 'live' ? t('batchSoonButton') : t('batchLiveButton')}</Button>
              {b.status === 'live' && <Button href={cta.href} target={cta.external ? '_blank' : undefined} rel="noopener" variant="outlined" color="inherit" sx={{ borderColor: 'divider' }}>{cta.label}</Button>}
            </Stack>
          </Box>
        </Box>
      </Reveal>
    </Section>
  );
};

const Features = ({ c }) => {
  const { lang } = useApp();
  return (
    <Section title={tr(c.featuresTitle, lang)} sx={{ bgcolor: 'action.hover' }}>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' } }}>
          {c.features.map((f, i) => (
            <motion.div key={`${f.title}-${i}`} variants={staggerItem}>
              <Box sx={{ height: '100%', p: 2.5, borderRadius: '20px', bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
                <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 1.5 }}>
                  {f.img && <Box component="img" loading="lazy" src={f.img} alt="" sx={{ width: 52, height: 52, objectFit: 'contain' }} />}
                  <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>{(f.title || '').toLowerCase()}</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">{f.text}</Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Section>
  );
};

const Director = ({ c }) => {
  const { t } = useApp();
  return (
    <Section>
      <Reveal>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '360px 1fr' }, gap: { xs: 2.5, md: 5 }, alignItems: 'center', p: { xs: 2, md: 4 }, borderRadius: '28px', background: 'var(--grad-navy)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <Box component="img" loading="lazy" src={c.directorImg} alt="Shashank Sajwan" sx={{ width: '100%', borderRadius: '20px', aspectRatio: '16 / 10', objectFit: 'cover' }} />
          <Box>
            <Typography sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: '.1em', fontSize: 13, textTransform: 'uppercase' }}>{t('directorPen')}</Typography>
            <Typography sx={{ fontSize: { xs: 16, md: 20 }, lineHeight: 1.65, mt: 1.5, opacity: 0.92 }}>“{c.directorQuote}”</Typography>
            <Typography sx={{ mt: 2, fontWeight: 800 }}>— Shashank Sajwan</Typography>
          </Box>
        </Box>
      </Reveal>
    </Section>
  );
};

const JoshTalk = ({ c }) => {
  const { t } = useApp();
  return (
  <Section>
    <Reveal>
      <Box
        sx={{
          position: 'relative', overflow: 'hidden', borderRadius: '28px', p: { xs: 1.5, md: 2.5 }, bgcolor: 'background.paper', border: 1, borderColor: 'divider',
          boxShadow: '0 30px 60px -40px rgba(11,22,64,.45)', display: 'grid', gap: { xs: 2.5, md: 4 }, gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, alignItems: 'center',
        }}
      >
        <Box sx={{ position: 'absolute', width: 360, height: 360, right: -120, top: -160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,138,31,.18), transparent 65%)', pointerEvents: 'none' }} />
        <LiteYouTube id={c.joshVideoId} title="Josh Talks — Shashank Sajwan" />
        <Box sx={{ position: 'relative', px: { xs: 1, md: 0 }, pb: { xs: 1, md: 0 }, pr: { md: 2 } }}>
          <Stack direction="row" alignItems="center" gap={1}>
            <Box sx={{ px: 1.2, py: 0.4, borderRadius: '999px', background: 'var(--grad)', color: '#fff', fontSize: 11.5, fontWeight: 800, letterSpacing: '.06em' }}>{t('joshBadge')}</Box>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>{t('joshFeatured')}</Typography>
          </Stack>
          <Typography variant="h2" sx={{ mt: 1.5, fontSize: { xs: 26, md: 34 } }}>
            {t('joshTitle')} <Box component="span" className="text-gradient">{t('joshAccent')}</Box>
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>{t('joshSub')}</Typography>
          <Box sx={{ display: 'grid', gap: 1.2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, mt: 2.5 }}>
            {c.joshPoints.map((p, i) => (
              <Stack key={`${p}-${i}`} direction="row" gap={1.2} alignItems="flex-start" sx={{ p: 1.5, borderRadius: '16px', bgcolor: 'action.hover' }}>
                <CheckCircleRoundedIcon sx={{ color: 'secondary.main', fontSize: 20, mt: '1px' }} />
                <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.4 }}>{p}</Typography>
              </Stack>
            ))}
          </Box>
          <Button href={`https://www.youtube.com/watch?v=${c.joshVideoId}`} target="_blank" rel="noopener" variant="contained" startIcon={<YouTubeIcon />} sx={{ mt: 3 }}>
            {t('watchOnYoutube')}
          </Button>
        </Box>
      </Box>
    </Reveal>
  </Section>
  );
};

const Videos = () => {
  const { t } = useApp();
  const { items } = useContent('videos');
  const featured = items.filter((v) => v.featured);
  if (!featured.length) return null;
  return (
    <Section title={t('mostViewed')} subtitle={t('videosSub')} action={<Button component={Link} to="/videos" endIcon={<ArrowForwardRoundedIcon />} sx={{ flexShrink: 0 }}>{t('viewAll')}</Button>}>
      <SlideRow>
        {featured.map((v) => (
          <Box
            key={v.id}
            className="snap-start"
            sx={{
              flexShrink: 0, width: { xs: '82%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 11px)' }, p: 1.2, borderRadius: '22px',
              bgcolor: 'background.paper', border: 1, borderColor: 'divider', transition: 'transform .25s, box-shadow .25s',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 40px -24px rgba(11,22,64,.45)' },
            }}
          >
            <LiteYouTube id={v.id} title={v.title} />
            <Stack direction="row" gap={1.2} alignItems="flex-start" sx={{ px: 0.8, pt: 1.5, pb: 0.8 }}>
              <Box component="img" src="/assets/shashank.webp" alt="" sx={{ width: 34, height: 34, borderRadius: '50%', flexShrink: 0, border: 1, borderColor: 'divider' }} />
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 15.5, lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{v.title}</Typography>
                <Stack direction="row" alignItems="center" gap={0.5} sx={{ mt: 0.3 }}>
                  <YouTubeIcon sx={{ fontSize: 16, color: '#FF0000' }} />
                  <Typography variant="caption" color="text.secondary">Shashank Sajwan · YouTube</Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
        ))}
      </SlideRow>
    </Section>
  );
};

// Latest daily posts across Newspaper Notes / Current Affairs / MCQs / PYQs.
const Updates = () => {
  const { t } = useApp();
  const latest = useLatestAcrossFeeds(4);
  if (!latest.length) return null;
  return (
    <Section title={t('updatesTitle')} accent={t('updatesAccent')} action={<Button component={Link} to="/resources" endIcon={<ArrowForwardRoundedIcon />} sx={{ flexShrink: 0 }}>{t('allResources')}</Button>}>
      <Box sx={{ display: 'grid', gap: 1.2, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
        {latest.map((item, i) => <FeedItem key={`${item.date}-${i}`} item={item} i={i} compact />)}
      </Box>
    </Section>
  );
};

const blocks = { carousel: HeroCarousel, hero: Hero, updates: Updates, stats: Stats, batch: BatchTeaser, study: StudyGrid, books: Books, features: Features, director: Director, josh: JoshTalk, videos: Videos };

const Home = () => {
  const c = useContent('home');
  useEffect(() => { window.scrollTo(0, 0); }, []);
  // Order and visibility of every block come from Admin → Home page → Sections.
  // Blocks added after an admin saved their order are slotted in at their default position.
  const known = new Set(c.sections.map((s) => s.id));
  const sections = HOME_SECTIONS.reduce((list, h, i) => (known.has(h.id) ? list : [...list.slice(0, i), { id: h.id, visible: true }, ...list.slice(i)]), c.sections);
  const shown = sections.filter((s) => s.visible !== false && blocks[s.id]);
  return (
    <Box sx={{ pt: ['hero', 'carousel'].includes(shown[0]?.id) ? 0 : { xs: 8, md: 10 } }}>
      {shown.map((s, i) => {
        // Carousel directly above the hero: both share one continuous background.
        if (s.id === 'hero' && shown[i - 1]?.id === 'carousel') return null;
        if (s.id === 'carousel' && shown[i + 1]?.id === 'hero') {
          return (
            <Box key="top" className="grid-bg" sx={{ position: 'relative', overflow: 'hidden' }}>
              <div className="orb orb-a" style={{ top: 120 }} />
              <div className="orb orb-b" />
              <HeroCarousel />
              <Hero c={c} bare />
            </Box>
          );
        }
        const Block = blocks[s.id];
        return <Block key={s.id} c={c} first={i === 0} />;
      })}
    </Box>
  );
};

export default Home;
