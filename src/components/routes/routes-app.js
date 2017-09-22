import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppContainer from 'components/app-container';
import Responsive from 'components/responsive';
import RoutesMobile from 'bundle-loader?lazy&name=routes-mobile!components/routes/routes-mobile';
import RoutesTablet from 'bundle-loader?lazy&name=routes-tablet!components/routes/routes-tablet';
import RoutesDesktop from 'bundle-loader?lazy&name=routes-desktop!components/routes/routes-desktop';

const routes = (
    <BrowserRouter>
        <AppContainer>
            <Responsive renderConfig={getRenderConfig()} />
        </AppContainer>
    </BrowserRouter>
);

function getRenderConfig() {
    return {
        mobile: {name: 'routes-mobile', component: RoutesMobile},
        tablet: {name: 'routes-tablet', component: RoutesTablet},
        desktop: {name: 'routes-desktop', component: RoutesDesktop}
    };
}

export default routes;
