import React from 'react';
import ResetStyleLoader from 'components/layout-common/reset-style-loader';

class AppLayout extends React.Component {

    render () {
        return (
            <div className="app-layout">
                <ResetStyleLoader />
                {this.props.children}
            </div>
        );
    }
}

export default AppLayout;