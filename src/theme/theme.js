import { createTheme } from '@mui/material/styles';

// Three-colour system: Navy ink (trust), Saffron (energy), Crimson (action)
export const tokens = {
  navy: '#0B1640',
  navySoft: '#1B2A6B',
  saffron: '#FF8A1F',
  crimson: '#E0294A',
  gradient: 'linear-gradient(100deg, #FF8A1F 0%, #F2543A 50%, #E0294A 100%)',
  gradientNavy: 'linear-gradient(135deg, #0B1640 0%, #1B2A6B 60%, #3A2E7A 100%)',
  radius: 20,
};

export const buildTheme = (mode = 'light') => {
  const dark = mode === 'dark';
  return createTheme({
    palette: {
      mode,
      primary: { main: tokens.crimson },
      secondary: { main: tokens.saffron },
      info: { main: tokens.navySoft },
      background: {
        default: dark ? '#070B1F' : '#F7F8FC',
        paper: dark ? '#10173A' : '#FFFFFF',
      },
      text: {
        primary: dark ? '#EEF1FF' : tokens.navy,
        secondary: dark ? '#A9B1D6' : '#5A6385',
      },
      divider: dark ? 'rgba(255,255,255,0.08)' : 'rgba(11,22,64,0.08)',
    },
    shape: { borderRadius: 4 },
    typography: {
      fontFamily: '"Plus Jakarta Sans", "Noto Sans Devanagari", system-ui, sans-serif',
      h1: { fontWeight: 800, letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 6vw, 3.6rem)', lineHeight: 1.1 },
      h2: { fontWeight: 800, letterSpacing: '-0.02em', fontSize: 'clamp(1.5rem, 4.5vw, 2.6rem)', lineHeight: 1.15 },
      h3: { fontWeight: 700, fontSize: 'clamp(1.15rem, 3vw, 1.5rem)' },
      h6: { fontWeight: 700, fontSize: '1rem' },
      body1: { fontSize: '1rem', lineHeight: 1.6 },
      body2: { fontSize: '0.9rem', lineHeight: 1.55 },
      button: { textTransform: 'none', fontWeight: 700 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 999, paddingInline: 22, minHeight: 44 },
          containedPrimary: {
            background: tokens.gradient,
            boxShadow: '0 8px 24px -8px rgba(224,41,74,0.55)',
          },
        },
      },
      MuiChip: { styleOverrides: { root: { borderRadius: 999, fontWeight: 600 } } },
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    },
  });
};

export default buildTheme('light');
