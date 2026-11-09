import React from 'react';
import { Box, Container } from '@mui/material';
import PageHero from '../../components/ui/PageHero';
import FaqList from '../../components/ui/FaqList';
import BatchPromo from '../../components/ui/BatchPromo';
import { useContent } from '../../context/ContentContext';
import { useApp } from '../../context/AppContext';

const FAQs = () => {
  const { items: faqs } = useContent('faqs');
  const { email } = useContent('site');
  const { t } = useApp();
  return (
    <Box sx={{ pb: 4 }}>
      <PageHero title={t('faqTitle')} accent={t('faqAccent')} eyebrow={t('faqs')} subtitle={`${t('faqSub')} ${email}`} />
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        <FaqList items={faqs} />
      </Container>
      <BatchPromo />
    </Box>
  );
};

export default FAQs;
