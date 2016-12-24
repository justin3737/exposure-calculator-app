import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import classnames from 'classnames';

import { toggleLock, gotoSlick } from 'actions';
import Header from '../component/Header';
import Slider from '../component/Slider';
import Footer from '../component/Footer';

import * as helps from '../../helper/index';

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
    render() {
        let { lock, expdata, exp } = this.props;
        console.log(helps.countEV(exp));
        return (
            <div id="app-wrap" className="container">
                <Header />
                <Slider 
                    name="Shutter" 
                    changeId={this._changeId} 
                    data={expdata}
                    exp={exp}
                    isDisabled={lock}/>
                <Slider 
                    name="ISO" 
                    changeId={this._changeId}
                    data={expdata} />
                <Slider 
                    name="Aperture" 
                    changeId={this._changeId} 
                    data={expdata} />
                <Footer 
                    lock={lock} 
                    onClick={this._onToggleLockBtn} />
            </div>
        );
    };
};

Calculator.propTypes = {
    lock       : PropTypes.bool.isRequired,
    toggleLock : PropTypes.func.isRequired,
    gotoSlick  : PropTypes.func.isRequired,
    expdata    : PropTypes.object.isRequired,
    exp        : PropTypes.object.isRequired
};

export default connect(
    state => ({
        lock   : state.calculator.lock,
        exp    : state.calculator.exp,
        expdata: state.calculator.expdata
    }),
    dispatch => bindActionCreators({
        toggleLock,
        gotoSlick
    }, dispatch)
)(Calculator);
