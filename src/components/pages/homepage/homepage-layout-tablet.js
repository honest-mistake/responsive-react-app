import React from 'react';
import PropTypes from 'prop-types';

import './homepage-layout-tablet.scss';

class HomepageLayoutTablet extends React.Component {

    render () {
        const {actions, options} = this.props;

        return (
            <div className="homepage-layout-tablet">
                <div className="layout--promo-image">Tablet Promotional Image</div>
                {actions.map(this.renderAction)}
                {options.map(this.renderOption)}
                <div className="layout--promo-ad1">Promo Ad 1</div>
                <div className="layout--promo-ad2">Promo Ad 2</div>
            </div>
        );
    }

    renderAction (action, index) {
        return <a className="layout--action" href="www.com" key={index}>{action}</a>;
    }

    renderOption (option, index) {
        return <a className="layout--option" href="www.com" key={index}>{option}</a>;
    }
}

HomepageLayoutTablet.propTypes = {
    actions: PropTypes.array.isRequired,
    options: PropTypes.array.isRequired
};

export default HomepageLayoutTablet;