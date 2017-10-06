import injectCss from 'lib/inject-css';
import asyncLoadPriorityData from 'data/async-load-priority-data';

export default (settings) => {
    const {name, module, priority, callback} = settings;

    setTimeout(() => {
        injectCss(name);
        module((moduleContent) => {
            if (callback) {
                callback(moduleContent.default || moduleContent);
            }
        });
    }, asyncLoadPriorityData[priority] || 0);
}
