import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '@/styles/globalStyles';

import App from './components/App/sadasdasd';
import ErrorBoundary from './components/ErrorBoundary/asdasd';

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
      <GlobalStyles />
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
