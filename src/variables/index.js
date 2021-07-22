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
    arrColors: [
      'rgba(252, 239, 36, 1)',
      'rgba(252, 239, 36, 1)',
      'rgba(252, 239, 36, 1)',
      'rgba(252, 239, 36, 1)',
      'rgba(252, 239, 36, 1)',
      'rgba(252, 239, 36, 1)',
      'rgba(252, 239, 36, 1)',
      'rgba(199, 74, 180, 1)',
      'rgba(210, 224, 67, 1)',
      'rgba(109, 36, 40, 1)',
      'rgba(144, 182, 231, 1)',
      'rgba(182, 140, 136, 1)',
    ],
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
      color: 'rgba(255, 99, 132, 1)',
    },
    {
      value: 'Food',
      color: 'rgba(54, 162, 235, 1)',
    },
    {
      value: 'Auto',
      color: 'rgba(255, 206, 86, 1)',
    },
    {
      value: 'Development',
      color: 'rgba(75, 192, 192, 1)',
    },
    {
      value: 'Children',
      color: 'rgba(153, 102, 255, 1)', //
    },
    {
      value: 'House',
      color: 'rgba(255, 159, 64, 1)',
    },
    {
      value: 'Education',
      color: 'rgba(252, 110, 206, 1)',
    },
    {
      value: 'The other',
      color: 'rgba(116, 175, 195, 1)',
    },
  ],
});
