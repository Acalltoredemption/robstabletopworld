import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';


import History from './history/history';

 

ReactDOM.render(
  <BrowserRouter history={History}>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
); 

