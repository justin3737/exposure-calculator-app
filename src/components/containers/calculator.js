import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import classnames from 'classnames';

import { toggleInfo, toggleLock, gotoSlick } from 'actions';
import Header from '../component/Header';
import Slider from '../component/Slider';
import Footer from '../component/Footer';

class Calculator extends Component {
    constructor() {
        super();
    }
    _onToggleLockBtn = () => {
        this.props.toggleLock();
    }
    _changeId = (id) => {
        this.props.gotoSlick(id);
    }
    _onIconClick = () => {
        this.props.toggleInfo();
    }
    render() {
        let { lock, expdata, exp, ev } = this.props;
        return (
            <div id="app-wrap" className="container">
                <Header onClick={this._onIconClick}/>
                <Slider name="Shutter" 
                    changeId={this._changeId}
                    data={expdata}
                    exp={exp}
                    isDisabled={lock}/>
                <Slider name="ISO" 
                    changeId={this._changeId}
                    data={expdata} />
                <Slider name="Aperture" 
                    changeId={this._changeId} 
                    data={expdata} />
                <Footer lock={lock} 
                    onClick={this._onToggleLockBtn} />
            </div>
        );
    };
};

Calculator.propTypes = {
    lock       : PropTypes.bool.isRequired,
    toggleInfo : PropTypes.func.isRequired,
    toggleLock : PropTypes.func.isRequired,
    gotoSlick  : PropTypes.func.isRequired,
    expdata    : PropTypes.object.isRequired,
    exp        : PropTypes.object.isRequired,
    ev         : PropTypes.number
};

export default connect(
    state => ({
        expdata: state.calculator.expdata,
        lock   : state.calculator.lock,
        exp    : state.calculator.exp,
        ev     : state.calculator.ev
    }),
    dispatch => bindActionCreators({
        toggleInfo,
        toggleLock,
        gotoSlick
    }, dispatch)
)(Calculator);
