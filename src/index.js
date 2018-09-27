import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

import './App.css';
import AppRouter from './routers/AppRouter';

import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
const store = configureStore();

// axios.defaults.baseURL = 'http://127.0.0.1:8080/api/';
axios.defaults.baseURL = 'https://employeeleave.herokuapp.com/api/';

ReactDOM.render( <BrowserRouter>
    <Provider store={store}>
        <AppRouter />
    </Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
