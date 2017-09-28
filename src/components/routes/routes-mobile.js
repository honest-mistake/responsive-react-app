import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomepageContainerMobile from 'components/pages/homepage/homepage-container-mobile';

class NewComponent extends React.Component {
    render () {
        return <div>Mobile test</div>
    }
}

export default class RoutesMobile extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={HomepageContainerMobile} />
                <Route exact path="/index.html" component={HomepageContainerMobile} />
                <Route path="/test.html" component={NewComponent} />
            </Switch>
        );
    }
}