import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const EmployeeRoute = ({ isAuthenticated, role, component: Component, ...rest }) => (

  <Route {...rest} component={(props) => {
    console.log("Employee Route", role);
    return true && true ? <Component {...props} />
      : <Redirect to="/" />
  }} />
);

const mapStateToProps = (state) => ({
  isAuthenticated: true,
  role: "ROLE_USER || ROLE_ADMIN"
});

export default connect(mapStateToProps)(EmployeeRoute);
