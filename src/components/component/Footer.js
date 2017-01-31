import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class Footer extends Component {
    static defaultProps = {
        count   : false
    }
    static PropTypes = {
        count   : PropTypes.bool,
        onClick: PropTypes.func
    }
    constructor() {
        super();
    }
    render() {
        const { onClick, count } = this.props;
        return (
            <div className="footer">
                <a  href="javascript:;"
                    onClick={onClick}
                    className={classnames({'btn':true,'btn-full':true,'is-active':count})} >
                        <span>{(count)?'reset':'count'}</span>
                </a>
            </div>
        );
    };
};
