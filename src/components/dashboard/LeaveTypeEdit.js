import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutHOC from '../container/LayoutHoc';

import { Button, Table } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';

import {startFetchLeaveType, startAddLeaveType, startEditLeaveType, startRemoveLeaveType} from '../../redux/actions/leaveType';
import LeaveTypeForm from './Forms/LeaveTypeForm';

class LeaveEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // leaveTypes: props.leaveTypes,
            currentSelectedLeaveType: '',
        };
    }

    componentDidMount() {
        this.fetchAllLeaveTypes();
    }

    fetchAllLeaveTypes = () => {
        let self = this;
        this.props.dispatch(startFetchLeaveType());
    }

    editClicked = (leaveType) => {
        this.setState({  currentSelectedLeaveType: leaveType });
     
    }

    onDeleteClicked = () => {
        if (this.state.currentSelectedLeaveType) {
            if (window.confirm("Are You Sure You want to delete this LeaveType: " + this.state.currentSelectedLeaveType.type_name)) {
                this.props.dispatch(startRemoveLeaveType(this.state.currentSelectedLeaveType.id));
            }
        }
        else {
            alert("LeaveType Not selected");
        }
    }

    render() {
console.log("llpp ", this.props);
        return (

            <div>

                <h4 className="text-center mt-3">LeaveType Edit</h4>

                <Button color="warning" className="float-right ml-1" onClick={() => this.onDeleteClicked()}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>


                <button className="btn btn-danger float-right" onClick={() => this.editClicked('')}>Add New LeaveType</button>

                {/* -------- Shows LeaveType List */}
                <div className="row clear-fix">
                    <div className="col-md-3 list-item-div">

                        <Table hover>
                            <thead>
                                <tr>
                                    <th colSpan="2" className="text-center">LeaveType</th>
                                </tr>
                            </thead>

                            <tbody>
                                {(this.props.leaveTypes).map((leaveType, i) => (

                                    <tr key={i} onClick={() => this.editClicked(leaveType)}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{leaveType.type_name}</td>
                                    </tr>

                                ))}
                            </tbody>
                        </Table>
                    </div>

                    <div className="col-md-9 pt-5 form-box">

                        <LeaveTypeForm selectedLeaveType={this.state.currentSelectedLeaveType} onSubmit={(leaveType) => {

                            if (leaveType.id) {
                                console.log("updating this leaveType: ", leaveType);
                                this.props.dispatch(startEditLeaveType(leaveType)).then(
                                    this.editClicked('')
                                );
                            }
                            else {
                                this.props.dispatch(startAddLeaveType(leaveType));
                                console.log("Adding new leaveType: ", leaveType);
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
        leaveTypes: state.leaveTypes
    };
};
const LayoutHigherOrder = LayoutHOC(LeaveEdit);

const connectedLeaveEdit = connect(mapStateToProps)(LayoutHigherOrder);

export default connectedLeaveEdit;