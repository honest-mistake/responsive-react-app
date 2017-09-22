let injectedStyles = {};

export default (fileName) => {
    let link;

    if (!injectedStyles[fileName]) {
        injectedStyles[fileName] = true;
        link = document.createElement("link");
        link.href = `${fileName}.css`;
        link.type = 'text/css';
        link.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
}