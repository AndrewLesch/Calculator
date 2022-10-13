import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { App } from './components/App'
import GlobalStyles from '@/styles/globalStyles'

ReactDOM.render(
  <HashRouter>
    <App />
    <GlobalStyles />
  </HashRouter>,
  document.getElementById('root'),
)
