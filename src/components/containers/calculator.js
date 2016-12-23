import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import classnames from 'classnames';

import { toggleLock, gotoSlick } from 'actions';
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
    render() {
        let { lock, expdata, gotoId } = this.props;
        return (
            <div id="app-wrap" className="container">
                <Header />
                <Slider 
                    name="Shutter" 
                    changeId={this._changeId} 
                    data={expdata}
                    gotoId={gotoId}
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
        gotoSlick
    }, dispatch)
)(Calculator);
