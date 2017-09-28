import React from 'react';
import PageLayoutMobile from 'components/layout-common/page-layout-mobile';
import HompageLayoutMobile from 'components/homepage/homepage-layout-mobile';
import homepageData from 'data/homepage-data';
import {zip, flatten} from 'lodash';

class HomepageMobileContainer extends React.Component {

    render () {
        return (
            <PageLayoutMobile>
                <HompageLayoutMobile {...this.getMobileProps()} />
            </PageLayoutMobile>
        );
    }

    getMobileProps () {
        return {
            menuOptions: flatten(zip(homepageData.menu.options, homepageData.menu.actions)),
            // TODO: move this to data/homepage/mobile or data/mobile-data
            offerOptions: [
                {
                    title: 'Title 1',
                    description: 'example description lorem ipsum'
                },
                {
                    title: 'Title 2',
                    description: 'example description lorem ipsum'
                },
                {
                    title: 'Title 3',
                    description: 'example description lorem ipsum'
                },
                {
                    title: 'Title 4',
                    description: 'example description lorem ipsum'
                }
            ]
        };
    }
}

export default HomepageMobileContainer;