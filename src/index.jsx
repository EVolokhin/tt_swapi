import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/tt_swapi/">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
