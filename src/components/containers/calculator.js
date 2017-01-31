import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleInfo, toggleCount, gotoSlick, setLanguage } from 'actions';
import Information from './Information';
import Header from '../component/Header';
import Slider from '../component/Slider';
import Footer from '../component/Footer';

class Calculator extends Component {
    constructor() {
        super();
    }
    componentWillMount() {
        this.props.setLanguage(navigator.language);
    }
    _onToggleCountBtn = () => {
        this.props.toggleCount();
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
        let { count, expdata, exp, ev, showInfo, infodata } = this.props;
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
                    isDisabled={count}/>
                <Slider name="ISO" 
                    changeId={this._changeId}
                    data={expdata} />
                <Slider name="Aperture" 
                    changeId={this._changeId} 
                    data={expdata} />
                <Footer count={count} 
                    onClick={this._onToggleCountBtn} />
            </div>
        );
    };
};

Calculator.propTypes = {
    showInfo   : PropTypes.bool.isRequired,
    count      : PropTypes.bool.isRequired,
    toggleInfo : PropTypes.func.isRequired,
    toggleCount: PropTypes.func.isRequired,
    gotoSlick  : PropTypes.func.isRequired,
    setLanguage: PropTypes.func.isRequired,
    infodata   : PropTypes.array.isRequired,
    expdata    : PropTypes.object.isRequired,
    exp        : PropTypes.object.isRequired,
    ev         : PropTypes.number
};

export default connect(
    state => ({
        expdata : state.calculator.expdata,
        count   : state.calculator.count,
        exp     : state.calculator.exp,
        ev      : state.calculator.ev,
        infodata: state.information.infodata,
        showInfo: state.information.showInfo
    }),
    dispatch => bindActionCreators({
        toggleInfo,
        toggleCount,
        gotoSlick,
        setLanguage
    }, dispatch)
)(Calculator);
