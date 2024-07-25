import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#191919',
        },
        secondary: {
            main: '#00CED1',
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
