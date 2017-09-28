import React from 'react';
import PropTypes from 'prop-types';
import HeaderDesktop from 'components/layout-common/header-desktop';
import FooterDesktop from 'components/layout-common/footer-desktop';

class PageLayoutDesktop extends React.Component {

    render () {
        return (
            <div className="page-layout-desktop">
                <HeaderDesktop type={this.props.headerType} />
                <main>
                    {this.props.children}
                </main>
                <FooterDesktop />
            </div>
        );
    }
}

PageLayoutDesktop.propTypes = {
    headerType: PropTypes.string
};

export default PageLayoutDesktop;