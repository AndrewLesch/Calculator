import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import GlobalStyles from '@/styles/globalStyles';

import App from './components/App/Index';

ReactDOM.render(
  <HashRouter>
    <App />
    <GlobalStyles />
  </HashRouter>,
  document.getElementById('root'),
);
