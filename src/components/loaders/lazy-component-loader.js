import React from 'react';
import PropTypes from 'prop-types';
import injectCss from 'lib/inject-css';

class LazyComponentLoader extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            loadedComponent: null
        };
    }

    componentWillMount () {
        this.load(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.setState(() => {
                return {loadedComponent: null}
            });
            this.load(nextProps);
        }
    }

    render () {
        const Component = this.state.loadedComponent || 'div';

        return <Component />;
    }

    load (props) {
        injectCss(props.name);
        props.load((moduleContent) => {
            this.setState(() => {
                return {loadedComponent: moduleContent.default || moduleContent};
            });
        });
    }
}

LazyComponentLoader.loadModule = (name, module, callback) => {
    injectCss(name);
    module((moduleContent) => {
        if (callback) {
            callback(moduleContent.default || moduleContent);
        }
    });
}

LazyComponentLoader.propTypes = {
    load: PropTypes.func,
    name: PropTypes.string
}

export default LazyComponentLoader;