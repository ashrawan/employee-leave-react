import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from '../../container/LayoutHoc';

import ResetPassword from './ResetPassword';

class EmployeeProfile extends Component {
    render() {
        return (
            <div>
                <h4 className="text-center mt-4 mb-2">My Profile</h4>
                <div className="col-md-3">
                    <div className="card bg-light mb-3">
                        <div className="card-header">Profile</div>
                        <div className="card-body">
                            <h5 className="card-title">Update Password:</h5>
                            <div className="card-text">
                                <ResetPassword />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employee: state.employee
    };
};
const LayoutHigherOrder = LayoutHOC(EmployeeProfile);

const connectedEmployeeProfile = connect(mapStateToProps)(LayoutHigherOrder);

export default connectedEmployeeProfile;