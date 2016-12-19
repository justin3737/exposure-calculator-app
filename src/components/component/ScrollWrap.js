import React, { PropTypes, Component } from 'react';
import Slider from 'react-slick';

import classnames from 'classnames';
import ArrowBtn from './ArrowBtn';

export default class ScrollWrap extends Component {
    static defaultProps = {
        name      : ''
    }
    static PropTypes = {
        name      : PropTypes.string.isRequired,
        isDisabled: PropTypes.bool
    }
    constructor() {
        super();
    }
    _prev = () => {
        if (this.props.isDisabled) return;
        this.refs.slider.slickPrev();
    }
    _next = () => {
        if (this.props.isDisabled) return;
        this.refs.slider.slickNext();
    }
    _renderChildren = () => {
        let settings = {
            arrows: false,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return(
            <Slider ref='slider' {...settings}>
                <div><div className="item">1/4000</div></div>
                <div><div className="item">F2.8</div></div>
                <div><div className="item">51200</div></div>
                <div><div className="item">1/320</div></div>
                <div><div className="item">10sec</div></div>
                <div><div className="item">F16</div></div>
            </Slider>
        );
    }
    render() {
        const { name, isDisabled } = this.props;
        return (
            <div className="scroll-wrap">
                <h2>{ name }</h2>
                <div className="control-wrap">
                    <ArrowBtn onClick={this._prev} type='left' isDisabled={isDisabled}/>
                    <div className="touchcarousel-container">
                        {this._renderChildren()}
                    </div>
                    <ArrowBtn onClick={this._next} type='right' isDisabled={isDisabled}/>
                </div>
            </div>
        );
    };
};
