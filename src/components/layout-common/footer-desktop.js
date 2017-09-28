import React from 'react';
import {range} from 'lodash';
import PageWidthDesktop from 'components/layout-common/page-width-desktop';

import './footer-desktop.scss';

class FooterDesktop extends React.Component {

    render () {
        return (
            <footer className="footer-desktop">
                <PageWidthDesktop className="footer--wrapper">
                    <div className="footer--copyright">
                        {'\u00A9'}2017 Example Co. All Rights Reserved.
                        Longer example legal text and info about legal implications goes here
                        <span className="footer--link"> Terms and Conditions.</span>
                        <span className="footer--link"> Privacy Policy</span>
                    </div>
                </PageWidthDesktop>
            </footer>
        );
    }
}

export default FooterDesktop;