import * as types from '../constants/ActionTypes';
import expdata from './expdata';

let initialState = {
    lock   : false,
    expdata
};

const calculator = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_LOCK:
            return {
                ...state,
                lock: !state.lock
            };
        default:
            return state;
    };
};

export default calculator;
