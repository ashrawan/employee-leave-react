import React, { Component } from 'react';

class LeaveForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            id:'',
            type_name:'',
            status: '1',
            selectedLeaveType: ''
        }
    }

    componentWillReceiveProps(props) {
        console.log(props.selectedLeaveType);

        this.setState({
            id: props.selectedLeaveType ? props.selectedLeaveType.id : '',
            type_name: props.selectedLeaveType ? props.selectedLeaveType.type_name : '',
            status: props.selectedLeaveType ? props.selectedLeaveType.status : '1',
        })
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit = (e) => {
        e.preventDefault();
        const { id, type_name, status } = this.state;

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
            type_name: type_name,
            status: status
        });

    }

    render() {
        const { id, type_name, status } = this.state;

        return (
            <div>
                <div className="col-md-8 offset-md-2">
                    <h3 className="text-center text-primary mb-4 mt-4">Leave Types</h3>
                    <form onSubmit={this.onSubmit} noValidate className={this.state.displayErrors ? 'displayErrors' : ''}>

                        <div className="form-group row">
                            <label htmlFor="type_name" className="col-sm-2 col-form-label">Leave Type <span className="text-danger"> * </span></label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="type_name" value={type_name} onChange={this.onChange} placeholder="Leave Type" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="status" value={status} onChange={this.onChange}  required />
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

export default LeaveForm;