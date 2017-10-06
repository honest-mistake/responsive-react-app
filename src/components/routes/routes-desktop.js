import React from 'react';
import {Route} from 'react-router-dom';
import LazyRouteLoader from 'components/loaders/lazy-route-loader';
import HomepageContainerDesktop from 'components/pages/homepage/homepage-container-desktop';
import ResultsContainerDesktop from 'bundle-loader?lazy&name=results-page-desktop!components/pages/results/results-container-desktop';

export default class RoutesDesktop extends React.Component {
    render () {
        return (
            <LazyRouteLoader>
                <Route exact path="/" component={HomepageContainerDesktop} />
                <Route exact path="/index.html" component={HomepageContainerDesktop} />
                <Route exact path="/results.html" lazy name="results-page-desktop" component={ResultsContainerDesktop} />
            </LazyRouteLoader>
        );
    }
}
