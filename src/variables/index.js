import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  // overrides: {

  // },
  breakpoints: {
    values: {
      xs: false,
      sm: 320,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#D2BDE8',
      secondary: '#8609F9',
      dark: '#030124',
      light: '#d2bde8',
    },
    secondary: {
      main: '#6749b3',
    },
    background: {
      primary: '#311FA0',
      gradient:
        'linear-gradient(140deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.01))',
      graidiertTwo:
        'linear-gradient(90deg, rgb(19%, 12%, 63%, 0.8), rgba(255, 255, 255, 0.8))',
    },
  },
});
