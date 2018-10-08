import React from 'react';
import { HashRouter, Router ,Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Login from '../components/login/Login';
import EmployeeRoute from './EmployeeRoute';
import AdminRoute  from './AdminRoute';

// ----------- Employee Routes ----------------
import Dashboard from '../components/dashboard/Dashboard';
import LeaveRequestEdit from '../components/dashboard/LeaveRequestEdit';
import EmployeeProfile from '../components/dashboard/profile/EmployeeProfile';

// ----------- Admin Routes ----------------
import EmployeeEdit from '../components/dashboard/EmployeeEdit';
import LeaveTypeEdit from '../components/dashboard/LeaveTypeEdit';

export const history = createHistory();

const AppRouter = () => (
    <Router  history={history}>
        <Switch>
            <Route path="/" component={Login} exact={true}/>
            <EmployeeRoute path="/home" component={Dashboard} />
            <EmployeeRoute path="/leave-request" component={LeaveRequestEdit} />
            <EmployeeRoute path="/profile" component={EmployeeProfile} />

            <AdminRoute path="/add-employee" component={EmployeeEdit} />
            <AdminRoute path="/add-leaveType" component={LeaveTypeEdit} />
            
        </Switch>
        </Router>
);

export default AppRouter;