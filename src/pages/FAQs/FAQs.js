import React from 'react';
import { Box, Container } from '@mui/material';
import PageHero from '../../components/ui/PageHero';
import FaqList from '../../components/ui/FaqList';
import { useContent } from '../../context/ContentContext';

const FAQs = () => {
  const { items: faqs } = useContent('faqs');
  const { email } = useContent('site');
  return (
    <Box sx={{ pb: 4 }}>
      <PageHero title="Frequently asked" accent="questions" eyebrow="FAQs" subtitle={`Quick answers to what aspirants ask us most. Still stuck? Email ${email}.`} />
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        <FaqList items={faqs} />
      </Container>
    </Box>
  );
};

export default FAQs;
