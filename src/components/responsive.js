import React from 'react';
import PropTypes from 'prop-types';
import {each} from 'lodash';
import breakpointsData from 'data/responsive-breakpoints-data';
import LazyComponentLoader from 'components/loaders/lazy-component-loader';
import loadComponent from 'lib/load-component';

class Responsive extends React.Component {

    constructor (props) {
        super(props);
        this.updateScreenWidth = this.updateScreenWidth.bind(this);
        this.state = {renderKey: this.getRendererKey()};
    }

    componentWillMount () {
        window.addEventListener('resize', this.updateScreenWidth);
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.updateScreenWidth);
    }

    componentDidMount () {
        if (this.shouldPreloadOtherBreakpoints()) {
            this.loadNonActiveBreakpoints();
        }
    }

    render () {
        return (
            <div className="responsive">
                {this.renderContent()}
            </div>
        );
    }

    renderContent () {
        const config = this.props.renderConfig[this.state.renderKey];

        return <LazyComponentLoader name={config.name} load={config.component} />;
    }

    getRendererKey () {
        const {renderConfig} = this.props;
        const width = this.getScreenWidth();
        let key;

        each(breakpointsData, (breakpointConfig, sizeKey) => {
            if (width > breakpointConfig.minWidth && renderConfig[sizeKey]) {
                key = sizeKey;
            }
        });

        return key;
    }

    getScreenWidth () {
        return document.documentElement.clientWidth;
    }

    updateScreenWidth () {
        const {renderKey} = this.state;
        const newKey = this.getRendererKey();

        if (renderKey !== newKey) {
            this.setState({renderKey: newKey});
        }
    }

    shouldPreloadOtherBreakpoints () {
        return breakpointsData[this.state.renderKey].asyncLoadOtherBreakpoints;
    }

    loadNonActiveBreakpoints () {
        const {renderKey} = this.state;

        each(this.props.renderConfig, (config, key) => {
            const {name, component} = config;

            if (key !== renderKey) {
                loadComponent({
                    name: name,
                    module: component,
                    priority: 'low'
                });
            }
        });
    }
}

Responsive.propTypes = {
    // note the shape of this config needs to match the initial size config
    renderConfig: PropTypes.object.isRequired
}

export default Responsive;