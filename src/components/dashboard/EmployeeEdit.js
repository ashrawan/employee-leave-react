import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from '../container/LayoutHoc';

import { Button, Table } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';

import EmployeeAddForm from './Forms/EmployeeAddForm';
import {startFetchEmployee, startAddEmployee, startEditEmployee, startRemoveEmployee} from './../../redux/actions/employee';

class EmployeeEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // employees: props.employees,
            currentSelectedEmployee: '',
        };
    }

    componentDidMount() {
        this.fetchAllEmployees();
    }

    fetchAllEmployees = () => {
        let self = this;
        this.props.dispatch(startFetchEmployee());
    }

    editClicked = (member) => {
        this.setState({  currentSelectedEmployee: member });
    }

    onDeleteClicked = () => {
        if (this.state.currentSelectedEmployee) {
            if (window.confirm("Are You Sure You want to delete this Member: " + this.state.currentSelectedEmployee.fullName)) {

                let self = this;
                this.props.dispatch(startRemoveEmployee(this.state.currentSelectedEmployee.id));
            }
        }
        else {
            alert("Member Not selected");
        }
    }

    render() {

        return (

            <div>

                <h4 className="text-center mt-3">Employee Edit</h4>

                <Button color="warning" className="float-right ml-1" onClick={() => this.onDeleteClicked()}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>


                <button className="btn btn-danger float-right" onClick={() => this.editClicked('')}>Add New Employee</button>

                {/* -------- Shows feature List */}
                <div className="row clear-fix">
                    <div className="col-md-3 list-item-div">

                        <Table hover>
                            <thead>
                                <tr>
                                    <th colSpan="2" className="text-center">Members</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.props.employees && (this.props.employees).map((member, i) => (

                                    <tr key={i} onClick={() => this.editClicked(member)}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{member.fullName}</td>
                                    </tr>

                                ))}
                            </tbody>
                        </Table>
                    </div>

                    <div className="col-md-9 pt-5 form-box">

                        <EmployeeAddForm selectedEmployee={this.state.currentSelectedEmployee} onSubmit={(employee) => {

                            if (employee.id) {
                                console.log("updating this member: ", employee);
                                this.props.dispatch(startEditEmployee(employee)).then(
                                    this.editClicked('')
                                );
                            }
                            else {
                                this.props.dispatch(startAddEmployee(employee));
                                console.log("Adding new member: ", employee);
                            }
                        }} />
                    </div>
                </div>

                <hr />

            </div>


        );
    }
}
const mapStateToProps = (state) => {
    return {
        employees: state.employees
    };
};
const LayoutHigherOrder = LayoutHOC(EmployeeEdit);

const connectedEmployeeEdit = connect(mapStateToProps)(LayoutHigherOrder);

export default connectedEmployeeEdit;