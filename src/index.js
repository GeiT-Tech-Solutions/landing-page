import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import { ThemeProvider } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxxl"
  >
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

