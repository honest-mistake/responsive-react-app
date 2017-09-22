import classnames from 'classnames';
import breakpointData from '../bootstrap/data/responsive-breakpoints-data';
import {reduce, set} from 'lodash';

// note: no longer used since chunking based off of responsive route. We can probably delete this
export default (baseClass, props) => {
    const {type} = props;

    return classnames(baseClass, constructModifiers(baseClass, type));
}

function constructModifiers (baseClass, type) {
    return reduce(breakpointData.types, (classes, breakpoint) => {
        return set(classes, `${baseClass}_${breakpoint}`, (breakpoint === type));
    }, {});
}