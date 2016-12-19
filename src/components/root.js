import React, { Component } from 'react';
import Calculator from './containers/Calculator';

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