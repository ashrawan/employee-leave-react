import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { Route ,Redirect } from 'react-router-dom';

export const AdminRoute = ({ isAuthenticated, role, component:Component, ...rest }) => (

            <Route {...rest}  component={props => {
                // console.log("Admin route => ROLE = ",role ," = ",role," == ROLE_ADMIN");
          return  true && true ? (<Component {...props} />
           ) : <Redirect to ="/" />
}}
/>
        );
    
const mapStateToProps = state => ({
        isAuthenticated : state.user.id > 0 ,
        role : state.user.role
});

export default connect(mapStateToProps)(AdminRoute);