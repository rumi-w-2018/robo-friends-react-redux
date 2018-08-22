import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux'; // Provider passes Store to containers
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import 'tachyons';
// Use logger for dev - add to applyMiddleware
import { createLogger } from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();

//const createStoreWithMiddleware = applyMiddleware(promise, thunk, logger)(createStore);
const store = createStore(reducers, applyMiddleware(promise, thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
