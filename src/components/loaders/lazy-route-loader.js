import React from 'react';
import {Switch} from 'react-router-dom';
import loadComponent from 'lib/load-component';
import LazyComponentLoader from 'components/loaders/lazy-component-loader';

class LazyRouteLoader extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
        this.injectLoadedComponents = this.injectLoadedComponents.bind(this);
    }

    componentWillMount() {
        React.Children.map(this.props.children, (child) => {
             const {lazy, name, component} = child.props;

             if (lazy) {
                loadComponent({
                    name: name,
                    module: component,
                    priority: 'high',
                    callback: this.updateLoadedRoutes.bind(this, name)
                });
             }
        })
    }

    render () {
        return (
            <Switch>
                {React.Children.map(this.props.children, this.injectLoadedComponents)}
            </Switch>
        );
    }

    injectLoadedComponents (child) {
        const {lazy, name, component} = child.props;
        let processed = child;

        if (lazy) {
            processed = React.cloneElement(child, {
                component: this.state[name] || null
            });
        }

        return processed;
    }

    updateLoadedRoutes (name, moduleContent) {
        this.setState(Object.assign({}, this.state, {
            [name]: moduleContent
        }));
    }
}

export default LazyRouteLoader;