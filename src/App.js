import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Box, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import { PageTransition } from './components/ui/Motion';
import { useApp } from './context/AppContext';
import { buildTheme } from './theme/theme';
import Home from './pages/Home';
import StudyHub from './pages/StudyHub/StudyHub';
import Contact from './pages/Contact';
import About from './pages/about/About';
import Material from './pages/Materials/Material';
import Videos from './pages/Videos/Videos';
import Syllabus from './pages/syllabus/Syllabus';
import Pyqs from './pages/Pyqs/Pyqs';
import General from './pages/GeneralStudies/General';
import NewsNotes from './pages/Newspaper/NewsNotes';
import FAQs from './pages/FAQs/FAQs';
import Optional from './pages/optional/Optional';
import Payment from './pages/Payment';
import BookPage from './pages/books/BookPage';
import Optional2025 from './pages/Newspaper/NewsNotes2025';
import AuthPage from './pages/auth/AuthPage';
import Account from './pages/auth/Account';
import Announcement from './components/Announcement';
import Batch from './pages/Batch/Batch';
import PolicyPage from './pages/Policy/PolicyPage';
import PopupManager from './components/PopupManager';
import Resources, { CurrentAffairs, NcertMcqs, Newspaper, Newspaper2026, PyqFeed } from './pages/Resources/Resources';

const AdminApp = lazy(() => import('./admin/AdminApp'));

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
  ['/courses', Batch], ['/batch', Batch],
  ['/resources', Resources], ['/resources/current-affairs', CurrentAffairs], ['/resources/ncert-mcqs', NcertMcqs],
  ['/resources/pyqs', PyqFeed], ['/newspaper', Newspaper], ['/newspaper/2026', Newspaper2026],
];
const legacyRoutes = [['/payment', Payment]];
const policyRoutes = [['/terms', 'terms'], ['/refund', 'refund'], ['/private', 'privacy']];

const AnimatedRoutes = () => {
  const location = useLocation();
  const { mode } = useApp();

  useEffect(() => { document.documentElement.dataset.mode = mode; }, [mode]);
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  // The admin panel has its own nested routes and layout.
  if (location.pathname.startsWith('/admin')) {
    return (
      <Suspense fallback={null}>
        <Routes>
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/study" element={<PageTransition><StudyHub /></PageTransition>} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/signup" element={<AuthPage mode="signup" />} />
        <Route path="/forgot" element={<AuthPage mode="forgot" />} />
        <Route path="/account" element={<PageTransition><Account /></PageTransition>} />
        {routes.map(([path, Page]) => (
          <Route key={path} path={path} element={<PageTransition><Page /></PageTransition>} />
        ))}
        {policyRoutes.map(([path, id]) => (
          <Route key={path} path={path} element={<PageTransition><PolicyPage id={id} /></PageTransition>} />
        ))}
        {legacyRoutes.map(([path, Page]) => (
          <Route key={path} path={path} element={<PageTransition><Legacy><Page /></Legacy></PageTransition>} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

const Chrome = () => {
  const { pathname } = useLocation();
  const inAdmin = pathname.startsWith('/admin');
  return (
    <>
      <Header />
      <AnimatedRoutes />
      {!inAdmin && <Footer />}
      {!inAdmin && <BottomNav />}
      {!inAdmin && <Announcement />}
      {!inAdmin && <PopupManager />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Chrome />
    </BrowserRouter>
  );
}

export default App;
