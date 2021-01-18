import * as React from "react"
import './App.css'
import Header from './components/Header.js'
import { ThemeProvider } from '@material-ui/core'
import { theme, darkTheme } from './components/theme.js'




// markup
export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: darkTheme
    }
  }
  componentDidMount(){
  }
  render() {
    return (
      <ThemeProvider theme={this.state.theme ? darkTheme : theme}>
        <main>
          <title>Home Page</title>
          <Header />
        </main>
      </ThemeProvider>
    )
  }
}

