import React, { useState } from 'react';
import {
  Box, Button, ButtonBase, Collapse, IconButton, MenuItem, Stack, Switch, TextField, Tooltip, Typography,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../lib/firebase';

const blankFor = (fields) => Object.fromEntries(fields.map((f) => [f.key, f.type === 'list' || f.type === 'strings' ? [] : f.type === 'bool' ? false : f.type === 'i18n' || f.type === 'i18nArea' ? { en: '', hi: '' } : f.type === 'object' ? blankFor(f.fields) : f.type === 'number' ? 0 : '']));

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
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const upload = async (file) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { setErr('Image must be under 5 MB'); return; }
    setBusy(true); setErr('');
    try {
      const r = ref(storage, `uploads/${Date.now()}-${file.name.replace(/[^\w.-]/g, '_')}`);
      await uploadBytes(r, file, { contentType: file.type });
      onChange(await getDownloadURL(r));
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <Stack direction="row" gap={1.5} alignItems="flex-start">
      <Box sx={{ width: 72, height: 72, flexShrink: 0, borderRadius: '12px', bgcolor: 'action.hover', overflow: 'hidden', border: 1, borderColor: 'divider' }}>
        {value && <Box component="img" src={value} alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
      </Box>
      <Box sx={{ flex: 1 }}>
        <TextField size="small" fullWidth label={label} value={value || ''} onChange={(e) => onChange(e.target.value)} helperText={err || 'Paste an image URL / site path, or upload'} error={Boolean(err)} />
        {storage && (
          <Button component="label" size="small" startIcon={<CloudUploadRoundedIcon />} disabled={busy} sx={{ mt: 0.5, minHeight: 32 }}>
            {busy ? 'Uploading…' : 'Upload image'}
            <input hidden type="file" accept="image/*" onChange={(e) => upload(e.target.files?.[0])} />
          </Button>
        )}
      </Box>
    </Stack>
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
                {item?.img && <Box component="img" src={item.img} alt="" sx={{ width: 28, height: 28, borderRadius: '6px', objectFit: 'cover' }} />}
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

export const Field = ({ field, value, onChange }) => {
  const common = { size: 'small', fullWidth: true, label: field.label, helperText: field.help };
  switch (field.type) {
    case 'textarea':
      return <TextField {...common} multiline minRows={3} value={value || ''} onChange={(e) => onChange(e.target.value)} />;
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
    case 'i18n':
    case 'i18nArea': {
      const v = value && typeof value === 'object' ? value : { en: value || '', hi: '' };
      const area = field.type === 'i18nArea';
      return (
        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
          <TextField size="small" fullWidth multiline={area} minRows={area ? 2 : 1} label={`${field.label} · English`} value={v.en || ''} onChange={(e) => onChange({ ...v, en: e.target.value })} />
          <TextField size="small" fullWidth multiline={area} minRows={area ? 2 : 1} label={`${field.label} · हिंदी`} value={v.hi || ''} onChange={(e) => onChange({ ...v, hi: e.target.value })} />
        </Box>
      );
    }
    case 'strings':
      return <StringList label={field.label} value={value} onChange={onChange} multiline={field.multiline} />;
    case 'list':
      return <ListField field={field} value={value} onChange={onChange} />;
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
