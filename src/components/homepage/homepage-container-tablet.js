import React from 'react';
import PageLayoutTablet from 'components/layout-common/page-layout-tablet';
import HompeageLayoutTablet from 'components/homepage/homepage-layout-tablet';
import homepageData from 'data/homepage-data';

class HomepageContainerTablet extends React.Component {

    render () {
        return (
            <PageLayoutTablet>
                <HompeageLayoutTablet {...homepageData.menu} />
            </PageLayoutTablet>
        );
    }
}

export default HomepageContainerTablet;