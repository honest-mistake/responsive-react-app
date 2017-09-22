const HtmlWebpackPlugin = require('html-webpack-plugin');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const evaluate = require('eval');
// TODO: update this take a path to the routes file and derive the paths array from that file
// TODO: replace / delete this plugin once existing packages can support react-router @ 4.0.0+
class PathToHtmlPlugin {

    constructor(options) {
        this.options = Object.assign({}, options);
    }

    apply(compiler) {
        const self = this;

        // compiler.plugin('emit', function (compiler, done) {
        //     // // const test = compiler.getStats().toJson();
        //     // console.info(test.assetsByChunkName)
        //     // console.info(compiler.assets['homepage-desktop.js'].source())
        //     const ComponentSource = compiler.assets['homepage-desktop.js'].source();
        //     const Component = evaluate(ComponentSource, self)
        //     // console.info(Component)
        //     // // console.info(ReactDOMServer.renderToString(React.createElement(eval(Component).default)))
        //     done();
        // });

        // console.log(Object.keys(compiler))
        // const Test = ReactDOMServer.renderToString(React.createElement('div', null, ['hello world']))

        this.options.paths.map(function (pathName) {
            compiler.apply(new HtmlWebpackPlugin(Object.assign({}, this.options, {
                filename: pathName + '.html',
            })));
        }, this);
    }
}

module.exports = PathToHtmlPlugin;