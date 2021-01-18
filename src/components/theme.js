import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
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
    }
})

const darkTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#e65100',
            light: '#ff833a',
            dark: '#ac1900',
            contrastText: '#fafafa'
        },
        secondary: {
            main: '#424242',
            light: '#6d6d6d',
            dark: '#1b1b1b',
            contrastText: '#ffffff'
        },
    },
  });

// if (user.themePreference === 'dark') {
//     export default darktheme
// }
// else {
//     export default theme
// }
export {theme, darkTheme}
