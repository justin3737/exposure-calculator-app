import React, { PropTypes, Component } from 'react';
import Icon from './Icon';

export default class Header extends Component {
    static PropTypes = {
        showInfoIcon: PropTypes.bool.isRequired,
        onClick     : PropTypes.func.isRequired
    }
    constructor() {
        super();
    }
    render() {
        const { showInfoIcon, onClick } = this.props;
        return (
            <div className="header">
                <Icon isShow={showInfoIcon} name='i-info' onClick={onClick}/>
                <h1>exposure-calculator-app</h1>
                <i className="time"></i>
            </div>
        );
    };
};
