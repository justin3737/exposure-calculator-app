import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class Icon extends Component {
    static PropTypes = {
        name      : PropTypes.string.isRequired,
        isShow    : PropTypes.bool,
        onClick   : PropTypes.func
    }
    static defaultProps = {
        isShow   : true,
        onClick  : {}
    }
    constructor() {
        super();
    }
    render() {
        const { onClick, name, isShow } = this.props;
        return (
            <a  href="javascript:;"
                onClick={onClick}
                className={classnames({"icon-wrap":true, "hide": !isShow})}>
                    <i className={classnames({'icon':true, [name]: true})}></i>
            </a>
        );
    };
};
