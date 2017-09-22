import React from 'react';
import HeaderMobile from 'components/layout/header-mobile';
import FooterMobile from 'components/layout/footer-mobile';

class PageLayoutMobile extends React.Component {

    render () {
        return (
            <div className="page-layout-mobile">
                <HeaderMobile />
                <main>
                    {this.props.children}
                </main>
                <FooterMobile />
            </div>
        );
    }
}

export default PageLayoutMobile;