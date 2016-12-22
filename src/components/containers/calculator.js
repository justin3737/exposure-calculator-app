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
    _changeId = (id) => {
        console.log(id);
    }
    render() {
        let { lock, expdata, gotoId } = this.props;
        return (
            <div id="app-wrap" className="container">
                <Header />
                <Slider 
                    name="Shutter" 
                    changeId={this._changeId} 
                    data={expdata.shutter} 
                    isDisabled={lock}
                    gotoId={gotoId}/>
                <Slider 
                    name="ISO" 
                    changeId={this._changeId} 
                    data={expdata.iso} />
                <Slider 
                    name="Aperture" 
                    changeId={this._changeId} 
                    data={expdata.aperture} />
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
    expdata    : PropTypes.object.isRequired,
    gotoId     : PropTypes.number
};

export default connect(
    state => ({
        lock   : state.calculator.lock,
        gotoId : state.calculator.gotoId,
        expdata: state.calculator.expdata
    }),
    dispatch => bindActionCreators({
        toggleLock,
    }, dispatch)
)(Calculator);
