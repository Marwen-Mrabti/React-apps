import React from 'react';
import ReactDOM from 'react-dom';
import './mainStyles.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import styles bundle
import 'swiper/css/bundle';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
