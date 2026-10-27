import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Alert, Box, Button, CircularProgress, Container, Stack, Typography } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import { useContent, tr } from '../../context/ContentContext';
import { Reveal } from '../../components/ui/Motion';

const Account = () => {
  const { user, loading, isAdmin, logout, resendVerification, refreshUser } = useAuth();
  const { bookmarks, lang } = useApp();
  const { items: sections } = useContent('studySections');
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  if (loading) return <Box sx={{ pt: 16, display: 'grid', placeItems: 'center' }}><CircularProgress /></Box>;
  if (!user) return <Navigate to="/login?next=/account" replace />;

  const saved = bookmarks.map((id) => sections.find((s) => s.id === id)).filter(Boolean);
  const name = user.displayName || user.email.split('@')[0];

  return (
    <Box className="grid-bg" sx={{ pt: { xs: 10, md: 14 }, pb: 6, minHeight: '70vh' }}>
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        <Reveal>
          <Box className="glow-card" sx={{ p: { xs: 3, md: 4 }, borderRadius: '28px', color: '#fff' }}>
            <Stack direction="row" alignItems="center" gap={2}>
              {user.photoURL ? (
                <Box component="img" src={user.photoURL} alt="" sx={{ width: 64, height: 64, borderRadius: '50%' }} />
              ) : (
                <Box sx={{ width: 64, height: 64, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'var(--grad)', fontSize: 28, fontWeight: 800 }}>{name[0].toUpperCase()}</Box>
              )}
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="h3" noWrap>Hi, {name}</Typography>
                <Typography noWrap sx={{ opacity: 0.8 }}>{user.email}</Typography>
              </Box>
            </Stack>
            <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mt: 3 }}>
              {isAdmin && <Button component={Link} to="/admin" startIcon={<AdminPanelSettingsRoundedIcon />} sx={{ bgcolor: '#fff', color: '#0B1640', '&:hover': { bgcolor: '#eee' } }}>Open admin panel</Button>}
              <Button startIcon={<LogoutRoundedIcon />} onClick={async () => { await logout(); navigate('/'); }} sx={{ bgcolor: 'rgba(255,255,255,.14)', color: '#fff' }}>Log out</Button>
            </Stack>
          </Box>
        </Reveal>

        {!user.emailVerified && (
          <Alert
            severity="info"
            sx={{ mt: 2 }}
            action={<Stack direction="row"><Button color="inherit" size="small" onClick={async () => { await resendVerification(); setMsg('Verification email sent'); }}>Resend</Button><Button color="inherit" size="small" onClick={refreshUser}>I've verified</Button></Stack>}
          >
            {msg || 'Please verify your email — we sent you a link.'}
          </Alert>
        )}

        <Typography variant="h6" sx={{ mt: 4, mb: 1.5 }}>Saved sections</Typography>
        {saved.length === 0 ? (
          <Typography color="text.secondary">Nothing saved yet. Tap the bookmark on any card in the <Link to="/study">Study Hub</Link>.</Typography>
        ) : (
          <Box sx={{ display: 'grid', gap: 1.5, gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)' } }}>
            {saved.map((s) => (
              <Button key={s.id} component={Link} to={s.path} variant="outlined" color="inherit" sx={{ justifyContent: 'flex-start', borderRadius: '16px', minHeight: 56, borderColor: 'divider' }}>
                {s.icon}&nbsp; {tr(s.title, lang)}
              </Button>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Account;
