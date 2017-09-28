import React from 'react';
import AppLayout from 'components/layout-common/app-layout';

class AppContainer extends React.Component {

    render () {
        return (
            <AppLayout>
                {this.props.children}
            </AppLayout>
        );
    }
}

export default AppContainer;