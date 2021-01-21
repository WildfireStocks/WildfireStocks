import * as React from "react"
import './App.css'
import Header from './components/Header.js'
import { ThemeProvider } from '@material-ui/core'
import theme from './components/theme.js'


// markup
export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light'
    }
    this.themeSwitcher = this.themeSwitcher.bind(this)
  }
  themeSwitcher(newTheme) {
    this.setState({theme: newTheme.target.checked ? 'dark' : 'light'})
    console.log('yeet' + newTheme.target.checked + ' ' + this.state.theme)
  }

  render() {
    return (
      <ThemeProvider theme={theme(this.state.theme)}>
        <main>
          <title>Home Page</title>
          <Header switcher={this.themeSwitcher}/>
        </main>
      </ThemeProvider>
    )
  }
}

