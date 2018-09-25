import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Login from '../components/login/Login';

// ----------- Employee Routes ----------------
import Dashboard from '../components/dashboard/Dashboard';
import { EmployeeRoute } from './EmployeeRoute';

// ----------- Admin Routes ----------------


export const  history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={Login} exact={true}/>
            <EmployeeRoute path="/home" component={Dashboard} />
        </Switch>
    </Router>
);

export default AppRouter;