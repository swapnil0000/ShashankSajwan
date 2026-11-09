import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import {
  Alert, Box, Button, ButtonBase, Chip, CircularProgress, Container, Drawer, IconButton, InputBase, Snackbar, Stack, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { collection, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { TextField } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { resetContent, saveContent, useContent, useContentMeta } from '../context/ContentContext';
import { contentDefaults } from '../data/content';
import { ADMIN_EMAILS, OWNER_EMAILS, db } from '../lib/firebase';
import { adminGroups, allBlocks } from './schemas';
import { Fields } from './FieldEditor';

// Where each block shows up on the live site (for the "View" button).
const previewPath = (key) => {
  if (key.startsWith('resource_')) return { ncert: '/ncert', pyqs: '/pyqs', syllabus: '/syllabus', general: '/general', optional: '/optional', news24: '/newsnotes', news25: '/newsnotes25' }[key.slice(9)];
  return { site: '/', home: '/', about: '/about', contact: '/contact', faqs: '/faqs', batch: '/courses', texts: '/', policy_privacy: '/private', policy_terms: '/terms', policy_refund: '/refund', carousel: '/', popups: '/', feed_newspaper: '/newspaper', feed_ca: '/resources/current-affairs', feed_mcq: '/resources/ncert-mcqs', feed_pyq: '/resources/pyqs', studySections: '/study', books: '/books', videos: '/videos' }[key];
};

const Sidebar = ({ onPick }) => {
  const [q, setQ] = useState('');
  const { remote } = useContentMeta();
  return (
    <Box sx={{ p: 2, width: { xs: 300, md: 'auto' } }}>
      <Stack direction="row" alignItems="center" gap={1} sx={{ px: 1.5, height: 40, borderRadius: '999px', bgcolor: 'action.hover', mb: 2 }}>
        <SearchRoundedIcon fontSize="small" />
        <InputBase placeholder="Find a block…" value={q} onChange={(e) => setQ(e.target.value)} sx={{ fontSize: 14, flex: 1 }} />
      </Stack>
      <ButtonBase component={NavLink} to="/admin" end onClick={onPick} sx={navSx}>📊 Dashboard</ButtonBase>
      <ButtonBase component={NavLink} to="/admin/users" onClick={onPick} sx={navSx}>👥 Users</ButtonBase>
      <ButtonBase component={NavLink} to="/admin/leads" onClick={onPick} sx={navSx}>📞 Batch leads</ButtonBase>
      <ButtonBase component={NavLink} to="/admin/admins" onClick={onPick} sx={navSx}>🔐 Admins</ButtonBase>
      {adminGroups.map((g) => {
        const blocks = g.blocks.filter((b) => b.label.toLowerCase().includes(q.toLowerCase()));
        if (!blocks.length) return null;
        return (
          <Box key={g.title} sx={{ mt: 2 }}>
            <Typography sx={{ fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: 'text.secondary', px: 1.5, mb: 0.5 }}>{g.title}</Typography>
            {blocks.map((b) => (
              <ButtonBase key={b.key} component={NavLink} to={`/admin/edit/${b.key}`} onClick={onPick} sx={navSx}>
                <span>{b.icon}</span>
                <Box component="span" sx={{ flex: 1, textAlign: 'left' }}>{b.label}</Box>
                {remote[b.key] && <Box component="span" title="Customised" sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: 'secondary.main' }} />}
              </ButtonBase>
            ))}
          </Box>
        );
      })}
    </Box>
  );
};

const navSx = {
  width: '100%', justifyContent: 'flex-start', gap: 1.2, px: 1.5, py: 1, borderRadius: '12px', fontSize: 14, fontWeight: 600, color: 'text.primary',
  '&.active': { bgcolor: 'rgba(224,41,74,.1)', color: 'primary.main' },
};

const Dashboard = () => {
  const { remote } = useContentMeta();
  const [users, setUsers] = useState(null);
  useEffect(() => {
    getDocs(collection(db, 'users')).then((s) => setUsers(s.size)).catch(() => setUsers('—'));
  }, []);
  const custom = allBlocks.filter((b) => remote[b.key]).length;
  const docs = Object.keys(contentDefaults).filter((k) => k.startsWith('resource_')).reduce((n, k) => {
    const page = remote[k] || contentDefaults[k];
    return n + page.tabs.reduce((m, t) => m + (t.items?.length || 0), 0);
  }, 0);
  const cards = [['Registered users', users ?? '…'], ['Editable blocks', allBlocks.length], ['Customised blocks', custom], ['PDF documents', docs]];
  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 0.5 }}>Dashboard</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>Edit any block from the menu. Changes go live instantly for every visitor — no deploy needed.</Typography>
      <Box sx={{ display: 'grid', gap: 1.5, gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, mb: 3 }}>
        {cards.map(([l, v]) => (
          <Box key={l} className="glow-card" sx={{ p: 2.5, borderRadius: '20px', color: '#fff' }}>
            <Typography sx={{ fontSize: 30, fontWeight: 800, color: 'secondary.main' }}>{v}</Typography>
            <Typography sx={{ opacity: 0.85, fontSize: 13 }}>{l}</Typography>
          </Box>
        ))}
      </Box>
      {adminGroups.map((g) => (
        <Box key={g.title} sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>{g.title}</Typography>
          <Box sx={{ display: 'grid', gap: 1.5, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' } }}>
            {g.blocks.map((b) => (
              <ButtonBase key={b.key} component={Link} to={`/admin/edit/${b.key}`} sx={{ display: 'block', textAlign: 'left', p: 2, borderRadius: '16px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', '&:hover': { borderColor: 'primary.main' } }}>
                <Stack direction="row" justifyContent="space-between"><Typography sx={{ fontWeight: 700 }}>{b.icon} {b.label}</Typography>{remote[b.key] && <Chip size="small" label="Customised" color="secondary" />}</Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{b.desc}</Typography>
              </ButtonBase>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const BlockEditor = () => {
  const { key } = useParams();
  const block = allBlocks.find((b) => b.key === key);
  const live = useContent(key);
  const { remote } = useContentMeta();
  const [draft, setDraft] = useState(live);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const liveJson = useMemo(() => JSON.stringify(live), [live]);
  const dirty = JSON.stringify(draft) !== liveJson;
  const touched = React.useRef(false);

  // Fresh form when switching blocks.
  useEffect(() => { touched.current = false; }, [key]);
  // Follow live data (initial load, or another admin's save) until the user starts editing.
  useEffect(() => { if (!touched.current) setDraft(JSON.parse(liveJson)); }, [key, liveJson]);
  const edit = (v) => { touched.current = true; setDraft(v); };

  useEffect(() => {
    const warn = (e) => { if (dirty) { e.preventDefault(); e.returnValue = ''; } };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  if (!block) return <Alert severity="error">Unknown block.</Alert>;

  const save = async () => {
    setSaving(true);
    try { await saveContent(key, draft); touched.current = false; setToast('Saved — live on the website now'); } catch (e) { setToast(`Save failed: ${e.message}`); }
    setSaving(false);
  };
  const reset = async () => {
    if (!window.confirm('Reset this block to the original website content? Your edits to it will be removed.')) return;
    try { await resetContent(key); touched.current = false; setDraft(contentDefaults[key]); setToast('Reset to default'); } catch (e) { setToast(`Reset failed: ${e.message}`); }
  };

  return (
    <Box sx={{ pb: 12 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }} gap={1} sx={{ mb: 2 }}>
        <Box>
          <Typography variant="h2">{block.icon} {block.label}</Typography>
          <Typography color="text.secondary">{block.desc}</Typography>
        </Box>
        {previewPath(key) && <Button component={Link} to={previewPath(key)} target="_blank" endIcon={<OpenInNewRoundedIcon />}>View on site</Button>}
      </Stack>
      <Box sx={{ p: { xs: 1.5, md: 3 }, borderRadius: '20px', bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
        <Fields fields={block.fields} value={draft} onChange={edit} />
      </Box>

      <Box className="glass" sx={{ position: 'fixed', left: { xs: 0, md: 280 }, right: 0, bottom: 0, zIndex: 1200, borderTop: 1, borderColor: 'divider', px: 2, py: 1.5, pb: 'calc(12px + env(safe-area-inset-bottom))' }}>
        <Stack direction="row" gap={1} justifyContent="flex-end" alignItems="center" sx={{ maxWidth: 1000, mx: 'auto' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mr: 'auto' }}>{dirty ? 'Unsaved changes' : remote[key] ? 'Customised · saved' : 'Showing default content'}</Typography>
          {remote[key] && <Button color="inherit" onClick={reset} startIcon={<RestartAltRoundedIcon />}>Reset</Button>}
          <Button variant="outlined" color="inherit" disabled={!dirty} onClick={() => { touched.current = false; setDraft(JSON.parse(liveJson)); }}>Discard</Button>
          <Button variant="contained" disabled={!dirty || saving} onClick={save} startIcon={saving ? <CircularProgress size={16} color="inherit" /> : <SaveRoundedIcon />}>Save</Button>
        </Stack>
      </Box>
      <Snackbar open={Boolean(toast)} autoHideDuration={2500} onClose={() => setToast('')} message={toast} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} />
    </Box>
  );
};

const Users = () => {
  const [rows, setRows] = useState(null);
  const [err, setErr] = useState('');
  const [q, setQ] = useState('');
  useEffect(() => {
    getDocs(query(collection(db, 'users'), orderBy('createdAt', 'desc')))
      .then((s) => setRows(s.docs.map((d) => ({ id: d.id, ...d.data() }))))
      .catch((e) => setErr(e.message));
  }, []);
  const list = (rows || []).filter((r) => `${r.name} ${r.email}`.toLowerCase().includes(q.toLowerCase()));
  const exportCsv = () => {
    const csv = ['name,email,joined', ...list.map((r) => [r.name, r.email, r.createdAt?.toDate?.().toISOString() || ''].map((v) => `"${String(v || '').replace(/"/g, '""')}"`).join(','))].join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = 'users.csv';
    a.click();
  };
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h2">Users</Typography>
        {rows && <Button onClick={exportCsv}>Export CSV</Button>}
      </Stack>
      {err && <Alert severity="error">{err}</Alert>}
      {!rows && !err && <CircularProgress />}
      {rows && (
        <>
          <Stack direction="row" alignItems="center" gap={1} sx={{ px: 1.5, height: 44, borderRadius: '999px', bgcolor: 'background.paper', border: 1, borderColor: 'divider', mb: 2, maxWidth: 420 }}>
            <SearchRoundedIcon fontSize="small" />
            <InputBase placeholder={`Search ${rows.length} users…`} value={q} onChange={(e) => setQ(e.target.value)} sx={{ flex: 1 }} />
          </Stack>
          <Stack gap={1}>
            {list.map((r) => (
              <Stack key={r.id} direction="row" alignItems="center" gap={1.5} sx={{ p: 1.5, borderRadius: '14px', bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
                <Box sx={{ width: 36, height: 36, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'var(--grad)', color: '#fff', fontWeight: 800 }}>{(r.name || r.email || '?')[0].toUpperCase()}</Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography noWrap sx={{ fontWeight: 700 }}>{r.name || '—'}</Typography>
                  <Typography noWrap variant="body2" color="text.secondary">{r.email}</Typography>
                </Box>
                <Typography variant="caption" color="text.secondary">{r.createdAt?.toDate?.().toLocaleDateString() || ''}</Typography>
              </Stack>
            ))}
          </Stack>
        </>
      )}
    </Box>
  );
};

// Who can open the admin panel. Built-in emails are fixed in code; owners can add more here.
const Admins = () => {
  const { isOwner, user } = useAuth();
  const [rows, setRows] = useState(null);
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const load = () => getDocs(collection(db, 'admins')).then((s) => setRows(s.docs.map((d) => ({ email: d.id, ...d.data() })))).catch((e) => setMsg(e.message));
  useEffect(() => { load(); }, []);

  const add = async () => {
    const e = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) { setMsg('Enter a valid email'); return; }
    try {
      await setDoc(doc(db, 'admins', e), { addedBy: user.email, addedAt: serverTimestamp() });
      setEmail(''); setMsg(`${e} can now open the admin panel (after signing in with that email).`); load();
    } catch (err) { setMsg(err.message); }
  };
  const remove = async (e) => {
    if (!window.confirm(`Remove admin access for ${e}?`)) return;
    try { await deleteDoc(doc(db, 'admins', e)); load(); } catch (err) { setMsg(err.message); }
  };

  const builtIn = ADMIN_EMAILS.map((e) => ({ email: e, role: OWNER_EMAILS.includes(e) ? 'Owner' : 'Admin', fixed: true }));
  const list = [...builtIn, ...(rows || []).filter((r) => !ADMIN_EMAILS.includes(r.email)).map((r) => ({ ...r, role: 'Admin' }))];

  return (
    <Box>
      <Typography variant="h2">Admins</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>People who can edit the website. They sign in with Google (or a verified email) using the address listed here.</Typography>
      {msg && <Alert severity="info" sx={{ mb: 2 }} onClose={() => setMsg('')}>{msg}</Alert>}
      {isOwner ? (
        <Stack direction={{ xs: 'column', sm: 'row' }} gap={1} sx={{ mb: 3 }}>
          <TextField size="small" label="Email to give admin access" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ flex: 1 }} />
          <Button variant="contained" onClick={add}>Add admin</Button>
        </Stack>
      ) : (
        <Alert severity="warning" sx={{ mb: 3 }}>Only the owner can add or remove admins.</Alert>
      )}
      <Stack gap={1}>
        {list.map((a) => (
          <Stack key={a.email} direction="row" alignItems="center" gap={1.5} sx={{ p: 1.5, borderRadius: '14px', bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
            <Box sx={{ width: 36, height: 36, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'var(--grad)', color: '#fff', fontWeight: 800 }}>{a.email[0].toUpperCase()}</Box>
            <Typography sx={{ flex: 1, fontWeight: 600, minWidth: 0 }} noWrap>{a.email}</Typography>
            <Chip size="small" label={a.role} color={a.role === 'Owner' ? 'primary' : 'default'} />
            {a.fixed ? <Typography variant="caption" color="text.secondary">built-in</Typography>
              : isOwner && <Button size="small" color="error" onClick={() => remove(a.email)}>Remove</Button>}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

// "Notify me" sign-ups from the batch Coming Soon page.
const Leads = () => {
  const [rows, setRows] = useState(null);
  const [err, setErr] = useState('');
  useEffect(() => {
    getDocs(query(collection(db, 'leads'), orderBy('createdAt', 'desc')))
      .then((s) => setRows(s.docs.map((d) => ({ id: d.id, ...d.data() }))))
      .catch((e) => setErr(e.message));
  }, []);
  const exportCsv = () => {
    const csv = ['name,phone,source,date', ...rows.map((r) => [r.name, r.phone, r.source, r.createdAt?.toDate?.().toISOString() || ''].map((v) => `"${String(v || '').replace(/"/g, '""')}"`).join(','))].join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = 'batch-leads.csv';
    a.click();
  };
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Box>
          <Typography variant="h2">Batch leads</Typography>
          <Typography color="text.secondary">People who tapped "Notify me" on the Coming Soon page.</Typography>
        </Box>
        {rows?.length > 0 && <Button onClick={exportCsv}>Export CSV</Button>}
      </Stack>
      {err && <Alert severity="error">{err}</Alert>}
      {!rows && !err && <CircularProgress />}
      {rows && rows.length === 0 && <Typography color="text.secondary">No sign-ups yet.</Typography>}
      <Stack gap={1}>
        {(rows || []).map((r) => (
          <Stack key={r.id} direction="row" alignItems="center" gap={1.5} sx={{ p: 1.5, borderRadius: '14px', bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography noWrap sx={{ fontWeight: 700 }}>{r.name}</Typography>
              <Typography variant="body2" color="text.secondary">{r.phone}</Typography>
            </Box>
            <Button size="small" href={`tel:${r.phone}`}>Call</Button>
            <Button size="small" href={`https://wa.me/91${r.phone}`} target="_blank" rel="noopener">WhatsApp</Button>
            <Typography variant="caption" color="text.secondary" sx={{ display: { xs: 'none', sm: 'block' } }}>{r.createdAt?.toDate?.().toLocaleDateString() || ''}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

const AdminApp = () => {
  const { user, isAdmin, isAdminEmailUnverified, loading, configured } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  if (!configured) {
    return (
      <Container maxWidth="sm" sx={{ pt: 14, pb: 6 }}>
        <Alert severity="warning">The admin panel needs Firebase. Add your Firebase keys to <code>.env.local</code> (see <code>.env.example</code>) and restart the app.</Alert>
      </Container>
    );
  }
  if (loading) return <Box sx={{ pt: 16, display: 'grid', placeItems: 'center' }}><CircularProgress /></Box>;
  if (!user) return <Navigate to="/login?next=/admin" replace />;
  if (!isAdmin) {
    return (
      <Container maxWidth="sm" sx={{ pt: 14, pb: 6 }}>
        <Alert severity={isAdminEmailUnverified ? 'info' : 'error'}>
          {isAdminEmailUnverified
            ? 'Please verify your email first — open the verification link we emailed you, then sign out and sign in again.'
            : `${user.email} does not have admin access.`}
        </Alert>
        <Button sx={{ mt: 2 }} onClick={() => navigate('/')}>Back to website</Button>
      </Container>
    );
  }

  return (
    <Box sx={{ pt: { xs: '60px', md: '72px' }, minHeight: '100vh', display: 'flex' }}>
      {isMobile ? (
        <Drawer open={menu} onClose={() => setMenu(false)}><Sidebar onPick={() => setMenu(false)} /></Drawer>
      ) : (
        <Box sx={{ width: 280, flexShrink: 0, borderRight: 1, borderColor: 'divider', position: 'sticky', top: 72, height: 'calc(100vh - 72px)', overflowY: 'auto' }}>
          <Sidebar />
        </Box>
      )}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {isMobile && (
          <Stack direction="row" alignItems="center" gap={1} sx={{ px: 1, py: 1, borderBottom: 1, borderColor: 'divider' }}>
            <IconButton onClick={() => setMenu(true)} aria-label="Admin menu"><MenuRoundedIcon /></IconButton>
            <Typography sx={{ fontWeight: 800 }}>Admin</Typography>
          </Stack>
        )}
        <Box sx={{ maxWidth: 1000, mx: 'auto', p: { xs: 2, md: 4 } }}>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="leads" element={<Leads />} />
            <Route path="admins" element={<Admins />} />
            <Route path="edit/:key" element={<BlockEditor />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminApp;
