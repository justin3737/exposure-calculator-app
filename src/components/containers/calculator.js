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
        let { lock } = this.props;
        return (
            <div id="app-wrap" className="container">
                <Header />
                <Slider name="Shutter" isDisabled={lock}/>
                <Slider name="ISO" />
                <Slider name="Aperture" />
                <Footer lock={lock} onClick={this._onToggleLockBtn} />
            </div>
        );
    };
};

Calculator.propTypes = {
    lock       : PropTypes.bool.isRequired,
    toggleLock : PropTypes.func.isRequired
};

export default connect(
    state => ({
        lock : state.calculator.lock
    }),
    dispatch => bindActionCreators({
        toggleLock,
    }, dispatch)
)(Calculator);