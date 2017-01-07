import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class Icon extends Component {
    static PropTypes = {
        name      : PropTypes.string.isRequired,
        onClick   : PropTypes.func
    }
    constructor() {
        super();
    }
    render() {
        const { onClick, name } = this.props;
        return (
            <a  href="javascript:;"
                onClick={onClick}
                className="icon-wrap">
                    <i className={classnames({'icon':true, [name]: true})}></i>
            </a>
        );
    };
};
