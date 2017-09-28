import React from 'react';
import PageLayoutDesktop from 'components/layout-common/page-layout-desktop';
import HomepageLayoutDesktop from 'components/homepage/homepage-layout-desktop';

class HomepageContainerDesktop extends React.Component {

    render () {
        return(
            <PageLayoutDesktop>
                <HomepageLayoutDesktop />
            </PageLayoutDesktop>
        );
    }
}

export default HomepageContainerDesktop;