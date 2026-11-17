import React, { useState } from 'react';
import { Box, Button, Chip, Fab, Stack, TextField, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useContent } from '../../context/ContentContext';
import { whatsappLink } from './WhatsAppButton';

export const DEFAULT_ENQUIRY_TYPES = ['Admission & fees', 'Batch schedule & timings', 'Study material & notes', 'Books', 'Other'];

// Builds the pre-typed WhatsApp message from the student's choices.
const buildMessage = ({ name, type, note }, course) => [
  `Hi! ${name ? `I'm ${name}. ` : ''}I have an enquiry about ${course}.`,
  type && `Enquiry type: ${type}`,
  note && `Message: ${note}`,
].filter(Boolean).join('\n');

// Course-page enquiry card: pick an enquiry type, add name / question, open WhatsApp with it typed.
const WhatsAppEnquiry = ({ sx }) => {
  const b = useContent('batch');
  const types = (b.enquiryTypes || []).filter(Boolean).length ? b.enquiryTypes.filter(Boolean) : DEFAULT_ENQUIRY_TYPES;
  const [form, setForm] = useState({ name: '', type: types[0], note: '' });
  if (!whatsappLink(b.whatsapp)) return null;

  const course = `${b.title || ''} ${b.accent || ''}`.trim() || 'the batch';
  const send = (e) => {
    e.preventDefault();
    window.open(whatsappLink(b.whatsapp, buildMessage({ name: form.name.trim(), type: form.type, note: form.note.trim() }, course)), '_blank', 'noopener');
  };

  return (
    <Box component="form" onSubmit={send} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: '24px', bgcolor: 'rgba(37,211,102,.08)', border: '1px solid rgba(37,211,102,.35)', textAlign: 'left', ...sx }}>
      <Stack direction="row" gap={1.2} alignItems="center">
        <Box sx={{ width: 40, height: 40, flexShrink: 0, borderRadius: '12px', display: 'grid', placeItems: 'center', bgcolor: '#25D366', color: '#fff' }}><WhatsAppIcon /></Box>
        <Box>
          <Typography sx={{ fontWeight: 800 }}>{b.enquiryTitle || 'Enquire on WhatsApp'}</Typography>
          <Typography variant="body2" color="text.secondary">{b.enquiryText || 'Choose what you want to know — we reply on WhatsApp.'}</Typography>
        </Box>
      </Stack>

      <Typography variant="body2" sx={{ fontWeight: 700, mt: 2, mb: 1 }}>Enquiry type</Typography>
      <Stack direction="row" gap={1} flexWrap="wrap">
        {types.map((t) => (
          <Chip
            key={t}
            label={t}
            clickable
            onClick={() => setForm({ ...form, type: t })}
            sx={form.type === t
              ? { bgcolor: '#25D366', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#1EBE5A' } }
              : { bgcolor: 'background.paper', border: 1, borderColor: 'divider', fontWeight: 600 }}
          />
        ))}
      </Stack>

      <Stack gap={1.5} sx={{ mt: 2 }}>
        <TextField size="small" label="Your name (optional)" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value.slice(0, 60) })} autoComplete="name" fullWidth sx={{ bgcolor: 'background.paper', borderRadius: 1 }} />
        <TextField size="small" label="Your question (optional)" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value.slice(0, 400) })} multiline minRows={2} fullWidth sx={{ bgcolor: 'background.paper', borderRadius: 1 }} />
        <Button type="submit" variant="contained" size="large" startIcon={<WhatsAppIcon />} sx={{ background: '#25D366', color: '#fff', boxShadow: '0 12px 28px -14px rgba(37,211,102,.9)', '&:hover': { background: '#1EBE5A' } }}>
          Send enquiry on WhatsApp
        </Button>
      </Stack>
    </Box>
  );
};

// Floating WhatsApp button for course pages. `raised` lifts it above the phone sticky bar.
export const WhatsAppFab = ({ raised }) => {
  const b = useContent('batch');
  const href = whatsappLink(b.whatsapp, b.whatsappMessage);
  if (!href) return null;
  return (
    <Fab
      component="a"
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Enquire on WhatsApp"
      sx={{
        position: 'fixed', right: 16, zIndex: 1095, bgcolor: '#25D366', color: '#fff', '&:hover': { bgcolor: '#1EBE5A' },
        bottom: { xs: `calc(${raised ? 148 : 84}px + env(safe-area-inset-bottom))`, md: 24 },
        boxShadow: '0 12px 28px -10px rgba(37,211,102,.9)',
      }}
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default WhatsAppEnquiry;
