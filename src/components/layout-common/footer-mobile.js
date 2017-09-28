import React from 'react';

import './footer-mobile.scss';

class FooterMobile extends React.Component {

    render () {
        return (
            <footer className="footer-mobile">
                View full site | Contact Us
                <br />
                <br />
                Terms & Conditions | Privacy Policy
                <br />
                <br />
                <div className="footer--copyright">
                    {'\u00A9'}2017 Example Co. All Rights Reserved.
                </div>
            </footer>
        );
    }
}

export default FooterMobile;