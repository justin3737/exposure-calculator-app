import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class Information extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={classnames({'hide': !this.props.isShow})}>
                info container
            </div>
        );
    };
};