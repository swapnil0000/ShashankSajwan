import React from 'react';
import { Box, Breadcrumbs, Container, Link as MuiLink, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Reveal } from './Motion';

// Shared top banner for inner pages: breadcrumb, title with gradient accent, subtitle.
const PageHero = ({ eyebrow, title, accent, subtitle, children }) => (
  <Box component="section" className="grid-bg" sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 10, md: 14 }, pb: { xs: 3, md: 5 } }}>
    <div className="orb orb-a" style={{ opacity: 0.3 }} />
    <Container maxWidth="lg" sx={{ position: 'relative', px: { xs: 2, sm: 3 } }}>
      <Reveal>
        <Breadcrumbs sx={{ fontSize: 13, mb: 1.5 }}>
          <MuiLink component={Link} to="/" underline="hover" color="text.secondary">Home</MuiLink>
          <Typography sx={{ fontSize: 13, fontWeight: 600 }} color="text.primary">{eyebrow || `${title} ${accent || ''}`.trim()}</Typography>
        </Breadcrumbs>
        <Typography variant="h1">
          {title} {accent && <Box component="span" className="text-gradient">{accent}</Box>}
        </Typography>
        {subtitle && <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 680, fontSize: { xs: 15, md: 18 } }}>{subtitle}</Typography>}
        {children}
      </Reveal>
    </Container>
  </Box>
);

export default PageHero;
