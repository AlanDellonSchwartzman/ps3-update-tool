import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4e34c9',
    },
    secondary: {
      main: '#6634c9',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
