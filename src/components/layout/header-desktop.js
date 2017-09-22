import React from 'react';

import './header-desktop.scss';

class HeaderDesktop extends React.Component {

    render () {
        return (
            <nav className="header-desktop">
                <div className="header--wrapper">
                    <div className="header--logo">Logo Here</div>
                    <div className="header--actions">Log in</div>
                </div>
            </nav>
        );
    }
}

export default HeaderDesktop;