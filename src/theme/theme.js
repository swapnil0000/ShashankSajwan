import { createTheme } from '@mui/material/styles';
import typography from './typography';
const theme = createTheme({
  palette: {
    primary: {
      main: '#212529',
    },
  },
  typography
});


export default theme