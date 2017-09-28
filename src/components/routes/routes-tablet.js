import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomepageContainerTablet from 'components/pages/homepage/homepage-container-tablet';

class NewComponent extends React.Component {
    render () {
        return <div>Tablet test</div>
    }
}

export default class RoutesTablet extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={HomepageContainerTablet} />
                <Route exact path="/index.html" component={HomepageContainerTablet} />
                <Route path="/test.html" component={NewComponent} />
            </Switch>
        );
    }
}