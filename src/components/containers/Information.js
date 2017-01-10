import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import Icon from '../component/Icon';

export default class Information extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={classnames({'info-container':true, 'is-open': this.props.isShow})}>
                <Icon name="i-close" onClick={this.props.onClose}/>
            </div>
        );
    };
};