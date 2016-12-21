import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class Arrow extends Component {
    static defaultProps = {
        type      : 'left'
    }
    static PropTypes = {
        type      : PropTypes.string.isRequired,
        isDisabled: PropTypes.bool,
        onClick   : PropTypes.func
    }
    constructor() {
        super();
    }
    render() {
        const { onClick, type, isDisabled } = this.props;
        return (
            <a  href="javascript:;" 
                onClick={onClick}
                className={classnames({'btn':true,'btn-arrow':true, ['arrow-'+ type] :true, 'is-disabled':isDisabled})}>
            </a>
        );
    };
};
