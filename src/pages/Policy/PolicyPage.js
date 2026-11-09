import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import PageHero from '../../components/ui/PageHero';
import { useContent } from '../../context/ContentContext';

// Renders a policy from Admin → Policies. In the text, "## " starts a heading and
// a blank line starts a new paragraph.
const PolicyPage = ({ id }) => {
  const { title = '', body = '' } = useContent(`policy_${id}`);
  const words = title.split(' ');
  const blocks = body.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);

  return (
    <Box sx={{ pb: 6 }}>
      <PageHero title={words.slice(0, -1).join(' ')} accent={words.slice(-1)[0]} eyebrow={title} />
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box sx={{ p: { xs: 2.5, md: 4 }, borderRadius: '24px', bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
          {blocks.map((b, i) => (b.startsWith('## ')
            ? <Typography key={i} variant="h3" sx={{ mt: i ? 3.5 : 0, mb: 1 }}>{b.slice(3)}</Typography>
            : <Typography key={i} color="text.secondary" sx={{ mb: 1.8, lineHeight: 1.8, whiteSpace: 'pre-line' }}>{b}</Typography>))}
        </Box>
      </Container>
    </Box>
  );
};

export default PolicyPage;
