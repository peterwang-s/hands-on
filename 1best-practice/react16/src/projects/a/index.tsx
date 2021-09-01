import 'core-js';
import '@babel/polyfill';
import 'es5-shim';
import 'es6-shim';
import 'console-polyfill';
import 'url-search-params-polyfill';

import 'lib-flexible';
import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router/immutable';
import * as serviceWorker from '@/serviceWorker';

import reducer, { history } from './store';

import './index.styl';
import saga from './saga';
import App from './router/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(routerMiddleware(history), sagaMiddleware));
sagaMiddleware.run(saga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <HashRouter>
                    <App />
                </HashRouter>
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.querySelector('#root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
