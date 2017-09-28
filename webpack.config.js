// TODO: get the babelrc ironed out so we can switch to ES6 imports
const _ = require('lodash');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const path = require('path');
const PathToHtmlPlugin = require('./plugins/path-to-html-plugin');
const StyleSplitterPlugin = require('./plugins/style-splitter-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

let config = {
    entry: {
        main: './src/app/main.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.scss'],
        alias: {
            data: path.resolve(__dirname, 'src/bootstrap/data/'),
            components: path.resolve(__dirname, 'src/components/'),
            lib: path.resolve(__dirname, 'src/lib/'),
            scss: path.resolve(__dirname, 'src/scss/')
        }
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractCssChunksPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader',
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new CleanPlugin(['build']),
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new ExtractCssChunksPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'data',
            minChunks: ({resource}) => /data/.test(resource)
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // }),
        // new StaticSiteGeneratorPlugin({
        //     paths: ['index.html']
        // }),
        new PathToHtmlPlugin({
            paths: ['index', 'results', 'test'],
            template: './src/components/html-template.js'
        }),
        // new StyleSplitterPlugin({
        //     breakpoints: ['mobile', 'tablet', 'desktop'],
        //     entryFilePath: './build/main.css'
        // })
    ]
};

// Build Flags
if (process.env.NODE_ENV === 'development') {
    config.watch = true;
    config.plugins.push(new BrowserSyncPlugin({
        host: 'localhost',
        port: 8090,
        server: {baseDir: 'build'}
    }));
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {warnings: false},
        output: {comments: false}
    }));
    config.plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    );
}

module.exports = config;