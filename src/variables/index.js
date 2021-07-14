import { createTheme } from '@material-ui/core/styles';

export default createTheme({
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
      main: '#212121',
      secondary: '#8609F9',
      dark: '#030124',
      light: '#d2bde8',
    },
    secondary: {
      main: '#fffefe',
    },
    background: {
      primary: '#311FA0',
      gradient:
        'linear-gradient(140deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.01))',
      graidiertTwo:
        'linear-gradient(90deg, rgb(39, 39, 39, 0.5), rgba(255, 254, 254, 0.5))',
    },
  },
});
