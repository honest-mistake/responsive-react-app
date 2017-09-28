import React from 'react';

// TODO: determine if we can require in the css / sass file and not hard-code this
export default class ResetStyleLoader extends React.Component {

    render () {
        return (
            <style>{`
                * {
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    padding: 0;
                    font: 16px/1 Arial;
                }

                a,
                button,
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                li,
                ol,
                p,
                ul {
                    font-family: inherit;
                    margin: 0;
                    padding: 0;
                }

                ul {
                    list-style-type: none;
                }

                img {
                    border: 0;
                }
            `}</style>
        );
    }
}