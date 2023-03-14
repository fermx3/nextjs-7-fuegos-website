import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#dd9900',
      contrastText: '#1c1c1c',
    },
    secondary: {
      main: '#fa4214',
      contrastText: '#1c1c1c',
    },
    background: {
      paper: 'rgba(72,72,72,0.6)',
      default: '#1c1c1c',
    },
    text: {
      primary: '#ededed',
      secondary: 'rgba(237,237,237,0.6)',
      hint: 'rgba(237,237,237,0.8)',
      disabled: 'rgba(237,237,237,0.37)',
    },
    divider: '#9a6b00',
    error: {
      main: '#ff0101',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: {
      marginBottom: '2rem',
    },
    h2: {
      marginBottom: '2rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          overflow-x: hidden;
        }
      `,
    },
  },
});

export default theme;
