import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#000000',
            light: '#6d6d6d',
            dark: '#1b1b1b',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#e65100',
            light: '#ff833a',
            dark: '#ac1900',
            contrastText: '#fafafa'
        },
    }
})

//surface #121212
const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#424242',
            light: '#6d6d6d',
            dark: '#1b1b1b',
            contrastText: '#ffffff'

        },
        secondary: {
            main: '#e65100',
            light: '#ff833a',
            dark: '#ac1900',
            contrastText: '#fafafa'
        },
    },
});

export { theme, darkTheme }
