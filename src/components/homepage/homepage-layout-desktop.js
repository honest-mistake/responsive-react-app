import React from 'react';

import './homepage-layout-desktop.scss';

class HomepageLayoutDesktop extends React.Component {

    render () {
        return (
            <div className="homepage-layout-desktop">
                <div className="layout--wrapper">
                    <div className="layout--promo-main">Desktop Promotional Image</div>
                    <div className="layout--thing">Something goes here</div>
                    <div className="layout--ads">
                        <div className="layout--ad1">Ad 1</div>
                        <div className="layout--ad2">Ad 2</div>
                    </div>
                </div>
                <div className="layout--initiatives-wrapper">
                    <ul className="layout--initiatives">
                        <li className="layout--initiative">Do a thing!</li>
                        <li className="layout--initiative">Do a thing!</li>
                        <li className="layout--initiative">Do a thing!</li>
                        <li className="layout--initiative">Do a thing!</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HomepageLayoutDesktop;