import * as types from '../constants/ActionTypes';
import expdata from './expdata';

let initialState = {
    lock   : false,
    gotoId : 0,
    expdata
};

const calculator = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_LOCK:
            return {
                ...state,
                lock  : !state.lock,
                gotoId: state.gotoId+=1
            };
        default:
            return state;
    };
};

export default calculator;
