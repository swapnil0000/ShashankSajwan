import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, Container, Stack, Typography } from '@mui/material';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { loadFile } from '../../lib/media';
import { db } from '../../lib/firebase';

// Opens a PDF / image uploaded from the admin panel (stored in Firestore).
const FileViewer = () => {
  const { id } = useParams();
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    let url;
    let alive = true;
    if (!db) { setState({ error: 'Files are not available right now.' }); return undefined; }
    setState({ loading: true });
    loadFile(id)
      .then(({ meta, blob }) => {
        if (!alive) return;
        url = URL.createObjectURL(blob);
        setState({ url, meta, type: blob.type });
        document.title = meta.name || 'Notes';
      })
      .catch((e) => alive && setState({ error: e.message || 'Could not open this file.' }));
    return () => { alive = false; if (url) URL.revokeObjectURL(url); };
  }, [id]);

  const { loading, error, url, meta, type } = state;
  const isPdf = type === 'application/pdf';
  const isImage = type?.startsWith('image/');

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: '84px', md: '104px' }, pb: 6, px: { xs: 2, sm: 3 } }}>
      {loading && (
        <Stack alignItems="center" gap={2} sx={{ py: 10 }}>
          <CircularProgress />
          <Typography color="text.secondary">Opening notes…</Typography>
        </Stack>
      )}
      {error && <Typography color="error" sx={{ py: 10, textAlign: 'center' }}>{error}</Typography>}
      {url && (
        <>
          <Stack direction={{ xs: 'column', sm: 'row' }} gap={1} alignItems={{ sm: 'center' }} sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ flex: 1, wordBreak: 'break-word' }}>{(meta.name || 'Notes').replace(/_/g, ' ')}</Typography>
            <Stack direction="row" gap={1}>
              <Button variant="outlined" href={url} target="_blank" rel="noopener" startIcon={<OpenInNewRoundedIcon />}>Open</Button>
              <Button variant="contained" href={url} download={meta.name || 'notes.pdf'} startIcon={<DownloadRoundedIcon />}>Download</Button>
            </Stack>
          </Stack>
          {isPdf && (
            <Box component="iframe" src={url} title={meta.name || 'Notes'} sx={{ width: '100%', height: { xs: '75vh', md: '82vh' }, border: 1, borderColor: 'divider', borderRadius: '16px', bgcolor: '#fff' }} />
          )}
          {isImage && <Box component="img" src={url} alt={meta.name || ''} sx={{ width: '100%', borderRadius: '16px', display: 'block' }} />}
          {!isPdf && !isImage && <Typography color="text.secondary">Preview not available — use Download.</Typography>}
        </>
      )}
    </Container>
  );
};

export default FileViewer;
