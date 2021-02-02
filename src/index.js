import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import History from './history/history';

 

ReactDOM.render(
  <BrowserRouter history={History}>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
); 

