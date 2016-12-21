import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import classnames from 'classnames';

import { toggleLock } from 'actions';
import Slider from '../component/Slider';

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
                <div className="header">
                    <h1>exposure-calculator-app</h1>
                    <i className="time"></i>
                </div>
                <Slider name="Shutter" isDisabled={lock}/>
                <Slider name="ISO" />
                <Slider name="Aperture" />
                <div className="footer">
                    <a  href="javascript:;" 
                        onClick={this._onToggleLockBtn}
                        className={classnames({'btn':true,'btn-full':true,'is-active':lock})} >
                            <span>{(lock)?'lock':'unlock'}</span>
                    </a>
                </div>
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
