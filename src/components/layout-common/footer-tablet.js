import React from 'react';

import './footer-tablet.scss';

class FooterTablet extends React.Component {

    render () {
        return (
            <footer className="footer-tablet">
                <div className="footer--copyright">
                    {'\u00A9'}2017 Example Co. All Rights Reserved.
                    Longer example legal text and info about legal implications goes here
                    <span className="footer--link"> Terms and Conditions.</span>
                    <span className="footer--link"> Privacy Policy</span>
                </div>
            </footer>
        );
    }
}

export default FooterTablet;