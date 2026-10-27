import React, { useState } from 'react';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { Alert, Box, Button, CircularProgress, Container, Divider, IconButton, InputAdornment, Link as MuiLink, Stack, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { friendlyAuthError, useAuth } from '../../context/AuthContext';
import { SegmentTabs } from '../../components/ui/ResourceLayout';

// mode: 'login' | 'signup' | 'forgot'
const AuthPage = ({ mode: initialMode = 'login' }) => {
  const { user, login, signup, loginWithGoogle, resetPassword, configured } = useAuth();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const next = params.get('next') || '/account';
  const [mode, setMode] = useState(initialMode);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');

  if (user && mode !== 'forgot') return <Navigate to={next} replace />;

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const run = async (fn) => {
    setBusy(true); setError(''); setInfo('');
    try { await fn(); } catch (e) { setError(friendlyAuthError(e)); }
    setBusy(false);
  };

  const submit = (e) => {
    e.preventDefault();
    if (mode === 'forgot') {
      run(async () => { await resetPassword(form.email); setInfo('Password reset link sent. Check your inbox (and spam).'); });
    } else if (mode === 'signup') {
      if (form.name.trim().length < 2) { setError('Please enter your name.'); return; }
      run(async () => { await signup(form); navigate(next, { replace: true }); });
    } else {
      run(async () => { await login(form); navigate(next, { replace: true }); });
    }
  };

  const titles = {
    login: ['Welcome', 'back', 'Sign in to sync your bookmarks and continue studying.'],
    signup: ['Create your', 'account', 'Free forever. Save notes, track progress on every device.'],
    forgot: ['Reset', 'password', "Enter your email and we'll send you a reset link."],
  };
  const [a, b, sub] = titles[mode];

  return (
    <Box className="grid-bg" sx={{ minHeight: '100vh', pt: { xs: 10, md: 14 }, pb: 6, position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-a" style={{ opacity: 0.35 }} />
      <Container maxWidth="xs" sx={{ position: 'relative', px: { xs: 2, sm: 3 } }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Box sx={{ p: { xs: 2.5, sm: 4 }, borderRadius: '28px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', boxShadow: '0 30px 60px -30px rgba(11,22,64,.45)' }}>
            {mode !== 'forgot' && (
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                <SegmentTabs tabs={['Sign in', 'Sign up']} value={mode === 'login' ? 0 : 1} onChange={(i) => { setMode(i ? 'signup' : 'login'); setError(''); }} layoutId="auth-pill" />
              </Box>
            )}
            <Typography variant="h2" sx={{ fontSize: { xs: 28, sm: 32 } }}>{a} <Box component="span" className="text-gradient">{b}</Box></Typography>
            <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>{sub}</Typography>

            {!configured && <Alert severity="warning" sx={{ mb: 2 }}>Accounts are coming soon — login isn't switched on yet.</Alert>}
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {info && <Alert severity="success" sx={{ mb: 2 }}>{info}</Alert>}

            <Stack component="form" onSubmit={submit} gap={2}>
              {mode === 'signup' && <TextField label="Full name" value={form.name} onChange={set('name')} autoComplete="name" required fullWidth />}
              <TextField label="Email" type="email" value={form.email} onChange={set('email')} autoComplete="email" required fullWidth />
              {mode !== 'forgot' && (
                <TextField
                  label="Password"
                  type={show ? 'text' : 'password'}
                  value={form.password}
                  onChange={set('password')}
                  autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                  helperText={mode === 'signup' ? 'At least 6 characters' : ''}
                  required
                  fullWidth
                  InputProps={{ endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShow(!show)} aria-label="Show password" edge="end">{show ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}</IconButton></InputAdornment> }}
                />
              )}
              {mode === 'login' && (
                <MuiLink component="button" type="button" onClick={() => { setMode('forgot'); setError(''); }} sx={{ alignSelf: 'flex-end', fontSize: 14, fontWeight: 600 }}>Forgot password?</MuiLink>
              )}
              <Button type="submit" variant="contained" size="large" disabled={busy || !configured} fullWidth>
                {busy ? <CircularProgress size={22} color="inherit" /> : mode === 'signup' ? 'Create account' : mode === 'forgot' ? 'Send reset link' : 'Sign in'}
              </Button>
            </Stack>

            {mode !== 'forgot' ? (
              <>
                <Divider sx={{ my: 2.5, fontSize: 13, color: 'text.secondary' }}>or</Divider>
                <Button fullWidth size="large" variant="outlined" color="inherit" startIcon={<GoogleIcon />} disabled={busy || !configured} onClick={() => run(async () => { await loginWithGoogle(); navigate(next, { replace: true }); })} sx={{ borderColor: 'divider' }}>
                  Continue with Google
                </Button>
              </>
            ) : (
              <Button fullWidth sx={{ mt: 2 }} onClick={() => { setMode('login'); setInfo(''); setError(''); }}>Back to sign in</Button>
            )}
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
            By continuing you agree to our <MuiLink component={Link} to="/terms">Terms</MuiLink> and <MuiLink component={Link} to="/private">Privacy Policy</MuiLink>.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AuthPage;
