import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';     // Provider passes Store to containers
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import 'tachyons';
// Use logger for dev - add to applyMiddleware
import { createLogger } from 'redux-logger';
const logger = createLogger();

//import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise, thunk, logger)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)} >
        <App />
    </Provider>,
    document.getElementById('root')
);

//registerServiceWorker();
