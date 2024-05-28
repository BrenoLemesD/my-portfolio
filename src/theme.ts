import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: "Helvetica Neue"
  }
});

theme = responsiveFontSizes(theme);

export default theme;