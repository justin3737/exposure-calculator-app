import React, { Component } from 'react';
import Slider from 'react-slick';

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
        // <li className="item">1/4000</li>
        let settings = {
            arrows: false,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return(
            <Slider {...settings}>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
            </Slider>
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
