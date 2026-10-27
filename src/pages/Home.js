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

const statIcons = {
  youtube: <YouTubeIcon sx={{ color: '#FF0000' }} />,
  instagram: <InstagramIcon sx={{ color: '#DD2A7B' }} />,
  telegram: <TelegramIcon sx={{ color: '#0088cc' }} />,
  books: <span>📚</span>,
  star: <span>⭐</span>,
};

const isExternal = (href) => /^https?:\/\//.test(href || '');
const linkProps = (href) => (isExternal(href) ? { component: 'a', href, target: '_blank', rel: 'noopener' } : { component: Link, to: href || '/' });

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

const Hero = ({ c }) => {
  const { t, lang } = useApp();
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <Box component="section" className="grid-bg" sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 11, md: 16 }, pb: { xs: 4, md: 8 } }}>
      <motion.div className="orb orb-a" style={{ y: orbY }} />
      <motion.div className="orb orb-b" style={{ y: orbY }} />
      <Container maxWidth="lg" sx={{ position: 'relative', px: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: 'grid', gap: { xs: 4, md: 6 }, gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' }, alignItems: 'center' }}>
          <Box>
            <Reveal>
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
                  <Chip key={s} label={s} variant="outlined" size="small" onClick={() => navigate(`/study?q=${encodeURIComponent(s)}`)} sx={{ height: 32 }} />
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
            <Box sx={{ position: 'relative' }}>
              {c.banner?.img && (
                <motion.div whileHover={{ rotateX: 4, rotateY: -6 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} style={{ transformPerspective: 1000 }}>
                  <Box {...linkProps(c.banner.link)} sx={{ display: 'block', borderRadius: '24px', overflow: 'hidden', border: 1, borderColor: 'divider', boxShadow: '0 40px 80px -40px rgba(11,22,64,.55)', bgcolor: 'background.paper' }}>
                    <Box component="img" src={c.banner.img} alt="" sx={{ width: '100%', display: 'block', height: 'auto' }} />
                  </Box>
                </motion.div>
              )}
              <Box sx={{ mt: 2, maxWidth: { md: 340 } }}>
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                  <Countdown />
                </motion.div>
              </Box>
            </Box>
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
  const b = useContent('batch');
  const cta = useBatchCta();
  if (b.enabled === false) return null;
  return (
    <Section>
      <Reveal>
        <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '28px', border: 1, borderColor: 'divider', bgcolor: 'background.paper', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr' } }}>
          {b.image && <Box component="img" loading="lazy" src={b.image} alt="" sx={{ width: '100%', height: '100%', minHeight: { md: 320 }, objectFit: 'cover', display: 'block' }} />}
          <Box sx={{ p: { xs: 2.5, md: 4 } }}>
            {b.badge && <Chip size="small" label={`🎓 ${b.badge}`} sx={{ bgcolor: 'rgba(255,138,31,.14)', color: 'secondary.dark', fontWeight: 700, mb: 1.5 }} />}
            <Typography variant="h2">{b.title} <Box component="span" className="text-gradient">{b.accent}</Box></Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>{b.subtitle}</Typography>
            <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: '1fr 1fr', mt: 2 }}>
              {(b.highlights || []).slice(0, 6).map((h, i) => (
                <Stack key={`${h.text}-${i}`} direction="row" gap={1} alignItems="center">
                  <span>{h.icon}</span>
                  <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.3 }}>{h.text}</Typography>
                </Stack>
              ))}
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={1.2} sx={{ mt: 3 }}>
              <Button component={Link} to="/courses" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>View batch details</Button>
              <Button href={cta.href} target={cta.external ? '_blank' : undefined} rel="noopener" variant="outlined" color="inherit" sx={{ borderColor: 'divider' }}>{cta.label}</Button>
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
    <Section title={t('joshTalk')}>
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' }, alignItems: 'center' }}>
        <Reveal><LiteYouTube id={c.joshVideoId} title="Josh Talks — Shashank Sajwan" /></Reveal>
        <Stack gap={1.5}>
          {c.joshPoints.map((p, i) => (
            <Reveal key={`${p}-${i}`} delay={i * 0.06}>
              <Stack direction="row" gap={1.2} alignItems="flex-start">
                <CheckCircleRoundedIcon sx={{ color: 'secondary.main', mt: 0.2 }} />
                <Typography>{p}</Typography>
              </Stack>
            </Reveal>
          ))}
        </Stack>
      </Box>
    </Section>
  );
};

const Videos = () => {
  const { t } = useApp();
  const { items } = useContent('videos');
  const featured = items.filter((v) => v.featured);
  if (!featured.length) return null;
  return (
    <Section title={t('mostViewed')} action={<Button component={Link} to="/videos" endIcon={<ArrowForwardRoundedIcon />} sx={{ flexShrink: 0 }}>{t('viewAll')}</Button>}>
      <Rail>
        {featured.map((v) => (
          <Box key={v.id} className="snap-start" sx={{ flexShrink: 0, width: { xs: '82%', sm: 360 } }}>
            <LiteYouTube id={v.id} title={v.title} />
            <Typography sx={{ mt: 1, fontWeight: 600 }}>{v.title}</Typography>
          </Box>
        ))}
      </Rail>
    </Section>
  );
};

const Community = ({ c }) => {
  const { lang } = useApp();
  const { socials } = useContent('site');
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      <Reveal>
        <Box className="glow-card" sx={{ p: { xs: 3, md: 5 }, borderRadius: '28px', color: '#fff', textAlign: 'center' }}>
          <Typography variant="h2">{tr(c.communityTitle, lang)}</Typography>
          <Typography sx={{ opacity: 0.85, mt: 1, mb: 3 }}>{c.communityText}</Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} gap={1.5} justifyContent="center">
            <Button href={socials.telegram} target="_blank" rel="noopener" startIcon={<TelegramIcon />} sx={{ bgcolor: '#fff', color: '#0B1640', '&:hover': { bgcolor: '#f1f1f1' } }}>Telegram</Button>
            <Button href={socials.youtube} target="_blank" rel="noopener" startIcon={<YouTubeIcon />} sx={{ bgcolor: 'rgba(255,255,255,.14)', color: '#fff' }}>YouTube</Button>
          </Stack>
        </Box>
      </Reveal>
    </Container>
  );
};

const blocks = { hero: Hero, stats: Stats, batch: BatchTeaser, study: StudyGrid, books: Books, features: Features, director: Director, josh: JoshTalk, videos: Videos, community: Community };

const Home = () => {
  const c = useContent('home');
  useEffect(() => { window.scrollTo(0, 0); }, []);
  // Order and visibility of every block come from Admin → Home page → Sections.
  // Blocks added after an admin saved their order are slotted in at their default position.
  const known = new Set(c.sections.map((s) => s.id));
  const sections = HOME_SECTIONS.reduce((list, h, i) => (known.has(h.id) ? list : [...list.slice(0, i), { id: h.id, visible: true }, ...list.slice(i)]), c.sections);
  const shown = sections.filter((s) => s.visible !== false && blocks[s.id]);
  return (
    <Box sx={{ pt: shown[0]?.id === 'hero' ? 0 : { xs: 8, md: 10 } }}>
      {shown.map((s) => {
        const Block = blocks[s.id];
        return <Block key={s.id} c={c} />;
      })}
    </Box>
  );
};

export default Home;
