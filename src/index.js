import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StockView from './StockView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router path="/">
      <Route exact path="/" component={ App }/>
      <Switch path="/stocks">
        <Route path="/stocks/:stockSymbol" component={ StockView }/>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
