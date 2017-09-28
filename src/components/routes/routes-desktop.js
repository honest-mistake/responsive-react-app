import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomepageContainerDesktop from 'components/pages/homepage/homepage-container-desktop';
import ResultsContainerDesktop from 'components/pages/results/results-container-desktop';

export default class RoutesDesktop extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={HomepageContainerDesktop} />
                <Route exact path="/index.html" component={HomepageContainerDesktop} />
                <Route path="/results.html" component={ResultsContainerDesktop} />
            </Switch>
        );
    }
}
