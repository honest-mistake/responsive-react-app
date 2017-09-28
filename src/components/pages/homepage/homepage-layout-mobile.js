import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash';

import './homepage-layout-mobile.scss';

class HomepageMobileLayout extends React.Component {

    render () {
        return (
            <div className="homepage-mobile-layout">
                <div className="layout--promotional-image">Mobile Promotional Image</div>
                {this.renderMenuItems()}
                {this.renderOffers()}
            </div>
        );
    }

    renderMenuItems () {
        return (
            <div className="layout--menu-container">
                {map(this.props.menuOptions, this.renderMenuLink)}
            </div>
        );
    }

    renderMenuLink (option, index) {
        return (
            <a className="layout--menu-link" href="www.com" key={index}>{option}</a>
        );
    }

    renderOffers () {
        return (
            <div className="layout--offer-container">
                {map(this.props.offerOptions, this.renderOffer)}
            </div>
        );
    }

    renderOffer (offer, index) {
        return (
            <div className="layout--offer-link" key={index}>
                <div className="layout--offer-title">{offer.title}</div>
                <div className="layout--offer-text">{offer.description}</div>
                <div className="layout--offer-caret">{'\u203A'}</div>
            </div>
        );
    }
}

HomepageMobileLayout.propTypes = {
    menuOptions: PropTypes.array.isRequired,
    offerOptions: PropTypes.array.isRequired
};

export default HomepageMobileLayout;