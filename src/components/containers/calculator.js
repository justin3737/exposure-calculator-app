import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import classnames from 'classnames';

import { toggleLock } from 'actions';
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
    render() {
        let { lock, expdata } = this.props;
        return (
            <div id="app-wrap" className="container">
                <Header />
                <Slider name="Shutter" data={expdata.shutter} isDisabled={lock}/>
                <Slider name="ISO" data={expdata.iso} />
                <Slider name="Aperture" data={expdata.aperture} />
                <Footer lock={lock} onClick={this._onToggleLockBtn} />
            </div>
        );
    };
};

Calculator.propTypes = {
    lock       : PropTypes.bool.isRequired,
    toggleLock : PropTypes.func.isRequired,
    expdata    : PropTypes.object.isRequired
};

export default connect(
    state => ({
        lock   : state.calculator.lock,
        expdata: state.calculator.expdata
    }),
    dispatch => bindActionCreators({
        toggleLock,
    }, dispatch)
)(Calculator);
