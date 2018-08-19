import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom'
import history from './store/history';

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import App from './App';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <Router  history={history}>
        <App />
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
