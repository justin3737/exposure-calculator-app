import React, { PropTypes, Component } from 'react';

import classnames from 'classnames';
import Slicker from 'react-slick';

export default class InfoSlider extends Component {
    static PropTypes = {
        data      : PropTypes.array.isRequired
    }
    constructor() {
        super();
    }
    componentDidUpdate() {
        //when updated, go to first view
        let _this = this;
        setTimeout(()=>{
            _this.refs.slider.slickGoTo(0);  
        },500);
    }
    render() {
        const { data } = this.props;
        let settings = {
            arrows: false,
            dots: true,
            infinite: false,
            draggable: true, //for window drag event
            swipe: true,     //for mobile swipe event
            speed: 350,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return(
            <Slicker ref="slider" {...settings}>
                {
                    data.map((val, index) => (
                        <div data-index={index} 
                            key={index} 
                            className={classnames({"info-wrap": true, ["info"+(index+1)]: true})}>
                            <div className="info-cover"></div>
                            <h2>{val.title}</h2>
                            <h3>{val.desc}</h3>
                        </div>
                    ))
                }
            </Slicker>
        );
    };
};