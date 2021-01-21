 import { createMuiTheme } from '@material-ui/core/styles';

const theme =  (themeType) => createMuiTheme({
    palette: {
        type: themeType,
        primary: {
            main: themeType === 'light' ? '#fafafa' : '#424242' ,
            light: themeType === 'light' ? '#ffffff' : '#6d6d6d',
            dark: themeType === 'light' ? '#c7c7c7' : '#1b1b1b',
            contrastText: themeType === 'light' ? '#000000' : '#ffffff',
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
