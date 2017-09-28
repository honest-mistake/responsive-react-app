import React from 'react';

import './header-mobile.scss';

class HeaderMobile extends React.Component {

    render () {
        return (
            <nav className="header-mobile">
                {'\u2630'} Logo Here
                <div className="header--login">Log in</div>
            </nav>
        );
    }
}

export default HeaderMobile;