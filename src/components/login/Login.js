import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    loginSubmit = (event) => {
        event.preventDefault();
        // let self = this;

        if (!event.target.checkValidity()) {
            this.setState({
                invalid: true,
                modalFormErrors: true,
            });
            alert("Fill Up All required Field");
            return;
        }
        alert("Login Submitted");
    }

    render() {
        const { username } = this.state;
        return (
            <div>
                <NavLink className="nav-link" to="/home">Test Employee Dashboard</NavLink>
                
                <div className="col-md-4 offset-md-4 login-form">
                    <h3 className="text-center text-primary mb-4">Login</h3>
                    <form onSubmit={this.loginSubmit} noValidate className={this.state.modalFormErrors ? 'displayErrors' : ''}>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-4 col-form-label">Username <span className="text-danger"> * </span></label>
                            <div className="col-sm-8">
                                <input type="username" className="form-control" name="username" value={username} onChange={this.onChange} placeholder="username" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-4 col-form-label">Password <span className="text-danger"> * </span></label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" name="password" onChange={this.onChange} placeholder="password" required />
                            </div>
                        </div>

                        <button className="btn btn-primary btn-block mt-1">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;