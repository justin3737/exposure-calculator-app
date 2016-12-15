import React, { Component } from 'react';
import Calculator from './containers/calculator';

export default class Root extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Calculator />
            </div>
        );
    };
};