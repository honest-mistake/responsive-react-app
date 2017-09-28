import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import PageWidthDesktop from 'components/layout-common/page-width-desktop';

import './header-desktop.scss';

class HeaderDesktop extends React.Component {

    render () {
        return (
            <nav className={this.getClass()}>
                <PageWidthDesktop className="header--wrapper">
                    <div className="header--logo">Logo Here</div>
                    <div className="header--actions">Log in</div>
                </PageWidthDesktop>
            </nav>
        );
    }

    getClass () {
        const {type} = this.props;

        return classnames('header-desktop', {
            'header-desktop_white': (type === 'white')
        });
    }
}

HeaderDesktop.propTypes = {
    type: PropTypes.oneOf(['white'])
};

export default HeaderDesktop;