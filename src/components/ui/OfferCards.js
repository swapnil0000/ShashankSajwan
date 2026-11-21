import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useContent } from '../../context/ContentContext';
import { useApp } from '../../context/AppContext';
import { trackWhatsApp, useBatchWhatsApp, useMentorshipWhatsApp, WA_GREEN } from './WhatsAppButton';

const isExternal = (to) => /^https?:\/\//.test(to || '');

// One offer. Phones: compact half-width card (badge, short name, Enquire), so both offers
// fit on screen right under the banner. Larger screens: full card with subtitle and points.
const OfferCard = ({ side, ...props }) => (side ? <SideCard {...props} /> : <StripCard {...props} />);

// Large screens, next to the banner: compact tile (badge, name, one line, buttons) that
// takes half the banner's height, so both offers are seen without scrolling.
const SideCard = ({ tone, Icon, badge, pulse, title, accent, shortTitle, subtitle, waHref, placement, detailsTo, delay }) => {
  const { t } = useApp();
  const navy = tone === 'navy';
  return (
    <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: 0.4 }} style={{ flex: 1, minHeight: 0, display: 'flex' }}>
      <Box
        sx={{
          position: 'relative', overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 1,
          px: 2, py: { lg: 1.6, xl: 2 }, borderRadius: '22px', color: '#fff',
          background: navy ? 'var(--grad-navy)' : 'var(--grad)',
          boxShadow: navy ? '0 24px 48px -28px rgba(11,22,64,.8)' : '0 24px 48px -28px rgba(224,41,74,.8)',
        }}
      >
        <Icon sx={{ position: 'absolute', right: -16, top: -10, fontSize: 120, opacity: 0.12, pointerEvents: 'none' }} />
        <Box sx={{ position: 'relative', minWidth: 0 }}>
          {badge && (
            <Stack direction="row" alignItems="center" gap={0.6} sx={{ display: 'inline-flex', maxWidth: '100%', px: 1, py: 0.4, borderRadius: '999px', bgcolor: 'rgba(255,255,255,.14)' }}>
              {pulse && <Box className="pulse" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#3ddc84', flexShrink: 0 }} />}
              <Typography noWrap sx={{ fontSize: 11, fontWeight: 800, letterSpacing: '.05em', textTransform: 'uppercase', lineHeight: 1.2 }}>{badge}</Typography>
            </Stack>
          )}
          <Typography noWrap title={`${title} ${accent}`} sx={{ mt: 0.8, fontWeight: 800, fontSize: { lg: 20, xl: 22 }, lineHeight: 1.2 }}>
            {shortTitle || `${title} ${accent}`}
          </Typography>
          {subtitle && <Typography noWrap sx={{ display: { lg: 'none', xl: 'block' }, mt: 0.3, fontSize: 13.5, opacity: 0.8 }}>{subtitle}</Typography>}
        </Box>
        <Stack direction="row" gap={1} sx={{ position: 'relative' }}>
          {waHref && (
            <Button
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp(placement)}
              startIcon={<WhatsAppIcon />}
              sx={{ flex: 1, minHeight: 40, fontSize: 14, color: '#fff', background: WA_GREEN, boxShadow: '0 10px 22px -12px rgba(0,0,0,.6)', '&:hover': { background: '#1EBE5A' } }}
            >
              {t('offersEnquire')}
            </Button>
          )}
          {detailsTo && (
            <Button
              {...(isExternal(detailsTo) ? { href: detailsTo, target: '_blank', rel: 'noopener' } : { component: Link, to: detailsTo })}
              aria-label={t('offersDetails')}
              sx={{ minWidth: 0, minHeight: 40, px: 1.6, color: '#fff', bgcolor: 'rgba(255,255,255,.16)', '&:hover': { bgcolor: 'rgba(255,255,255,.26)' } }}
            >
              <ArrowForwardRoundedIcon fontSize="small" />
            </Button>
          )}
        </Stack>
      </Box>
    </motion.div>
  );
};

// Below the banner (phones, tablets, small laptops).
const StripCard = ({ tone, Icon, badge, pulse, title, accent, shortTitle, subtitle, points, waHref, placement, detailsTo, delay }) => {
  const { t } = useApp();
  const navy = tone === 'navy';
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.4 }} style={{ height: '100%', minWidth: 0 }}>
      <Box
        sx={{
          position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column',
          p: { xs: 1.5, sm: 2.2, md: 2.6 }, borderRadius: { xs: '20px', md: '26px' }, color: '#fff',
          background: navy ? 'var(--grad-navy)' : 'var(--grad)',
          boxShadow: navy ? '0 24px 48px -28px rgba(11,22,64,.8)' : '0 24px 48px -28px rgba(224,41,74,.8)',
        }}
      >
        {/* Large faded icon as decoration */}
        <Icon sx={{ position: 'absolute', right: { xs: -14, md: -18 }, bottom: { xs: -14, md: -24 }, fontSize: { xs: 90, md: 170 }, opacity: 0.12, pointerEvents: 'none' }} />

        <Stack direction="row" alignItems="center" gap={1} sx={{ minWidth: 0 }}>
          <Box sx={{ display: { xs: 'none', sm: 'grid' }, width: { sm: 36, md: 40 }, height: { sm: 36, md: 40 }, flexShrink: 0, borderRadius: { sm: '12px', md: '14px' }, placeItems: 'center', bgcolor: 'rgba(255,255,255,.16)' }}>
            <Icon sx={{ fontSize: { sm: 21, md: 23 } }} />
          </Box>
          {badge && (
            <Stack direction="row" alignItems="center" gap={0.6} sx={{ minWidth: 0, px: { xs: 0.8, md: 1.1 }, py: 0.45, borderRadius: '999px', bgcolor: 'rgba(255,255,255,.14)' }}>
              {pulse && <Box className="pulse" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#3ddc84', flexShrink: 0 }} />}
              <Typography noWrap sx={{ fontSize: { xs: 10, md: 12 }, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase', lineHeight: 1.2 }}>{badge}</Typography>
            </Stack>
          )}
        </Stack>

        {/* Phones: short name */}
        <Typography sx={{ display: { xs: 'block', sm: 'none' }, mt: 1.2, fontWeight: 800, fontSize: 16, lineHeight: 1.2, position: 'relative' }}>{shortTitle || `${title} ${accent}`}</Typography>
        {/* Larger screens: full title, subtitle and points */}
        <Box sx={{ display: { xs: 'none', sm: 'block' }, position: 'relative' }}>
          <Typography sx={{ mt: 1.4, fontWeight: 800, fontSize: { sm: 21, md: 22, lg: 24 }, lineHeight: 1.15 }}>
            {title} <Box component="span" sx={{ color: navy ? '#FFB066' : '#FFE7C2' }}>{accent}</Box>
          </Typography>
          {subtitle && <Typography sx={{ mt: 0.8, fontSize: { sm: 14, md: 14.5 }, opacity: 0.85, maxWidth: 520, display: '-webkit-box', WebkitLineClamp: { sm: 2, md: 1, lg: 2 }, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{subtitle}</Typography>}
          {/* Small laptops / landscape tablets are short: points are hidden there so the buttons stay on screen */}
          {points?.length > 0 && (
            <Stack direction="row" flexWrap="wrap" gap={0.8} sx={{ mt: 1.3, display: { sm: 'flex', md: 'none', lg: 'flex' } }}>
              {points.slice(0, 3).map((p, i) => (
                <Stack key={`${p}-${i}`} direction="row" alignItems="center" gap={0.5} sx={{ pl: 0.8, pr: 1.2, py: 0.5, borderRadius: '999px', bgcolor: 'rgba(255,255,255,.12)', fontSize: 13, fontWeight: 600, lineHeight: 1.2 }}>
                  <CheckRoundedIcon sx={{ fontSize: 15 }} />{p}
                </Stack>
              ))}
            </Stack>
          )}
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row' }} gap={1} sx={{ mt: 'auto', pt: { xs: 1.5, md: 2 }, position: 'relative' }}>
          {waHref && (
            <Button
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp(placement)}
              startIcon={<WhatsAppIcon />}
              sx={{ minHeight: { xs: 38, md: 44 }, px: { xs: 1, sm: 2.2 }, fontSize: { xs: 13.5, md: 15 }, color: '#fff', background: WA_GREEN, boxShadow: '0 10px 22px -12px rgba(0,0,0,.6)', '&:hover': { background: '#1EBE5A' } }}
            >
              <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>{t('offersEnquire')}</Box>
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>{t('offersEnquireLong')}</Box>
            </Button>
          )}
          {detailsTo && (
            <Button
              {...(isExternal(detailsTo) ? { href: detailsTo, target: '_blank', rel: 'noopener' } : { component: Link, to: detailsTo })}
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{ display: { xs: 'none', sm: 'inline-flex' }, minHeight: 44, px: 2, color: '#fff', bgcolor: 'rgba(255,255,255,.14)', '&:hover': { bgcolor: 'rgba(255,255,255,.22)' } }}
            >
              {t('offersDetails')}
            </Button>
          )}
        </Stack>
      </Box>
    </motion.div>
  );
};

// Home: the two paid offers, placed so they are seen as soon as the site opens.
//  variant "strip": a row of two cards right under the banner
//  variant "side":  stacked to the right of the banner (large screens)
const OfferCards = ({ variant = 'strip' }) => {
  const { t } = useApp();
  const b = useContent('batch');
  const m = useContent('mentorship');
  const batchWa = useBatchWhatsApp();
  const mentorWa = useMentorshipWhatsApp();
  const showBatch = b.enabled !== false;
  const showMentor = m.enabled !== false;
  if (!showBatch && !showMentor) return null;
  const side = variant === 'side';

  const cards = (
    <>
      {showBatch && (
        <OfferCard
          side={side}
          tone="navy"
          Icon={SchoolRoundedIcon}
          badge={b.status !== 'live' ? 'Coming soon' : b.badge}
          pulse
          title={b.title}
          accent={b.accent}
          shortTitle={b.shortTitle}
          subtitle={b.subtitle}
          points={(b.highlights || []).map((h) => h.text)}
          waHref={batchWa}
          placement="home-offer-batch"
          detailsTo="/courses"
          delay={0.05}
        />
      )}
      {showMentor && (
        <OfferCard
          side={side}
          tone="saffron"
          Icon={PsychologyRoundedIcon}
          badge={m.badge}
          title={m.title}
          accent={m.accent}
          shortTitle={m.shortTitle}
          subtitle={m.subtitle}
          points={m.points}
          waHref={mentorWa}
          placement="home-offer-mentorship"
          detailsTo={m.link}
          delay={0.12}
        />
      )}
    </>
  );

  if (side) return <Stack component="aside" aria-label={t('offersEyebrow')} gap={2} sx={{ minWidth: 0 }}>{cards}</Stack>;

  return (
    <Container component="section" maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 1.5, sm: 3 }, pt: { xs: 2, md: 2.5 } }}>
      <Stack direction="row" alignItems="center" gap={1.2} sx={{ mb: { xs: 1.2, md: 1.4 } }}>
        <Typography sx={{ fontSize: { xs: 12, md: 13 }, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'secondary.main', whiteSpace: 'nowrap' }}>{t('offersEyebrow')}</Typography>
        <Box sx={{ flex: 1, height: '1px', bgcolor: 'divider' }} />
      </Stack>
      <Box sx={{ display: 'grid', gap: { xs: 1.2, md: 2 }, gridTemplateColumns: showBatch && showMentor ? 'repeat(2, minmax(0, 1fr))' : 'minmax(0, 1fr)' }}>
        {cards}
      </Box>
    </Container>
  );
};

export default OfferCards;
