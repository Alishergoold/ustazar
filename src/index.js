import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './container/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App name={'Amira'} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
