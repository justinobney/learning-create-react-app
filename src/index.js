import '../node_modules/semantic-ui-css/semantic.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import store from './store'; // global app state
import App from './App.js';

const history = syncHistoryWithStore(browserHistory, store); // browser history
const rootEl = document.getElementById('root');

ReactDOM.render(
  <App store={store} history={history} />,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp store={store} history={history} />,
      rootEl
    );
  });
}
