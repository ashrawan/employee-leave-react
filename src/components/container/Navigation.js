import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

export class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <div className="font-weight-bold text-info">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </div>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            
                            {this.props.user.role == "ROLE_ADMIN" ?
                            <div>
                            <NavItem>
                                <NavLink className="nav-link" to="/add-employee">Add Employee</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/add-leaveType">Leave Type</NavLink>
                            </NavItem> </div>: ''}

                            <NavItem>
                                <NavLink className="nav-link" to="/leave-request">Leave Request</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/profile">My Profile</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const connectedNavigation = connect(mapStateToProps)(Navigation);

export default connectedNavigation;