import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import thunk from 'redux-thunk';
import {database} from './database/config';

import './styles/stylesheet.css';

import rootReducer from './redux/reducer'
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);

ReactDOM.render(<Provider
    store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
