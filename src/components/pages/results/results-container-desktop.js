import React from 'react';
import PageLayoutDesktop from 'components/layout-common/page-layout-desktop';
import ResultsLayoutDesktop from 'components/pages/results/results-layout-desktop';

class HomepageContainerDesktop extends React.Component {

    render () {
        return(
            <PageLayoutDesktop headerType="white">
                <ResultsLayoutDesktop />
            </PageLayoutDesktop>
        );
    }
}

export default HomepageContainerDesktop;