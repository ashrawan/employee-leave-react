import React from 'react';
import Navigation from "./Navigation";

const LayoutHOC = (WrappedComponent) => {
    return (props) => (
        <div>

            <Navigation />
            <div className="container-fluid">
                <div className="row">

                    <div className="container-fluid">
                        <WrappedComponent {...props} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LayoutHOC;
