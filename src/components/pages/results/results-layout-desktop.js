import React from 'react';
import PageWidthDesktop from 'components/layout-common/page-width-desktop';

import './results-layout-desktop.scss';

class ResultsLayoutDesktop extends React.Component {

    render () {
        return (
            <div className="results-layout-desktop">
                <PageWidthDesktop className="layout--wrapper">
                    results are here
                </PageWidthDesktop>
            </div>
        );
    }
}

export default ResultsLayoutDesktop;