import React from 'react';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'


import routes from './routes.js'; // routing

const App = ({store, history}) => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
);

export default App;
