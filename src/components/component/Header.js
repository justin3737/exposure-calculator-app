import React, { Component } from 'react';
import classnames from 'classnames';

export default class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="header">
                <h1>exposure-calculator-app</h1>
                <i className="time"></i>
            </div>
        );
    };
};
