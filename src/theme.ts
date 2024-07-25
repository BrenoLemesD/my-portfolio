import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#191919',
        },
        secondary: {
            main: '#4f8e3e',
        },
    },
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;