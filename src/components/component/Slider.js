import React, { PropTypes, Component } from 'react';

import Slicker from 'react-slick';
import Arrow from './Arrow';

export default class Slider extends Component {
    static defaultProps = {
        name      : '',
        data      : {},
        exp       : {},
        isDisabled: false
    }
    static PropTypes = {
        name      : PropTypes.string.isRequired,
        changeId  : PropTypes.func.isRequired,
        data      : PropTypes.object.isRequired,
        exp       : PropTypes.object,
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
    _goto = (id) => {
        this.refs.slider.slickGoTo(id);
    }
    _renderChildren = () => {
        const { name, data, changeId, exp, isDisabled } = this.props;
        let _this = this,
            currId = exp[name],
            settings = {
                arrows: false,
                dots: false,
                infinite: false,
                draggable: (isDisabled)?false:true, //for window drag event
                swipe: (isDisabled)?false:true,     //for mobile swipe event
                speed: 350,
                slidesToShow: 1,
                slidesToScroll: 1,
                slickGoTo: exp[name],
                afterChange: function (currentSlide) {
                    if (!isDisabled) 
                        changeId(name + '_' + currentSlide);   
                }  
            };
        return(
            <Slicker ref='slider' {...settings}>
                {
                    data[name].map((val, index) => (
                        <div data-index={index} 
                            key={name + index} 
                            className="item">
                            {val}
                        </div>
                    ))
                }
            </Slicker>
        );
    }
    render() {
        const { name, isDisabled } = this.props;
        return (
            <div className="scroll-wrap">
                <h2>{name}</h2>
                <div className="control-wrap">
                    <Arrow type='left'
                        onClick={this._prev}
                        isDisabled={isDisabled}/>
                    <div className="touchcarousel-container">
                        {this._renderChildren()}
                    </div>
                    <Arrow type='right'
                        onClick={this._next} 
                        isDisabled={isDisabled}/>
                </div>
            </div>
        );
    };
};
