import React from 'react';

function HtmlTemplate (props) {
    return (
        `<html>
            <head>
                <title>test</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <div id="app"></div>
            </body>
        </html>`
    );
}
                // TODO: update things to show a preloaded app
                // <div id="app-preloaded">${props.htmlWebpackPlugin.options.test}</div>

export default HtmlTemplate;