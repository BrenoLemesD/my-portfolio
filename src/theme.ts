import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#003153',
        },
        secondary: {
            main: '#00CED1',
        },
        background: {
            default: '#0D1117',
            paper: '#161B22',
        },
        text: {
            primary: '#E0E0E0',
            secondary: '#B0B0B0',
        }
    },
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
        ].join(','),
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#202224',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: '#E0E0E0',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '16px',
                    overflow: 'hidden',
                    backgroundColor: '#161B22', // Fundo do card
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: '#FFFFFF',
                },
            },
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    borderRadius: '16px 16px 0 0',
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
