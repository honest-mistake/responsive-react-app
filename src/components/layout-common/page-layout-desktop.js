import React from 'react';
import HeaderDesktop from 'components/layout-common/header-desktop';
import FooterDesktop from 'components/layout-common/footer-desktop';

class PageLayoutDesktop extends React.Component {

    render () {
        return (
            <div className="page-layout-desktop">
                <HeaderDesktop />
                <main>
                    {this.props.children}
                </main>
                <FooterDesktop />
            </div>
        );
    }
}

export default PageLayoutDesktop;