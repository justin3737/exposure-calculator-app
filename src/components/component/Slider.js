import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

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
        this.refs.slider.slickPrev();
    }
    _next = () => {
        this.refs.slider.slickNext();
    }
    _goto = (id) => {
        this.refs.slider.slickGoTo(id);
    }
    _renderChildren = () => {
        const { name, data, changeId, exp } = this.props;
        let _this = this,
            settings = {
                arrows: false,
                dots: false,
                infinite: false,
                speed: 350,
                slidesToShow: 1,
                slidesToScroll: 1,
                slickGoTo:exp[name],
                beforeChange : function (currentSlide, nextSlide) {
                    // if (_this.props.isDisabled && _this._rollback === -1) {
                    //     _this._rollback = currentSlide;
                    // }
                },
                afterChange: function (currentSlide, nextSlide) {
                    // if (_this.props.isDisabled && _this._rollback !== -1) {
                    //     _this._goto(_this._rollback);
                    // }
                    if (!_this.props.isDisabled) 
                        changeId(name + '_' + currentSlide);   
                }  
            };
        //_this._rollback = -1; 
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
