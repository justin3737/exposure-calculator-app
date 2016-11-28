import React, { Component } from 'react';

import ScrollWrap from '../component/ScrollWrap';

export default class Root extends Component {
    render() {
        return (
            <div id="app-wrap" className="container">
                <div className="header">
                    <h1>exposure-calculator-app</h1>
                    <i className="time"></i>
                </div>
                <ScrollWrap name="Shutter" />
                <ScrollWrap name="ISO" />
                <ScrollWrap name="Aperture" />
                <div className="footer">
                    <a href="javascript:;" className="btn btn-full">
                        <span>lock</span>
                    </a>
                </div>
            </div>
        );
    };
};
