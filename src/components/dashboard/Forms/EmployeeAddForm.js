import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import axios from 'axios';

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            username: '',
            password: '',
            supervisorOptions: [],
            selectedSupervisor: '',
        }
    }

    componentWillReceiveProps(props) {
        console.log(props.selectedEmployee);
        let selectedSupervisor = '';
        if(props.selectedEmployee && props.selectedEmployee.employeeSupervisor){
            selectedSupervisor = ({'id': props.selectedEmployee.employeeSupervisor.id, 'label': props.selectedEmployee.employeeSupervisor.fullName})
        }
    
        this.setState({
            id: props.selectedEmployee ? props.selectedEmployee.id : '',
            fullName: props.selectedEmployee ? props.selectedEmployee.fullName : '',
            username: props.selectedEmployee ? props.selectedEmployee.username : '',
            password: '',
            selectedSupervisor: selectedSupervisor,

            displayErrors: ''
        })
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { id, fullName, username, password, selectedSupervisor } = this.state;

        if (!e.target.checkValidity()) {
            this.setState({
                invalid: true,
                displayErrors: true,
            });
            alert("Fill Up All required Field");
            return;
        }

        this.props.onSubmit({
            id: id,
            fullName: fullName,
            username: username,
            password: password,
            employeeSupervisor: selectedSupervisor? {
                id: selectedSupervisor.id
            }: null
        });

    }
    // loadEmployeeOptions = (inputValue, callback) => {
    //     setTimeout(() => {
    //         callback(filterColors(inputValue));
    //     }, 1000);
    // };

    loadOptions = (inputValue, callback) => {

        let self = this;
        axios.get('employees/employee-by-fullname', {
            params: {
                fullname: inputValue
            }
          })
          .then(function (response) {
            console.log(response.data.content);
            var employeeOpt = (response.data.content).map(employee => ({'id': employee.id, 'label' : employee.fullName}));
            // console.log("modified data",employeeOpt);
            self.setState({selectedOption: employeeOpt}, callback(employeeOpt))
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    handleChange = (newValue) => {
        console.log("new value", newValue);
        this.setState({ selectedSupervisor: newValue });
        return newValue;
    };

    render() {
        const { fullName, username, password, selectedSupervisor } = this.state;

        return (
            <div>
                <div className="col-md-8 offset-md-2">
                    <h3 className="text-center text-primary mb-4 mt-4">Add Employee</h3>
                    <form onSubmit={this.onSubmit} noValidate className={this.state.displayErrors ? 'displayErrors' : ''}>
                        <div className="form-group row">
                            <label htmlFor="fullName" className="col-sm-2 col-form-label">Full Name <span className="text-danger"> * </span></label>
                            <div className="col-sm-10">
                                <input type="fullName" className="form-control" name="fullName" value={fullName} onChange={this.onChange} placeholder="fullname" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-2 col-form-label">UserName <span className="text-danger"> * </span></label>
                            <div className="col-sm-10">
                                <input type="username" className="form-control" name="username" value={username} onChange={this.onChange} placeholder="username" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Optional Password <span className="text-danger"> * </span></label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" name="password" value={password} disabled={!!this.state.id} onChange={this.onChange} placeholder="password" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="supervisor" className="col-sm-2 col-form-label">Employee Supervisor </label>
                            <div className="col-sm-10">
                                <AsyncSelect
                                    cacheOptions
                                    placeholder="Select Supervisor"
                                    name="employeeSupervisor"
                                    value={selectedSupervisor}
                                    isClearable="true"
                                    loadOptions={this.loadOptions}
                                    onChange={this.handleChange}
                                    getOptionValue={(option) => (option.label)}
                                    isOptionDisabled={(option) => option.id === 6}
                                />
                            </div>
                        </div>

                        <button className="btn btn-primary btn-block">
                            {this.state.id ? 'Update' : 'Add'}
                        </button>
                    </form>
                </div>
            </div >
        );
    }
}

export default EmployeeAddForm;