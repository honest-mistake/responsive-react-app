import React from 'react';
import PageWidthDesktop from 'components/layout-common/page-width-desktop';

import './homepage-layout-desktop.scss';

class HomepageLayoutDesktop extends React.Component {

    render () {
        return (
            <div className="homepage-layout-desktop">
                <PageWidthDesktop className="layout--wrapper">
                    <div className="layout--promo-main">Desktop Promotional Image</div>
                    <div className="layout--thing">Something goes here</div>
                    <div className="layout--ads">
                        <div className="layout--ad1">Ad 1</div>
                        <div className="layout--ad2">Ad 2</div>
                    </div>
                </PageWidthDesktop>
                <PageWidthDesktop className="layout--initiatives-wrapper">
                    <ul className="layout--initiatives">
                        <li className="layout--initiative">Do a thing!</li>
                        <li className="layout--initiative">Do a thing!</li>
                        <li className="layout--initiative">Do a thing!</li>
                        <li className="layout--initiative">Do a thing!</li>
                    </ul>
                </PageWidthDesktop>
            </div>
        );
    }
}

export default HomepageLayoutDesktop;