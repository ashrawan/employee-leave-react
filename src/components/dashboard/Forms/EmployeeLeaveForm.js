import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import axios from 'axios';
import {API} from '../../../utils/api';

class EmployeeLeaveForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {},
            employeeId: '',
            leaveReason: '',
            leaveDateFrom: '',
            leaveDateTo: '',
            leaveType: [],
            status: '',
            selectedLeaveType: ''
        }
    }

    componentWillReceiveProps(props) {
        console.log(props.selectedEmployeeLeave);

        let selectedLeaveType = '';
        if (props.selectedEmployeeLeave.leaveType) {
            selectedLeaveType = ({ 'id': props.selectedEmployeeLeave.leaveType.id, 'label': props.selectedEmployeeLeave.leaveType.type_name })
        }

        this.setState({
            id: props.selectedEmployeeLeave ? props.selectedEmployeeLeave.id : '',
            employee: props.selectedEmployeeLeave.employee ? props.selectedEmployeeLeave.employee : '',
            employeeId: props.selectedEmployeeLeave.employee ? props.selectedEmployeeLeave.employee.id : '',
            leaveType: props.selectedEmployeeLeave.leaveType ? props.selectedEmployeeLeave.leaveType : '',
            selectedLeaveType: selectedLeaveType,

            leaveReason: props.selectedEmployeeLeave ? props.selectedEmployeeLeave.leaveReason : '',
            leaveDateFrom: props.selectedEmployeeLeave ? props.selectedEmployeeLeave.leaveDateFrom : '',
            leaveDateTo: props.selectedEmployeeLeave ? props.selectedEmployeeLeave.leaveDateTo : '',
            isApproved: props.selectedEmployeeLeave ? props.selectedEmployeeLeave.isApproved : '',
            deniedReason: props.selectedEmployeeLeave ? props.selectedEmployeeLeave.deniedReason : '',
            createdDateTime: props.selectedEmployeeLeave ? props.selectedEmployeeLeave.createdDateTime : '',
            status: props.selectedEmployeeLeave ? props.selectedEmployeeLeave.status : '',
            reviewedByEmployee: props.selectedEmployeeLeave.reviewedByEmployee ? props.selectedEmployeeLeave.reviewedByEmployee : '',
        })
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeEmployee = (e) => {
        this.setState({ employeeId: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { id, employeeId, leaveReason, leaveDateFrom, leaveDateTo, leaveType, selectedLeaveType, status } = this.state;

        if (!e.target.checkValidity() || !selectedLeaveType) {
            this.setState({
                invalid: true,
                displayErrors: true,
            });
            alert("Fill Up All required Field");
            return;
        }

        this.props.onSubmit({
            id: id,
            employee: {
                id: employeeId
            },
            leaveType: {
                id: selectedLeaveType.id
            },
            leaveDateFrom: leaveDateFrom,
            leaveDateTo: leaveDateTo,
            leaveReason: leaveReason,
            status: status
        });

    }

    loadOptions = (inputValue, callback) => {

        let self = this;
        API.get('leave-types')
            .then(function (response) {
                var leaveOpt = (response.data).map(leaveType => ({ 'id': leaveType.id, 'label': leaveType.type_name }));
                // console.log("modified data",employeeOpt);
                self.setState({ LeaveTypeOptions: leaveOpt }, callback(leaveOpt))
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    handleChange = (newValue) => {
        console.log("new value", newValue);
        this.setState({ selectedLeaveType: newValue });
        return newValue;
    };

    render() {
        const { id, employeeId, leaveReason, leaveDateFrom, leaveDateTo, leaveType, selectedLeaveType, status } = this.state;

        return (
            <div>
                <div className="col-md-8 offset-md-2">
                    <h3 className="text-center text-primary mb-4 mt-4">Employee Leave Request</h3>
                    <form onSubmit={this.onSubmit} noValidate className={this.state.displayErrors ? 'displayErrors' : ''}>

                        <div className="form-group row">
                            <label htmlFor="employeeId" className="col-sm-2 col-form-label">Employee Id (test) <span className="text-danger"> * </span></label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" name="employee" value={employeeId} onChange={this.onChangeEmployee} placeholder="Input Employee id" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="leaveType" className="col-sm-2 col-form-label">Leave Type <span className="text-danger"> * </span></label>
                            <div className="col-sm-10">
                                <AsyncSelect
                                    cacheOptions
                                    placeholder="Press any key to load"
                                    name="leaveType"
                                    value={selectedLeaveType}
                                    isClearable={true}
                                    loadOptions={this.loadOptions}
                                    onChange={this.handleChange}
                                    getOptionValue={(option) => (option.label)}
                                    isOptionDisabled={(option) => option.status === 0}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="leaveReason" className="col-sm-2 col-form-label">Leave Reason <span className="text-danger"> * </span></label>
                            <div className="col-sm-10">
                                <textarea className="textarea-wd100" rows="5" name="leaveReason" value={leaveReason} onChange={this.onChange} required></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="leaveDateFrom" className="col-sm-2 col-form-label">leave Date From <span className="text-danger"> * </span></label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" name="leaveDateFrom" value={leaveDateFrom} onChange={this.onChange} placeholder="Leave Date From" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="leaveDateTo" className="col-sm-2 col-form-label">leave Date To <span className="text-danger"> * </span></label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" name="leaveDateTo" value={leaveDateTo} onChange={this.onChange} placeholder="Leave Date To" required />
                            </div>
                        </div>

                        <div className="text-center">
                            <button className="btn btn-primary btn-block">
                                {this.state.id ? 'Update' : 'Add'}
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}

export default EmployeeLeaveForm;