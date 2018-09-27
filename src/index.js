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

import Login from './components/login/Login';
import { EmployeeRoute } from './routers/EmployeeRoute';
import { AdminRoute } from './routers/AdminRoute';

// ----------- Employee Routes ----------------
import Dashboard from './components/dashboard/Dashboard';
import EmployeeAddForm from './components/dashboard/Forms/EmployeeAddForm';
import EmployeeEdit from './components/dashboard/EmployeeEdit';
import LeaveRequestEdit from './components/dashboard/LeaveRequestEdit';
import EmployeeProfile from './components/dashboard/profile/EmployeeProfile';

// axios.defaults.baseURL = 'http://127.0.0.1:8080/api/';
axios.defaults.baseURL = 'https://employeeleave.herokuapp.com/api/';
const store = configureStore();

ReactDOM.render( <BrowserRouter>
    <Provider store={store}>
    <Switch>
            <Route path="/" component={Login} exact={true}/>
            <EmployeeRoute path="/home" component={Dashboard} />
            <EmployeeRoute path="/leave-request" component={LeaveRequestEdit} />
            <EmployeeRoute path="/profile" component={EmployeeProfile} />

            <AdminRoute path="/add-employee" component={EmployeeEdit} />
        </Switch>
    </Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
