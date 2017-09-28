import React from 'react';

import './header-tablet.scss';

class HeaderTablet extends React.Component {

    render () {
        return (
            <nav className="header-tablet">
                {'\u2630'} Logo Here
                <div className="header--login">Log in</div>
            </nav>
        );
    }
}

export default HeaderTablet;