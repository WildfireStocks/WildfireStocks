 import { createMuiTheme } from '@material-ui/core/styles';

const theme =  (themeType) => createMuiTheme({
    palette: {
        type: themeType,
        primary: {
            main: '#ff00FF',
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

export default theme
