import { browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

const composeEnhancers = composeWithDevTools({
  latency: 0,
});

const middleware = routerMiddleware(browserHistory)

const store = createStore(
  reducer,
  composeEnhancers(
   applyMiddleware(middleware)
  )
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}


export default store;
