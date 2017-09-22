var fs = require('fs');
var _ = require('lodash');

class StyleSplitterPlugin {

    constructor(options) {
        this.options = Object.assign({}, options);
    }

    // NOTE: this is a hacky way to output multiple CSS files based on the configured responsive breakpoints
    // TODO: replace this manual 'fs' approach with one that works better with the webpack compiler reference
    apply (compiler) {
        var breakpoints = this.options.breakpoints;
        var entryFilePath = this.options.entryFilePath;

        compiler.plugin('after-emit', (compilation, done) => {
            var fileContents = fs.readFileSync(entryFilePath, 'utf8');
            var entryFileName = entryFilePath.split('/').reverse()[0].split('.css')[0];
            var entryPath
            var cssClassEntryRegex = /(\.)([\s\S]*?)\}/g;
            var cssClassEntries;
            var separatedStyles = {};

            breakpoints.map(function (breakpoint) {
                separatedStyles[breakpoint] = '';
            });

            cssClassEntries = fileContents.match(cssClassEntryRegex);
            separatedStyles[entryFileName] = fileContents.replace(cssClassEntryRegex, '');

            _.map(cssClassEntries, function (entry, index) {
                var breakpointType = entryFileName;

                _.map(breakpoints, function (breakpoint) {
                    if (_.includes(entry, breakpoint)) {
                        breakpointType = breakpoint;
                    }
                });

                separatedStyles[breakpointType] += (entry + '\n');
            }, this);

            _.each(separatedStyles, function (styles, name) {
                fs.writeFileSync(`./build/${name}.css`, styles);
            })

            done();
        });
    }
}

module.exports = StyleSplitterPlugin;