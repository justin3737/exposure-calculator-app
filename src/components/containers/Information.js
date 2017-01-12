import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import Icon from '../component/Icon';
import InfoSlider from '../component/InfoSlider';

export default class Information extends Component {
    static PropTypes = {
        isShow    : PropTypes.bool.isRequired,
        onClose   : PropTypes.func.isRequired,
        data      : PropTypes.array.isRequired
    }
    constructor() {
        super();
    }
    render() {
        const { isShow, onClose, data } = this.props;
        return (
            <div className={classnames({'info-container':true, 'is-open': isShow})}>
                <Icon name="i-close" onClick={onClose}/>
                <InfoSlider data={data}/>
            </div>
        );
    };
};