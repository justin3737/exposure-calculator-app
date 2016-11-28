import React, { Component } from 'react';

export default class ScrollWrap extends Component {
    static props = {
        name: ''
    }
    static defaultProps = {
        name: React.PropTypes.string
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
        const {name} = this.props;
        return (
            <div className="scroll-wrap">
                <h2>{name}</h2>
                <div className="control-wrap">
                    <a href="javascript:;" className="btn btn-arrow arrow-left"></a>
                    <ul className="touchcarousel-container">
                        {this._renderChildren()}
                    </ul>
                    <a href="javascript:;" className="btn btn-arrow arrow-right"></a>
                </div>
            </div>
        );
    };
};
