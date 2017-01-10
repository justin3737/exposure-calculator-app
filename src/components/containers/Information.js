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
                <div className="info-wrap info1">
                    <div className="info-cover"></div>
                    <h2>拍攝與計算</h2>
                    <h3>請拍攝一張照片，並且把光圈、快門、ISO的數據輸入到APP內</h3>
                </div>
            </div>
        );
    };
};