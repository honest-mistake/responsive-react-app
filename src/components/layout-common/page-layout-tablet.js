import React from 'react';
import HeaderTablet from 'components/layout-common/header-tablet';
import FooterTablet from 'components/layout-common/footer-tablet';

class PageLayoutTablet extends React.Component {

    render () {
        return (
            <div className="page-layout-tablet">
                <HeaderTablet />
                <main>
                    {this.props.children}
                </main>
                <FooterTablet />
            </div>
        );
    }
}

export default PageLayoutTablet;