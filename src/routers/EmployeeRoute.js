import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

 const EmployeeRoute = ({ isAuthenticated, role, component:Component, ...rest }) => (

  <Route {...rest}  component={ (props)=>{
      console.log("Admin route => ROLE = ",role ," = ",role," == ROLE_ADMIN");
return  isAuthenticated && (role == "ROLE_ADMIN" || role == "ROLE_USER") ? <Component {...props} />
  : <Redirect to ="/" />
}}/>
);

const mapStateToProps = (state) =>({
isAuthenticated : state.user.id > 0 ,
role : state.user.role
});

export default connect(mapStateToProps)(EmployeeRoute);
