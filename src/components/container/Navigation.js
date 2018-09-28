import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

export default class Navigation extends Component {
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
                    <NavbarBrand className="font-weight-bold text-info" href="/employee-leave-react">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/add-employee">Add Employee</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/leave-request">Leave Request</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/add-leaveType">Leave Type</NavLink>
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