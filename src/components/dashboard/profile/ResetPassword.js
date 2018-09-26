import React from 'react';
import { connect } from 'react-redux';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// employee update password

class ResetPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            isLoading: false,
            hiddenButton: false,
            error: '',

            oldPassword: '',
            regPassword: '',
            regConPassword: ''
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    onPasswordUpdateSuccess = () => {
       // clear local storage
      };

    onPasswordUpdate = (e) => {
        e.preventDefault();
        let self = this;

        const {oldPassword,regPassword, regConPassword} = this.state;
        if(!oldPassword && !regPassword && !regConPassword){
            alert("Fill Up All Required Field");
            return;
        }

        alert("Request server to update password");
       // dispatch

    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            hiddenButton: false,
            isLoading: false,
        });
    }


    resetForm = () => {
        this.setState({
            oldPassword: '',
            regPassword: '',
            regConPassword: ''
        });
    };

    render() {
        const {oldPassword, regPassword, regConPassword, } = this.state;
        return (
            <div>

                <Button color="secondary" onClick={this.toggle}>Update Password</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Update Password</ModalHeader>
                    <ModalBody>

                        <form onSubmit={this.onPasswordUpdate}>
                            <div className="row">
                                <div className="form-group col-md">
                                    <label htmlFor="r0-password">Old Password</label>
                                    <input type="password" className="form-control" id="r0-password" value={oldPassword} onChange={this.onChange} name="oldPassword" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md">
                                    <label htmlFor="r1-password">New Password</label>
                                    <input type="password" className="form-control" id="r1-password" value={regPassword} onChange={this.onChange} name="regPassword" placeholder="Password" required />
                                </div>
                                <div className="form-group col-md">
                                    <label htmlFor="r2-password">Confirm Password</label>
                                    <input type="password" className="form-control" id="r2-password" value={regConPassword} onChange={this.onChange} name="regConPassword" placeholder="Password" required />
                                </div>
                            </div>

                            <button className="btn btn-block btn-primary">Update</button>
                        </form>

                    </ModalBody>
                    <ModalFooter>
                        {!!this.state.error && <p className="text-center text-danger">{this.state.error}</p>}
                    </ModalFooter>
                </Modal>

            </div >
        );
    }
}



const mapStateToProps = (state) => {
    return {
        // token
        employee: state.employee
    };
};

const connectedResetPassword = connect(mapStateToProps)(ResetPassword);

export default connectedResetPassword;