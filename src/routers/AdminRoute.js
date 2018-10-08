import React from 'react';
import {connect} from 'react-redux';
import { Route ,Redirect, withRouter } from 'react-router-dom';


const AdminRoute = ({ isAuthenticated, role, component:Component, ...rest }) => (

        <Route {...rest}  component={ (props)=>{
        //     console.log("Admin route => ROLE = ",role ," = ",role," == ROLE_ADMIN");
      return  isAuthenticated && role == "ROLE_ADMIN" ? <Component {...props} />
        : <Redirect to ="/" />
}}/>
    );

const mapStateToProps = (state) =>({
    isAuthenticated : state.user.id > 0 ,
    role : state.user.role
});

export default connect(mapStateToProps)(AdminRoute);