import React, { Component } from 'react';
import LayoutHOC from '../container/LayoutHoc';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>This is Dashboard page</h1>
            </div>
        );
    }
}

export default LayoutHOC(Dashboard);