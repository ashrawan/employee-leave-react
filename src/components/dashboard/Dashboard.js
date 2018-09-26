import React, { Component } from 'react';
import LayoutHOC from '../container/LayoutHoc';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Employee Leave Management System</h1>
                    <p className="lead">This is a simple Dashboard Page </p>
                    <hr className="my-4" />
                    <p>The System is still under development, the contents will be added soon</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default LayoutHOC(Dashboard);