import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from '../container/LayoutHoc';

import { Button, Table } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';

import EmployeeLeaveForm from './Forms/EmployeeLeaveForm';
import {startFetchEmployeeLeave, startAddEmployeeLeave, startEditEmployeeLeave, startRemoveEmployeeLeave} from './../../redux/actions/employeeLeave';

class LeaveRequestEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // employeeLeaves: props.employeeLeaves,
            currentSelectedEmployeeLeave: '',
        };
    }

    componentDidMount() {
        this.fetchAllEmployeeLeaves();
    }

    fetchAllEmployeeLeaves = () => {
        let self = this;
        this.props.dispatch(startFetchEmployeeLeave());
    }

    editClicked = (member) => {
        this.setState({currentSelectedEmployeeLeave: member });
    }

    onDeleteClicked = () => {
        if (this.state.currentSelectedEmployeeLeave) {
            if (window.confirm("Are You Sure You want to delete this leave request: " + this.state.currentSelectedEmployeeLeave.employee.fullName)) {

                let self = this;
                this.props.dispatch(startRemoveEmployeeLeave(this.state.currentSelectedEmployeeLeave.id)).then(
                    (response) => {
                        alert("Delete Successful");
                        self.fetchAllEmployeeLeaves();
                    }
                );
            }
        }
        else {
            alert("Member Not selected");
        }
    }

    render() {

        return (

            <div>
                
                <h4 className="text-center mt-3">Employee Leave Edit</h4>

                <Button color="warning" className="float-right ml-1" onClick={() => this.onDeleteClicked()}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>


                <button className="btn btn-danger float-right" onClick={() => this.editClicked('')}>New LeaveRequest</button>

                {/* -------- Shows LeaveRequest List */}
                <div className="row clear-fix">
                    <div className="col-md-3 list-item-div">

                        <Table hover>
                            <thead>
                                <tr>
                                    <th colSpan="3" className="text-center">Leave Request</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.props.employeeLeaves && (this.props.employeeLeaves).map((leaveRequest, i) => (

                                    <tr key={i} onClick={() => this.editClicked(leaveRequest)}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{leaveRequest.employee.fullName}</td>
                                        <td>{leaveRequest.leaveType.type_name}</td>
                                    </tr>

                                ))}
                            </tbody>
                        </Table>
                    </div>

                    <div className="col-md-9 pt-5 form-box">

                        <EmployeeLeaveForm selectedEmployeeLeave={this.state.currentSelectedEmployeeLeave} onSubmit={(leaveRequest) => {

                            if (leaveRequest.id) {
                                console.log("updating this leave request: ", leaveRequest);
                                this.props.dispatch(startEditEmployeeLeave(leaveRequest)).then(
                                    this.editClicked('')
                                );
                            }
                            else {
                                this.props.dispatch(startAddEmployeeLeave(leaveRequest));
                                console.log("Adding new leave request: ", leaveRequest);
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
        employeeLeaves: state.employeeLeaves
    };
};
const LayoutHigherOrder = LayoutHOC(LeaveRequestEdit);

const connectedLeaveRequestEdit = connect(mapStateToProps)(LayoutHigherOrder);

export default connectedLeaveRequestEdit;