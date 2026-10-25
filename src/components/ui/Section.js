import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Reveal } from './Motion';

// Section heading in the "Black text <Accent>" style.
const Section = ({ title, accent, subtitle, action, children, sx }) => (
  <Box component="section" sx={{ py: { xs: 4, md: 7 }, ...sx }}>
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      {(title || accent) && (
        <Reveal>
          <Stack direction="row" alignItems="flex-end" justifyContent="space-between" gap={2} sx={{ mb: { xs: 2.5, md: 4 } }}>
            <Box>
              <Typography variant="h2">
                {title}{' '}
                {accent && <Box component="span" className="text-gradient">{accent}</Box>}
              </Typography>
              {subtitle && <Typography color="text.secondary" sx={{ mt: 1 }}>{subtitle}</Typography>}
            </Box>
            {action}
          </Stack>
        </Reveal>
      )}
      {children}
    </Container>
  </Box>
);

export default Section;
