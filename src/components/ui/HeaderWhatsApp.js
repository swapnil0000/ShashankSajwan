import React, { useState } from 'react';
import { Box, ButtonBase, Dialog, Drawer, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useContent } from '../../context/ContentContext';
import { useApp } from '../../context/AppContext';
import { trackWhatsApp, useBatchWhatsApp, useMentorshipWhatsApp, WA_GREEN } from './WhatsAppButton';

// One choice in the enquiry chooser: a big tappable row that opens WhatsApp.
const Choice = ({ href, Icon, background, title, sub, placement, onDone }) => (
  <ButtonBase
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => { trackWhatsApp(placement); onDone(); }}
    sx={{ width: '100%', justifyContent: 'flex-start', gap: 1.5, p: 1.5, borderRadius: '18px', textAlign: 'left', border: 1, borderColor: 'divider', bgcolor: 'background.paper', transition: 'border-color .2s, transform .15s', '&:hover': { borderColor: WA_GREEN }, '&:active': { transform: 'scale(.98)' } }}
  >
    <Box sx={{ width: 48, height: 48, flexShrink: 0, borderRadius: '14px', display: 'grid', placeItems: 'center', color: '#fff', background }}><Icon /></Box>
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <Typography sx={{ fontWeight: 800, fontSize: 16, lineHeight: 1.25 }}>{title}</Typography>
      {sub && <Typography noWrap variant="body2" color="text.secondary">{sub}</Typography>}
    </Box>
    <Stack direction="row" alignItems="center" gap={0.3} sx={{ flexShrink: 0, color: WA_GREEN }}>
      <WhatsAppIcon fontSize="small" /><ChevronRightRoundedIcon fontSize="small" />
    </Stack>
  </ButtonBase>
);

// Sheet (phones) or dialog (desktop): "What would you like to ask about?"
const EnquiryChooser = ({ open, onClose, batchHref, mentorHref }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useApp();
  const b = useContent('batch');
  const m = useContent('mentorship');
  const body = (
    <Box sx={{ p: { xs: 2, md: 3 }, pt: { xs: 1, md: 3 } }}>
      <Typography variant="h6" sx={{ fontWeight: 800 }}>{t('chooserTitle')}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.3, mb: 2 }}>{t('chooserSub')}</Typography>
      <Stack gap={1.2}>
        <Choice href={batchHref} Icon={SchoolRoundedIcon} background="var(--grad-navy)" title={`${b.title} ${b.accent}`} sub={b.status !== 'live' ? 'Coming soon · fees & admission' : b.badge} placement="header-chooser-batch" onDone={onClose} />
        <Choice href={mentorHref} Icon={PsychologyRoundedIcon} background="var(--grad)" title={`${m.title} ${m.accent}`} sub={m.badge} placement="header-chooser-mentorship" onDone={onClose} />
      </Stack>
    </Box>
  );
  if (isMobile) {
    return (
      <Drawer anchor="bottom" open={open} onClose={onClose} PaperProps={{ sx: { borderTopLeftRadius: 28, borderTopRightRadius: 28, pb: 'calc(16px + env(safe-area-inset-bottom))' } }}>
        <Box sx={{ width: 40, height: 5, borderRadius: 9, bgcolor: 'divider', mx: 'auto', mt: 1.5 }} />
        {body}
      </Drawer>
    );
  }
  return <Dialog open={open} onClose={onClose} PaperProps={{ sx: { borderRadius: '24px', width: 460 } }}>{body}</Dialog>;
};

// Always-visible WhatsApp enquiry button in the top header (mobile + desktop).
// With both offers live it opens a chooser (Batch / 1:1 Mentorship) so each enquiry
// arrives with the right message; with only one, it goes straight to WhatsApp.
//  phones:   green pill  [icon  Enquire]
//  tablet/small laptop: round icon only (the header is full there)
//  large screens: pill with a two-line label (title + number)
const HeaderWhatsApp = () => {
  const batchHref = useBatchWhatsApp();
  const mentorHref = useMentorshipWhatsApp();
  const b = useContent('batch');
  const [open, setOpen] = useState(false);
  const href = batchHref || mentorHref;
  if (!href || b.whatsappHeader === false) return null;

  const both = Boolean(batchHref && mentorHref);
  const label = both ? 'Batch & Mentorship' : (b.whatsappHeaderLabel || 'Batch Enquiry');
  const number = String(b.whatsapp || '').trim();
  const linkProps = both
    ? { component: 'button', type: 'button', onClick: () => { trackWhatsApp('header'); setOpen(true); }, 'aria-haspopup': 'dialog' }
    : { component: 'a', href, target: '_blank', rel: 'noopener noreferrer', onClick: () => trackWhatsApp('header') };

  return (
    <>
      <Tooltip title={both ? 'Ask about the batch or 1:1 mentorship on WhatsApp' : 'Ask us on WhatsApp'} arrow>
        <ButtonBase
          {...linkProps}
          aria-label={`${label} enquiry on WhatsApp`}
          sx={{
            flexShrink: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: { xs: 0.6, lg: 1 },
            height: { xs: 38, md: 44 },
            pl: { xs: 0.5, md: 0.5, lg: 0.6 },
            pr: { xs: 1.3, md: 0.5, lg: 1.6 },
            '@media (max-width:379px)': { pr: 1, gap: 0.4 },
            '@media (max-width:339px)': { pr: 0.5 },
            borderRadius: '999px',
            color: '#fff',
            background: 'linear-gradient(135deg, #2BE07A 0%, #1DB954 100%)',
            boxShadow: '0 8px 20px -10px rgba(29,185,84,.85), inset 0 1px 0 rgba(255,255,255,.25)',
            transition: 'transform .15s ease, box-shadow .2s ease, filter .2s ease',
            '&:hover': { filter: 'brightness(1.05)', boxShadow: '0 12px 26px -10px rgba(29,185,84,.95), inset 0 1px 0 rgba(255,255,255,.25)' },
            '&:active': { transform: 'scale(.96)' },
            '&:focus-visible': { outline: `3px solid ${WA_GREEN}55`, outlineOffset: 2 },
          }}
        >
          {/* Icon with a soft ring that pulses to draw the eye */}
          <Box
            className="wa-ring"
            sx={{ position: 'relative', width: { xs: 30, md: 34 }, height: { xs: 30, md: 34 }, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: 'rgba(255,255,255,.22)', flexShrink: 0 }}
          >
            <WhatsAppIcon sx={{ fontSize: { xs: 19, md: 21 } }} />
            <Box sx={{ position: 'absolute', top: 1, right: 1, width: 8, height: 8, borderRadius: '50%', bgcolor: '#FFE45C', border: '1.5px solid #1DB954' }} />
          </Box>

          {/* Phones: one short word */}
          <Typography component="span" sx={{ display: { xs: 'block', md: 'none' }, fontWeight: 800, fontSize: 13, lineHeight: 1, whiteSpace: 'nowrap', '@media (max-width:339px)': { display: 'none' } }}>
            {b.whatsappHeaderShort || 'Enquire'}
          </Typography>

          {/* Large screens: title + number, which builds trust and lets desktop users dial */}
          <Box sx={{ display: { xs: 'none', lg: 'block' }, textAlign: 'left', lineHeight: 1 }}>
            <Typography component="span" sx={{ display: 'block', fontSize: 10.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', opacity: 0.9, lineHeight: 1.2 }}>
              {label}
            </Typography>
            <Typography component="span" sx={{ display: 'block', fontSize: 14, fontWeight: 800, whiteSpace: 'nowrap', lineHeight: 1.2 }}>
              {number}
            </Typography>
          </Box>
        </ButtonBase>
      </Tooltip>
      {both && <EnquiryChooser open={open} onClose={() => setOpen(false)} batchHref={batchHref} mentorHref={mentorHref} />}
    </>
  );
};

export default HeaderWhatsApp;
