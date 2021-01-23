//npm packages
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cookies from 'universal-cookie'
import reportWebVitals from './reportWebVitals';
//Components
import theme from './components/theme'
import Header from './components/Header'
import App from './App';
import StockView from './StockView';
//Styling
import './index.css';

const cookies = new Cookies()
if(!cookies.get('theme'))
  cookies.set('theme', 'light', {path: '/'})

let currentTheme = cookies.get('theme');

const themeSwitcher = (newTheme) => {
  currentTheme = newTheme.target.checked ? 'dark' : 'light';
  cookies.set('theme', currentTheme, {path: '/'});

  ReactDOM.render(
    <React.StrictMode>
    <Content />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

function Content() {
  return (
      <ThemeProvider theme={theme(currentTheme)}>
        <Header switcher={themeSwitcher} defaultSwitch={currentTheme === 'dark' ? true : false} />
        <Router path="/">
          <Route exact path="/" component={App} />
          <Switch path="/stocks">
            <Route path="/stocks/:stockSymbol" component={StockView} />
          </Switch>
        </Router>
      </ThemeProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
  <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
