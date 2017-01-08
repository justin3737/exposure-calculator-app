import React, { Component } from 'react';
import Icon from './Icon';

export default class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="header">
                <Icon name='i-info' onClick={this.props.onClick}/>
                <h1>exposure-calculator-app</h1>
                <i className="time"></i>
            </div>
        );
    };
};
