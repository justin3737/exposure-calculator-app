import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class Footer extends Component {
    static defaultProps = {
        lock      : false
    }
    static PropTypes = {
        lock   : PropTypes.bool,
        onClick: PropTypes.func
    }
    constructor() {
        super();
    }
    render() {
        const { onClick, lock } = this.props;
        return (
            <div className="footer">
                <a  href="javascript:;"
                    onClick={onClick}
                    className={classnames({'btn':true,'btn-full':true,'is-active':lock})} >
                        <span>{(lock)?'lock':'unlock'}</span>
                </a>
            </div>
        );
    };
};
