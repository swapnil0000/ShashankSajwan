import React, { useState } from 'react';
import { Alert, Box, Button, CircularProgress, Container, Stack, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import { db } from '../../lib/firebase';
import { useContent } from '../../context/ContentContext';
import WhatsAppButton, { useBatchWhatsApp } from '../../components/ui/WhatsAppButton';

const phoneOk = (p) => /^[6-9]\d{9}$/.test(p.replace(/\D/g, '').slice(-10));

// Shown on /courses while Admin → Batch → Status is "coming_soon".
// "Notify me" saves leads to Firestore; the admin sees them under Admin → Leads.
const ComingSoon = () => {
  const b = useContent('batch');
  const { email } = useContent('site');
  const wa = useBatchWhatsApp();
  const [form, setForm] = useState({ name: '', phone: '' });
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (form.name.trim().length < 2) { setError('Please enter your name.'); return; }
    if (!phoneOk(form.phone)) { setError('Please enter a valid 10-digit mobile number.'); return; }
    setError(''); setState('saving');
    try {
      await addDoc(collection(db, 'leads'), {
        name: form.name.trim().slice(0, 80),
        phone: form.phone.replace(/\D/g, '').slice(-10),
        source: 'batch',
        createdAt: serverTimestamp(),
      });
      setState('done');
    } catch {
      setState('idle');
      setError('Could not save right now. Please try again in a minute.');
    }
  };

  return (
    <Box className="grid-bg" sx={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', pt: { xs: 11, md: 16 }, pb: 8 }}>
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <Container maxWidth="sm" sx={{ position: 'relative', px: { xs: 2, sm: 3 }, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <motion.div animate={{ rotate: [0, -8, 8, 0] }} transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.5 }} style={{ display: 'inline-block' }}>
            <Box sx={{ width: 84, height: 84, mx: 'auto', borderRadius: '26px', display: 'grid', placeItems: 'center', fontSize: 42, background: 'var(--grad)', boxShadow: '0 20px 40px -16px rgba(224,41,74,.6)' }}><SchoolRoundedIcon sx={{ fontSize: 44, color: '#fff' }} /></Box>
          </motion.div>
          <Typography sx={{ mt: 3, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', fontSize: 13, color: 'secondary.main' }}>{b.title} {b.accent}</Typography>
          <Typography variant="h1" sx={{ mt: 1 }}><Box component="span" className="text-gradient">{b.comingSoonTitle || 'Coming Soon'}</Box></Typography>
          <Typography color="text.secondary" sx={{ mt: 2, fontSize: { xs: 15, md: 18 } }}>{b.comingSoonText}</Typography>

          <Box sx={{ mt: 4, p: { xs: 2.5, sm: 3 }, borderRadius: '24px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', boxShadow: '0 30px 60px -36px rgba(11,22,64,.5)', textAlign: 'left' }}>
            {state === 'done' ? (
              <Stack alignItems="center" gap={1} sx={{ py: 2, textAlign: 'center' }}>
                <Typography sx={{ fontSize: 40 }}>✅</Typography>
                <Typography variant="h6">You're on the list!</Typography>
                <Typography color="text.secondary">We'll contact you as soon as admissions open.</Typography>
              </Stack>
            ) : db ? (
              <Stack component="form" onSubmit={submit} gap={1.5}>
                <Stack direction="row" gap={1} alignItems="center"><NotificationsActiveRoundedIcon color="primary" /><Typography sx={{ fontWeight: 800 }}>Get notified at launch</Typography></Stack>
                {error && <Alert severity="error">{error}</Alert>}
                <TextField label="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" fullWidth />
                <TextField label="Mobile number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} inputProps={{ inputMode: 'tel', maxLength: 14 }} autoComplete="tel" fullWidth />
                <Button type="submit" variant="contained" size="large" disabled={state === 'saving'}>{state === 'saving' ? <CircularProgress size={22} color="inherit" /> : 'Notify me'}</Button>
              </Stack>
            ) : (
              <Typography color="text.secondary" sx={{ textAlign: 'center' }}>For early enquiries, write to <Box component="a" href={`mailto:${email}`} sx={{ color: 'primary.main', fontWeight: 700 }}>{email}</Box></Typography>
            )}
          </Box>

          {wa && (
            <Box sx={{ mt: 2, p: { xs: 2, sm: 2.5 }, borderRadius: '24px', bgcolor: 'rgba(37,211,102,.08)', border: '1px solid rgba(37,211,102,.3)' }}>
              <Typography sx={{ fontWeight: 800 }}>Have a question about the batch?</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.3, mb: 1.5 }}>Message us on WhatsApp — your enquiry is already typed, just press send.</Typography>
              <WhatsAppButton fullWidth />
            </Box>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default ComingSoon;
