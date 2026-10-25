import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Box, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import { PageTransition } from './components/ui/Motion';
import PageHero from './components/ui/PageHero';
import { useApp } from './context/AppContext';
import { buildTheme } from './theme/theme';
import Home from './pages/Home';
import StudyHub from './pages/StudyHub/StudyHub';
import Contact from './pages/Contact';
import About from './pages/about/About';
import TermAndCondition from './pages/Policy/TermAndCondition';
import Refund from './pages/Policy/Refund';
import Private from './pages/Policy/Private';
import Material from './pages/Materials/Material';
import Videos from './pages/Videos/Videos';
import Syllabus from './pages/syllabus/Syllabus';
import Pyqs from './pages/Pyqs/Pyqs';
import General from './pages/GeneralStudies/General';
import NewsNotes from './pages/Newspaper/NewsNotes';
import CourseSection from './pages/CourseSection/CourseSection';
import FAQs from './pages/FAQs/FAQs';
import Optional from './pages/optional/Optional';
import Payment from './pages/Payment';
import BookPage from './pages/books/BookPage';
import Optional2025 from './pages/Newspaper/NewsNotes2025';

// Pages not yet redesigned keep their light styling, even in dark mode.
const lightTheme = buildTheme('light');
const Legacy = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <Box sx={{ bgcolor: '#fff', color: '#0B1640', pt: { xs: '1px', md: '1px' } }}>{children}</Box>
  </ThemeProvider>
);

const routes = [
  ['/about', About], ['/ncert', Material], ['/contact', Contact], ['/videos', Videos],
  ['/faqs', FAQs], ['/syllabus', Syllabus], ['/pyqs', Pyqs], ['/general', General],
  ['/optional', Optional], ['/newsnotes', NewsNotes], ['/newsnotes25', Optional2025], ['/books', BookPage],
];
const legacyRoutes = [['/courses', CourseSection], ['/payment', Payment]];
const policyRoutes = [
  ['/terms', TermAndCondition, 'Terms &', 'Conditions'],
  ['/refund', Refund, 'Refund', 'Policy'],
  ['/private', Private, 'Privacy', 'Policy'],
];

// Policy pages keep their text; this strips their old top margin and restyles the typography.
const Policy = ({ title, accent, children }) => (
  <Box sx={{ pb: 4 }}>
    <PageHero title={title} accent={accent} />
    <Box
      sx={{
        '& .MuiContainer-root': { mt: '0 !important', maxWidth: 860 },
        '& .MuiContainer-root > .MuiBox-root > .MuiTypography-h2:first-of-type': { display: 'none' },
        '& .MuiTypography-root': { fontFamily: 'inherit', fontWeight: 400, color: 'text.secondary', fontSize: { xs: 15, md: 16 }, lineHeight: 1.7 },
        '& .MuiTypography-h2, & .MuiTypography-h4, & .MuiTypography-h3': { color: 'text.primary', fontWeight: 800, fontSize: { xs: 20, md: 24 }, mt: 3 },
      }}
    >
      {children}
    </Box>
  </Box>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  const { mode } = useApp();

  useEffect(() => { document.documentElement.dataset.mode = mode; }, [mode]);
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/study" element={<PageTransition><StudyHub /></PageTransition>} />
        {routes.map(([path, Page]) => (
          <Route key={path} path={path} element={<PageTransition><Page /></PageTransition>} />
        ))}
        {policyRoutes.map(([path, Page, title, accent]) => (
          <Route key={path} path={path} element={<PageTransition><Policy title={title} accent={accent}><Page /></Policy></PageTransition>} />
        ))}
        {legacyRoutes.map(([path, Page]) => (
          <Route key={path} path={path} element={<PageTransition><Legacy><Page /></Legacy></PageTransition>} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
      <Footer />
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
