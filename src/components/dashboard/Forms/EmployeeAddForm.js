import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {

            }
        }
    }
    
    render() {
        return (
            <div>
                 <div className="col-md-8 offset-md-2">
                    <h3 className="text-center text-primary mb-4">Add Employee</h3>
                    <form onSubmit={this.loginSubmit} noValidate className={this.state.modalFormErrors ? 'displayErrors' : ''}>
                        <div className="form-group row">
                            <label htmlFor="fullName" className="col-sm-4 col-form-label">Full Name <span className="text-danger"> * </span></label>
                            <div className="col-sm-8">
                                <input type="fullName" className="form-control" name="fullName" value={fullName} onChange={this.onChange} placeholder="Fullname" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-4 col-form-label">Password <span className="text-danger"> * </span></label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" name="password" onChange={this.onChange} placeholder="password" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-4 col-form-label">UserName <span className="text-danger"> * </span></label>
                            <div className="col-sm-8">
                                <input type="username" className="form-control" name="username" value={username} onChange={this.onChange} placeholder="username" required />
                            </div>
                        </div>

                        <button className="btn btn-primary btn-block mt-1">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EmployeeAddForm;