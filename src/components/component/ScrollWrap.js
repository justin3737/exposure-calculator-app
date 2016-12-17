import React, { Component } from 'react';
import classnames from 'classnames';

export default class ScrollWrap extends Component {
    static props = {
        name      : '',
        isDisabled: false
    }
    static defaultProps = {
        name      : React.PropTypes.string.isRequired,
        isDisabled: React.PropTypes.bool,
    }
    constructor() {
        super();
    }
    _renderChildren = () => {
        return(
            <li className="item">1/4000</li>
        );
    }
    render() {
        const { name, isDisabled } = this.props;
        return (
            <div className="scroll-wrap">
                <h2>{ name }</h2>
                <div className="control-wrap">
                    <a  href="javascript:;" 
                        className={classnames({'btn':true,'btn-arrow':true,'arrow-left':true, 'is-disabled':!isDisabled})}>
                    </a>
                    <ul className="touchcarousel-container">
                        {this._renderChildren()}
                    </ul>
                    <a  href="javascript:;" 
                        className={classnames({'btn':true,'btn-arrow':true,'arrow-right':true, 'is-disabled':!isDisabled})}>
                    </a>
                </div>
            </div>
        );
    };
};
