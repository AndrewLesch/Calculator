import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '@/styles/globalStyles';

import App from './components/App/Index';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <GlobalStyles />
  </BrowserRouter>,
  document.getElementById('root'),
);
