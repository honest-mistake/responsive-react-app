import React from 'react';
import classnames from 'classnames';

import './page-width-desktop.scss';

class PageWidthDesktop extends React.Component {

    render () {
        return (
            <div className={this.getClass()} >{this.props.children}</div>
        );
    }

    getClass () {
        return classnames('page-width-desktop', this.props.className);
    }
}

export default PageWidthDesktop;