import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import 'remixicon/fonts/remixicon.css';

ReactDOM.render(
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>,
  document.getElementById('root')
);
