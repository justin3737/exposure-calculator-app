import React, { PropTypes, Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleLock } from 'actions';
import ScrollWrap from '../component/ScrollWrap';

class Root extends Component {
    _onClickBtn = () => {
        this.props.toggleLock();
    }
    render() {
        return (
            <div id="app-wrap" className="container">
                <div className="header">
                    <h1>exposure-calculator-app</h1>
                    <i className="time"></i>
                </div>
                <ScrollWrap name="Shutter" />
                <ScrollWrap name="ISO" />
                <ScrollWrap name="Aperture" />
                <div className="footer">
                    <a href="javascript:;" className="btn btn-full" onClick={this._onClickBtn}>
                        <span>{(this.props.lock)?'lock':'unlock'}</span>
                    </a>
                </div>
            </div>
        );
    };
};

Root.propTypes = {
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
)(Root);