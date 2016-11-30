import { browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers';

const composeEnhancers = composeWithDevTools({
  latency: 0,
});

const middleware = routerMiddleware(browserHistory)

const store = createStore(
  reducer,
  composeEnhancers(
   applyMiddleware(middleware, thunk)
  )
);

// window.$.connection.hub.url = 'http://localhost:47316/signalr';
//
// var messages = window.$.connection.messageHub;
// messages.client.broadcastMessage = function (data) {
//   console.log(data);
//   store.dispatch({
//     type: 'CLICK'
//   });
// };
//
// window.$.connection.hub.start().done(function () {
//   console.log('connected');
// });

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}


export default store;
