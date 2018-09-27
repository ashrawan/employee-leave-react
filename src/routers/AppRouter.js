import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Login from '../components/login/Login';
import { EmployeeRoute } from './EmployeeRoute';
import { AdminRoute } from './AdminRoute';

// ----------- Employee Routes ----------------
import Dashboard from '../components/dashboard/Dashboard';
import EmployeeEdit from '../components/dashboard/EmployeeEdit';
import LeaveRequestEdit from '../components/dashboard/LeaveRequestEdit';
import EmployeeProfile from '../components/dashboard/profile/EmployeeProfile';

// ----------- Admin Routes ----------------

export const history = createHistory();

const AppRouter = () => (
    <Router basename={process.env.PUBLIC_URL}  history={history}>
        <Switch>
        <Route path="/" component={Login} exact/>
            <EmployeeRoute path="/home" component={Dashboard} />
            <EmployeeRoute path="/leave-request" component={LeaveRequestEdit} />
            <EmployeeRoute path="/profile" component={EmployeeProfile} />

            <AdminRoute path="/add-employee" component={EmployeeEdit} />
        </Switch>
    </Router>
);

export default AppRouter;