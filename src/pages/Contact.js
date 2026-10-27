import React, { useState } from 'react';
import { Box, Button, Container, IconButton, Snackbar, Stack, Typography } from '@mui/material';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PageHero from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Motion';
import { useContent } from '../context/ContentContext';

const Card = ({ icon, title, children, delay }) => (
  <Reveal delay={delay}>
    <Box sx={{ p: { xs: 2.5, md: 3 }, borderRadius: '24px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', height: '100%' }}>
      <Box sx={{ width: 48, height: 48, borderRadius: '16px', display: 'grid', placeItems: 'center', background: 'var(--grad)', color: '#fff', mb: 2 }}>{icon}</Box>
      <Typography variant="h6" sx={{ mb: 1 }}>{title}</Typography>
      {children}
    </Box>
  </Reveal>
);

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { email: EMAIL, socials } = useContent('site');
  const c = useContent('contact');
  const copy = () => {
    navigator.clipboard?.writeText(EMAIL).then(() => setCopied(true)).catch(() => {});
  };

  return (
    <Box sx={{ pb: 4 }}>
      <PageHero title="Get in" accent="touch" eyebrow="Contact" subtitle={c.heroSub} />
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
          <Card icon={<MailRoundedIcon />} title="Email us">
            <Typography color="text.secondary" variant="body2">{c.emailText}</Typography>
            <Stack direction="row" alignItems="center" gap={1} sx={{ mt: 1.5, p: 1, pl: 1.5, borderRadius: '999px', bgcolor: 'action.hover' }}>
              <Typography sx={{ fontWeight: 700, fontSize: 14, flex: 1, wordBreak: 'break-all' }}>{EMAIL}</Typography>
              <IconButton size="small" onClick={copy} aria-label="Copy email"><ContentCopyRoundedIcon fontSize="small" /></IconButton>
            </Stack>
            <Button variant="contained" href={`mailto:${EMAIL}`} fullWidth sx={{ mt: 1.5 }}>Send email</Button>
          </Card>
          <Card icon={<WorkRoundedIcon />} title="Work with us" delay={0.06}>
            <Typography color="text.secondary" variant="body2">{c.workText}</Typography>
            <Button variant="outlined" color="inherit" href={`mailto:${EMAIL}?subject=Job%20application`} fullWidth sx={{ mt: 2, borderColor: 'divider' }}>Apply by email</Button>
          </Card>
          <Card icon={<LocationOnRoundedIcon />} title="Head office" delay={0.12}>
            <Typography color="text.secondary" variant="body2">{c.officeText}</Typography>
            <Box component="img" loading="lazy" src="/assets/contact.webp" alt="" sx={{ mt: 2, width: '100%', borderRadius: '16px', maxHeight: 180, objectFit: 'contain' }} />
          </Card>
        </Box>

        <Reveal>
          <Box className="glow-card" sx={{ mt: 3, p: { xs: 3, md: 4 }, borderRadius: '28px', color: '#fff' }}>
            <Typography variant="h3">Fastest replies on social</Typography>
            <Typography sx={{ opacity: 0.8, mt: 0.5, mb: 2 }}>Join the community for daily updates and doubt discussions.</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={1.2}>
              <Button href={socials.telegram} target="_blank" rel="noopener" startIcon={<TelegramIcon />} sx={{ bgcolor: '#fff', color: '#0B1640', '&:hover': { bgcolor: '#eee' } }}>Telegram</Button>
              <Button href={socials.instagram} target="_blank" rel="noopener" startIcon={<InstagramIcon />} sx={{ bgcolor: 'rgba(255,255,255,.14)', color: '#fff' }}>Instagram</Button>
              <Button href={socials.youtube} target="_blank" rel="noopener" startIcon={<YouTubeIcon />} sx={{ bgcolor: 'rgba(255,255,255,.14)', color: '#fff' }}>YouTube</Button>
            </Stack>
          </Box>
        </Reveal>
      </Container>
      <Snackbar open={copied} autoHideDuration={1800} onClose={() => setCopied(false)} message="Email copied" anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} sx={{ bottom: { xs: 90, md: 24 } }} />
    </Box>
  );
};

export default Contact;
