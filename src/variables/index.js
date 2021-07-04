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
            dark: '#030124'
        },
        background: {
            primary: '#311FA0'
        },
    },
});
