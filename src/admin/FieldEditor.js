import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  Box, Button, ButtonBase, Collapse, IconButton, LinearProgress, MenuItem, Stack, Switch, TextField, Tooltip, Typography,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import { FILE_PATH_PREFIX, MAX_FILE_MB, isMediaRef, mediaId, resolveImage, uploadFile, uploadImage } from '../lib/media';

// BlockEditor provides `publish()` so an upload goes live without pressing Save.
export const AutoSaveContext = createContext({ publish: () => {} });

// Shows "media:<id>" images inside the admin (the stored value stays the short reference).
const useMediaSrc = (value) => {
  const [src, setSrc] = useState(isMediaRef(value) ? '' : value);
  useEffect(() => {
    let alive = true;
    if (!isMediaRef(value)) { setSrc(value); return undefined; }
    setSrc('');
    resolveImage(mediaId(value)).then((u) => { if (alive) setSrc(u || ''); });
    return () => { alive = false; };
  }, [value]);
  return src;
};
const Thumb = ({ value, sx }) => {
  const src = useMediaSrc(value);
  return src ? <Box component="img" src={src} alt="" sx={sx} /> : null;
};

// Drag & drop + click-to-pick upload area with progress.
const UploadButton = ({ accept, label, onFile, busy, progress }) => {
  const [over, setOver] = useState(false);
  return (
    <Box
      component="label"
      onDragOver={(e) => { e.preventDefault(); setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => { e.preventDefault(); setOver(false); if (!busy) onFile(e.dataTransfer.files?.[0]); }}
      sx={{
        display: 'flex', alignItems: 'center', gap: 1, mt: 0.8, px: 1.5, py: 1, borderRadius: '12px', cursor: busy ? 'default' : 'pointer',
        border: '1.5px dashed', borderColor: over ? 'primary.main' : 'divider', bgcolor: over ? 'rgba(224,41,74,.06)' : 'transparent',
        fontSize: 13.5, fontWeight: 700, color: 'primary.main', '&:hover': { borderColor: 'primary.main' },
      }}
    >
      <CloudUploadRoundedIcon fontSize="small" />
      <Box sx={{ flex: 1 }}>
        {busy ? `Uploading… ${Math.round((progress || 0) * 100)}%` : label}
        {busy && <LinearProgress variant="determinate" value={Math.round((progress || 0) * 100)} sx={{ mt: 0.5, borderRadius: 4 }} />}
      </Box>
      <input hidden type="file" accept={accept} disabled={busy} onChange={(e) => { onFile(e.target.files?.[0]); e.target.value = ''; }} />
    </Box>
  );
};

const useUploader = (uploader, onDone) => {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [err, setErr] = useState('');
  const run = async (file) => {
    if (!file) return;
    setBusy(true); setErr(''); setProgress(0);
    try {
      onDone(await uploader(file, setProgress), file);
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  };
  return { busy, progress, err, run };
};

const blankFor = (fields) => Object.fromEntries(fields.map((f) => [f.key, f.default !== undefined ? f.default : f.type === 'list' || f.type === 'strings' || f.type === 'feed' ? [] : f.type === 'bool' ? false : f.type === 'i18n' || f.type === 'i18nArea' ? { en: '', hi: '' } : f.type === 'object' ? blankFor(f.fields) : f.type === 'number' ? 0 : '']));

const move = (arr, from, to) => {
  const next = [...arr];
  const [x] = next.splice(from, 1);
  next.splice(to, 0, x);
  return next;
};

const toLocalInput = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const ImageField = ({ label, value, onChange }) => {
  const { publish } = useContext(AutoSaveContext);
  const src = useMediaSrc(value);
  const up = useUploader(uploadImage, (url) => { onChange(url); publish(); });
  const uploaded = isMediaRef(value);
  return (
    <Stack direction="row" gap={1.5} alignItems="flex-start">
      <Box sx={{ width: 72, height: 72, flexShrink: 0, borderRadius: '12px', bgcolor: 'action.hover', overflow: 'hidden', border: 1, borderColor: 'divider' }}>
        {src && <Box component="img" src={src} alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {uploaded ? (
          <Stack direction="row" alignItems="center" gap={1} sx={{ minHeight: 40 }}>
            <Typography variant="body2" sx={{ fontWeight: 700, flex: 1 }}>{label}: <Box component="span" sx={{ color: 'success.main' }}>uploaded ✓</Box></Typography>
            <Button size="small" color="error" onClick={() => onChange('')}>Remove</Button>
          </Stack>
        ) : (
          <TextField size="small" fullWidth label={label} value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder="Upload below, or paste an image link" error={Boolean(up.err)} helperText={up.err || undefined} />
        )}
        {uploaded && up.err && <Typography variant="caption" color="error">{up.err}</Typography>}
        <UploadButton accept="image/*" label={uploaded || value ? 'Replace image — click or drop a file' : 'Upload image — click or drop a file'} onFile={up.run} busy={up.busy} progress={up.progress} />
      </Box>
    </Stack>
  );
};

// A link that can also be an uploaded PDF / document.
const FileLinkField = ({ label, value, onChange, help }) => {
  const { publish } = useContext(AutoSaveContext);
  const up = useUploader(uploadFile, (url) => { onChange(url); publish(); });
  const uploaded = typeof value === 'string' && value.startsWith(FILE_PATH_PREFIX);
  return (
    <Box>
      {uploaded ? (
        <Stack direction="row" alignItems="center" gap={1} sx={{ minHeight: 40, px: 1.5, borderRadius: '10px', border: 1, borderColor: 'divider' }}>
          <PictureAsPdfRoundedIcon fontSize="small" color="primary" />
          <Typography variant="body2" sx={{ flex: 1, fontWeight: 700 }}>{label}: <Box component="span" sx={{ color: 'success.main' }}>file uploaded ✓</Box></Typography>
          <Button size="small" component="a" href={value} target="_blank" rel="noopener">Open</Button>
          <Button size="small" color="error" onClick={() => onChange('')}>Remove</Button>
        </Stack>
      ) : (
        <TextField size="small" fullWidth label={label} value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder="Upload a PDF below, or paste a Drive link" error={Boolean(up.err)} helperText={up.err || help} />
      )}
      {uploaded && up.err && <Typography variant="caption" color="error">{up.err}</Typography>}
      <UploadButton accept="application/pdf,image/*,.doc,.docx,.ppt,.pptx" label={`${uploaded ? 'Replace' : 'Upload'} PDF — click or drop (max ${MAX_FILE_MB} MB)`} onFile={up.run} busy={up.busy} progress={up.progress} />
    </Box>
  );
};

const StringList = ({ label, value = [], onChange, multiline }) => (
  <Box>
    <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>{label}</Typography>
    <Stack gap={1}>
      {value.map((s, i) => (
        <Stack key={i} direction="row" gap={0.5} alignItems="flex-start">
          <TextField size="small" fullWidth multiline={multiline} minRows={multiline ? 2 : 1} value={s} onChange={(e) => onChange(value.map((x, j) => (j === i ? e.target.value : x)))} />
          <IconButton size="small" disabled={i === 0} onClick={() => onChange(move(value, i, i - 1))} aria-label="Move up"><ArrowUpwardRoundedIcon fontSize="small" /></IconButton>
          <IconButton size="small" onClick={() => onChange(value.filter((_, j) => j !== i))} aria-label="Remove"><DeleteOutlineRoundedIcon fontSize="small" /></IconButton>
        </Stack>
      ))}
    </Stack>
    <Button size="small" startIcon={<AddRoundedIcon />} onClick={() => onChange([...value, ''])} sx={{ mt: 1, minHeight: 32 }}>Add</Button>
  </Box>
);

const ListField = ({ field, value = [], onChange }) => {
  const [open, setOpen] = useState(null);
  const label = (item, i) => field.itemLabel?.(item, i) || `Item ${i + 1}`;
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 700 }}>{field.label} <Typography component="span" variant="caption" color="text.secondary">({value.length})</Typography></Typography>
      </Stack>
      <Stack gap={1}>
        {value.map((item, i) => (
          <Box key={i} sx={{ borderRadius: '14px', border: 1, borderColor: open === i ? 'primary.main' : 'divider', bgcolor: 'background.paper', overflow: 'hidden' }}>
            <Stack direction="row" alignItems="center" sx={{ pl: 1.5, pr: 0.5 }}>
              <ButtonBase onClick={() => setOpen(open === i ? null : i)} sx={{ flex: 1, justifyContent: 'flex-start', py: 1.2, gap: 1, textAlign: 'left', minWidth: 0 }}>
                <ExpandMoreRoundedIcon fontSize="small" sx={{ transform: open === i ? 'rotate(180deg)' : 'none', transition: '.2s' }} />
                {(item?.img || item?.image) && <Thumb value={item.img || item.image} sx={{ width: 28, height: 28, borderRadius: '6px', objectFit: 'cover' }} />}
                <Typography noWrap sx={{ fontSize: 14, fontWeight: 600 }}>{label(item, i) || `Item ${i + 1}`}</Typography>
                {item?.visible === false && <Typography variant="caption" color="text.secondary">(hidden)</Typography>}
              </ButtonBase>
              <Tooltip title="Move up"><span><IconButton size="small" disabled={i === 0} onClick={() => onChange(move(value, i, i - 1))}><ArrowUpwardRoundedIcon fontSize="small" /></IconButton></span></Tooltip>
              <Tooltip title="Move down"><span><IconButton size="small" disabled={i === value.length - 1} onClick={() => onChange(move(value, i, i + 1))}><ArrowDownwardRoundedIcon fontSize="small" /></IconButton></span></Tooltip>
              {!field.fixed && (
                <>
                  <Tooltip title="Duplicate"><IconButton size="small" onClick={() => onChange([...value.slice(0, i + 1), JSON.parse(JSON.stringify(item)), ...value.slice(i + 1)])}><ContentCopyRoundedIcon fontSize="small" /></IconButton></Tooltip>
                  <Tooltip title="Delete"><IconButton size="small" onClick={() => { if (window.confirm(`Delete "${label(item, i)}"?`)) onChange(value.filter((_, j) => j !== i)); }}><DeleteOutlineRoundedIcon fontSize="small" color="error" /></IconButton></Tooltip>
                </>
              )}
            </Stack>
            <Collapse in={open === i} unmountOnExit>
              <Box sx={{ p: 1.5, pt: 0.5, borderTop: 1, borderColor: 'divider' }}>
                <Fields fields={field.fields} value={item} onChange={(v) => onChange(value.map((x, j) => (j === i ? v : x)))} />
              </Box>
            </Collapse>
          </Box>
        ))}
      </Stack>
      {!field.fixed && (
        <Button size="small" variant="outlined" startIcon={<AddRoundedIcon />} onClick={() => { onChange([...value, blankFor(field.fields)]); setOpen(value.length); }} sx={{ mt: 1, minHeight: 34 }}>
          Add {field.label.toLowerCase().replace(/s$/, '')}
        </Button>
      )}
    </Box>
  );
};


const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};
const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const emptyPost = () => ({ date: todayISO(), title: '', link: '', note: '' });

// Daily posts: a quick "add" form on top, then posts grouped by month (newest first).
const isLink = (l) => /^https?:\/\//.test(l) || l.startsWith(FILE_PATH_PREFIX);

const FeedField = ({ value = [], onChange }) => {
  const { publish } = useContext(AutoSaveContext);
  const [draft, setDraft] = useState(emptyPost);
  const up = useUploader(uploadFile, (url, file) => setDraft((d) => ({ ...d, link: url, title: d.title || file.name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ') })));
  const [editing, setEditing] = useState(null);
  const [err, setErr] = useState('');
  const sorted = value.map((p, i) => ({ ...p, _i: i })).sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const months = [...new Set(sorted.map((p) => (p.date || '').slice(0, 7)))];

  const add = () => {
    if (!draft.date) { setErr('Pick a date'); return; }
    if (!draft.title.trim() && !draft.link.trim()) { setErr('Add a title or a link'); return; }
    if (draft.link && !isLink(draft.link.trim())) { setErr('Upload a PDF, or paste a link starting with https://'); return; }
    if (up.busy) { setErr('Wait for the upload to finish'); return; }
    setErr('');
    onChange([{ ...draft, title: draft.title.trim(), link: draft.link.trim() }, ...value]);
    publish();
    setDraft({ ...emptyPost(), date: draft.date });
  };
  const update = (i, patch) => onChange(value.map((p, j) => (j === i ? { ...p, ...patch } : p)));
  const remove = (i) => { if (window.confirm('Delete this post?')) onChange(value.filter((_, j) => j !== i)); };

  return (
    <Box>
      <Box sx={{ p: 2, borderRadius: '16px', border: 1, borderColor: 'primary.main', bgcolor: 'rgba(224,41,74,.04)' }}>
        <Typography variant="body2" sx={{ fontWeight: 800, mb: 1.5 }}>➕ New post</Typography>
        <Box sx={{ display: 'grid', gap: 1.2, gridTemplateColumns: { xs: '1fr', sm: '160px 1fr' } }}>
          <TextField size="small" type="date" label="Date" InputLabelProps={{ shrink: true }} value={draft.date} onChange={(e) => setDraft({ ...draft, date: e.target.value })} />
          <TextField size="small" label="Title (e.g. The Hindu analysis – 9 Nov)" value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
          <Box sx={{ gridColumn: { sm: '1 / -1' } }}>
            {draft.link.startsWith(FILE_PATH_PREFIX) ? (
              <Stack direction="row" alignItems="center" gap={1} sx={{ minHeight: 40, px: 1.5, borderRadius: '10px', border: 1, borderColor: 'success.main' }}>
                <PictureAsPdfRoundedIcon fontSize="small" color="primary" />
                <Typography variant="body2" sx={{ flex: 1, fontWeight: 700, color: 'success.main' }}>PDF uploaded ✓</Typography>
                <Button size="small" color="error" onClick={() => setDraft({ ...draft, link: '' })}>Remove</Button>
              </Stack>
            ) : (
              <TextField size="small" fullWidth label="PDF / Drive link (or upload below)" placeholder="https://drive.google.com/…" value={draft.link} onChange={(e) => setDraft({ ...draft, link: e.target.value })} />
            )}
            {up.err && <Typography variant="caption" color="error">{up.err}</Typography>}
            <UploadButton accept="application/pdf,image/*" label={`Upload notes PDF — click or drop (max ${MAX_FILE_MB} MB)`} onFile={up.run} busy={up.busy} progress={up.progress} />
          </Box>
          <TextField size="small" label="Short note (optional)" value={draft.note} onChange={(e) => setDraft({ ...draft, note: e.target.value })} sx={{ gridColumn: { sm: '1 / -1' } }} />
        </Box>
        {err && <Typography variant="caption" color="error">{err}</Typography>}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 1.5 }}>
          <Typography variant="caption" color="text.secondary">Publishes instantly. Future dates go live automatically on that day.</Typography>
          <Button variant="contained" size="small" onClick={add} disabled={up.busy} startIcon={<AddRoundedIcon />}>Publish post</Button>
        </Stack>
      </Box>

      <Typography variant="body2" sx={{ fontWeight: 700, mt: 2.5, mb: 1 }}>All posts <Typography component="span" variant="caption" color="text.secondary">({value.length})</Typography></Typography>
      {months.map((ym) => {
        const [y, m] = ym.split('-').map(Number);
        return (
          <Box key={ym} sx={{ mb: 2 }}>
            <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '.06em' }}>{MONTHS_LONG[m - 1] || 'Undated'} {y || ''}</Typography>
            <Stack gap={0.8} sx={{ mt: 0.8 }}>
              {sorted.filter((p) => (p.date || '').startsWith(ym)).map((p) => (
                <Box key={p._i} sx={{ borderRadius: '12px', border: 1, borderColor: editing === p._i ? 'primary.main' : 'divider', bgcolor: 'background.paper', opacity: p.hidden ? 0.55 : 1 }}>
                  <Stack direction="row" alignItems="center" gap={1} sx={{ pl: 1.5, pr: 0.5, py: 0.6 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: 13, width: 82, flexShrink: 0 }}>{p.date}</Typography>
                    <Typography noWrap sx={{ flex: 1, fontSize: 14 }}>{p.hidden ? '⏸ ' : ''}{p.title || p.link}</Typography>
                    {p.date > todayISO() && <Typography variant="caption" color="secondary.main" sx={{ fontWeight: 700 }}>Scheduled</Typography>}
                    {!p.link && <Typography variant="caption" color="error">No link</Typography>}
                    <Button size="small" onClick={() => setEditing(editing === p._i ? null : p._i)}>{editing === p._i ? 'Done' : 'Edit'}</Button>
                    <IconButton size="small" onClick={() => remove(p._i)} aria-label="Delete"><DeleteOutlineRoundedIcon fontSize="small" color="error" /></IconButton>
                  </Stack>
                  <Collapse in={editing === p._i} unmountOnExit>
                    <Box sx={{ display: 'grid', gap: 1.2, p: 1.5, pt: 0.5, gridTemplateColumns: { xs: '1fr', sm: '160px 1fr' } }}>
                      <TextField size="small" type="date" label="Date" InputLabelProps={{ shrink: true }} value={p.date || ''} onChange={(e) => update(p._i, { date: e.target.value })} />
                      <TextField size="small" label="Title" value={p.title || ''} onChange={(e) => update(p._i, { title: e.target.value })} />
                      <Box sx={{ gridColumn: { sm: '1 / -1' } }}><FileLinkField label="PDF / Drive link" value={p.link || ''} onChange={(v) => update(p._i, { link: v })} /></Box>
                      <TextField size="small" label="Short note" value={p.note || ''} onChange={(e) => update(p._i, { note: e.target.value })} sx={{ gridColumn: { sm: '1 / -1' } }} />
                      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ gridColumn: { sm: '1 / -1' } }}>
                        <Typography variant="body2">Hide from website</Typography>
                        <Switch checked={Boolean(p.hidden)} onChange={(e) => update(p._i, { hidden: e.target.checked })} />
                      </Stack>
                    </Box>
                  </Collapse>
                </Box>
              ))}
            </Stack>
          </Box>
        );
      })}
    </Box>
  );
};

export const Field = ({ field, value, onChange }) => {
  const common = { size: 'small', fullWidth: true, label: field.label, helperText: field.help };
  switch (field.type) {
    case 'heading':
      return <Typography sx={{ fontWeight: 800, fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase', color: 'primary.main', pt: 2, borderTop: 1, borderColor: 'divider' }}>{field.label}</Typography>;
    case 'textarea':
      return <TextField {...common} multiline minRows={field.key === 'body' ? 12 : 3} value={value || ''} onChange={(e) => onChange(e.target.value)} />;
    case 'number':
      return <TextField {...common} type="number" value={value ?? ''} onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))} />;
    case 'url':
      return <TextField {...common} type="url" value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder="https://…" />;
    case 'datetime':
      return <TextField {...common} type="datetime-local" InputLabelProps={{ shrink: true }} value={toLocalInput(value)} onChange={(e) => onChange(e.target.value ? new Date(e.target.value).toISOString() : '')} />;
    case 'bool':
      return <Stack direction="row" alignItems="center" justifyContent="space-between"><Typography variant="body2">{field.label}</Typography><Switch checked={Boolean(value)} onChange={(e) => onChange(e.target.checked)} /></Stack>;
    case 'select':
      return <TextField {...common} select value={value || ''} onChange={(e) => onChange(e.target.value)}>{field.options.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}</TextField>;
    case 'image':
      return <ImageField label={field.label} value={value} onChange={onChange} />;
    case 'file':
      return <FileLinkField label={field.label} value={value} onChange={onChange} help={field.help} />;
    case 'i18n':
    case 'i18nArea': {
      const v = value && typeof value === 'object' ? value : { en: value || '', hi: '' };
      const area = field.type === 'i18nArea';
      return (
        <TextField size="small" fullWidth multiline={area} minRows={area ? 2 : 1} label={field.label} value={v.en || ''} onChange={(e) => onChange({ ...v, en: e.target.value })} />
      );
    }
    case 'strings':
      return <StringList label={field.label} value={value} onChange={onChange} multiline={field.multiline} />;
    case 'list':
      return <ListField field={field} value={value} onChange={onChange} />;
    case 'feed':
      return <FeedField value={value} onChange={onChange} />;
    case 'object':
      return (
        <Box sx={{ p: 1.5, borderRadius: '14px', border: 1, borderColor: 'divider' }}>
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1.5 }}>{field.label}</Typography>
          <Fields fields={field.fields} value={value || {}} onChange={onChange} />
        </Box>
      );
    default:
      return <TextField {...common} value={value || ''} onChange={(e) => onChange(e.target.value)} />;
  }
};

export const Fields = ({ fields, value = {}, onChange }) => (
  <Stack gap={2} sx={{ pt: 1 }}>
    {fields.map((f) => (
      <Field key={f.key} field={f} value={value[f.key]} onChange={(v) => onChange({ ...value, [f.key]: v })} />
    ))}
  </Stack>
);
