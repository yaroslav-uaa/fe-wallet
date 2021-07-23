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
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  categories: [
    {
      value: 'Basic',
      color: 'rgb(153, 0, 33)',
    },
    {
      value: 'Food',
      color: 'rgb(255, 255, 0)',
    },
    {
      value: 'Auto',
      color: 'rgb(204, 255, 51)',
    },
    {
      value: 'Development',
      color: 'rgb(26, 26, 255)',
    },
    {
      value: 'Children',
      color: 'rgb(140, 26, 255)', //
    },
    {
      value: 'House',
      color: 'rgb(77, 46, 0)',
    },
    {
      value: 'Education',
      color: 'rgb(255, 0, 0)',
    },
    {
      value: 'The other',
      color: 'rgb(116, 175, 195)',
    },
     {
      value: 'Regular income',
      color: 'rgb(0, 204, 68)',
    },
      {
      value: 'Non-regular income',
      color: 'rgb(0, 204, 68)',
    },
  ],
});
