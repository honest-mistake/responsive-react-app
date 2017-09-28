import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppContainer from 'components/app-container';
import Responsive from 'components/responsive';
import RoutesMobile from 'bundle-loader?lazy&name=mobile-view!components/routes/routes-mobile';
import RoutesTablet from 'bundle-loader?lazy&name=tablet-view!components/routes/routes-tablet';
import RoutesDesktop from 'bundle-loader?lazy&name=desktop-view!components/routes/routes-desktop';

const routes = (
    <BrowserRouter>
        <AppContainer>
            <Responsive renderConfig={getRenderConfig()} />
        </AppContainer>
    </BrowserRouter>
);

function getRenderConfig() {
    return {
        mobile: {name: 'mobile-view', component: RoutesMobile},
        tablet: {name: 'tablet-view', component: RoutesTablet},
        desktop: {name: 'desktop-view', component: RoutesDesktop}
    };
}

export default routes;
