import { createTheme } from '@mui/material/styles';
import {amber, grey, red} from '@mui/material/colors';

const rawTheme = createTheme({
    palette: {
        primary: {
            light: '#E3F2FD',
            main: '#2196F3',
            dark: '#1E88E5',
        },
        secondary: {
            light: '#EDE7F6',
            main: '#673AB7',
            dark: '#5E35B1',
        },
        warning: {
            main: amber[100],
            dark: amber[500],
        },
        error: {
            light: red[50],
            main: red[200],
            dark: red[800],
        },
        success: {
            light: '#B9F6CA',
            main: '#69F0AE',
            dark: '#00C853',
        },
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
        fontWeightLight: 300, // Work Sans
        fontWeightRegular: 400, // Work Sans
        fontWeightMedium: 700, // Roboto Condensed
    },
});

const fontHeader = {
    color: rawTheme.palette.text.primary,
    fontWeight: rawTheme.typography.fontWeightMedium,
    fontFamily: "'Roboto Condensed', sans-serif",
    textTransform: 'uppercase',
};

const theme = {
    ...rawTheme,
    palette: {
        ...rawTheme.palette,
        background: {
            ...rawTheme.palette.background,
            default: rawTheme.palette.common.white,
            placeholder: grey[200],
        },
    },
    typography: {
        ...rawTheme.typography,
        fontHeader,
        h1: {
            ...rawTheme.typography.h1,
            ...fontHeader,
            letterSpacing: 0,
            fontSize: 60,
        },
        h2: {
            ...rawTheme.typography.h2,
            ...fontHeader,
            fontSize: 48,
        },
        h3: {
            ...rawTheme.typography.h3,
            ...fontHeader,
            fontSize: 42,
        },
        h4: {
            ...rawTheme.typography.h4,
            ...fontHeader,
            fontSize: 36,
        },
        h5: {
            ...rawTheme.typography.h5,
            fontSize: 27,
            fontWeight: rawTheme.typography.fontWeightLight,
        },
        h6: {
            ...rawTheme.typography.h6,
            ...fontHeader,
            fontSize: 18,
        },
        subtitle1: {
            ...rawTheme.typography.subtitle1,
            fontSize: 18,
        },
        body1: {
            ...rawTheme.typography.body2,
            fontWeight: rawTheme.typography.fontWeightRegular,
            fontSize: 16,
        },
        body2: {
            ...rawTheme.typography.body1,
            fontSize: 12,
        },
    },
};

export default theme;