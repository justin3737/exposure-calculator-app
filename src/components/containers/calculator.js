import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleInfo, toggleLock, gotoSlick } from 'actions';
import Information from './Information';
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
    _onClose = () => {
        this.props.toggleInfo();
    }
    render() {
        let { lock, expdata, exp, ev, showInfo, infodata } = this.props;
        return (
            <div id="app-wrap" className="container">
                <Information 
                    data={infodata}
                    isShow={showInfo} 
                    onClose={this._onClose}/>
                <Header 
                    onClick={this._onIconClick} 
                    showInfoIcon={!showInfo}/>
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
    showInfo   : PropTypes.bool.isRequired,
    lock       : PropTypes.bool.isRequired,
    toggleInfo : PropTypes.func.isRequired,
    toggleLock : PropTypes.func.isRequired,
    gotoSlick  : PropTypes.func.isRequired,
    infodata   : PropTypes.array.isRequired,
    expdata    : PropTypes.object.isRequired,
    exp        : PropTypes.object.isRequired,
    ev         : PropTypes.number
};

export default connect(
    state => ({
        expdata : state.calculator.expdata,
        lock    : state.calculator.lock,
        exp     : state.calculator.exp,
        ev      : state.calculator.ev,
        infodata: state.information.infodata,
        showInfo: state.information.showInfo
    }),
    dispatch => bindActionCreators({
        toggleInfo,
        toggleLock,
        gotoSlick
    }, dispatch)
)(Calculator);
