import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '@/styles/globalStyles';

import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
      <GlobalStyles />
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
