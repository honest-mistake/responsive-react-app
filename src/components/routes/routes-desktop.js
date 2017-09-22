import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomepageContainerDesktop from 'components/homepage/homepage-container-desktop';

class NewComponent extends React.Component {
    render () {
        return <div>Desktop test</div>
    }
}

export default class RoutesDesktop extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={HomepageContainerDesktop} />
                <Route exact path="/index.html" component={HomepageContainerDesktop} />
                <Route path="/test.html" component={NewComponent} />
            </Switch>
        );
    }
}
