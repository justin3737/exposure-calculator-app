import * as types from '../constants/ActionTypes';
import * as helps from '../helper/index';
import expdata from './expdata';

let initialState = {
    ev        : 13,
    lock      : false,
    expdata,
    exp : {
        Shutter : 0,
        ISO     : 0,
        Aperture: 0
    }
};

const calculator = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_LOCK:
            return {
                ...state,
                lock  : !state.lock
            };
        case types.CHANGE_SLICK_ID:
            let arr  = action.id.split('_'),
                name = arr[0],
                val  = parseInt(arr[1],10),
                _exp = {
                    ...state.exp,
                    [name]: val
                };
            return {
                ...state,
                exp: _exp,
                ev: helps.countEV(_exp)
            };
        default:
            return state;
    };
};

export default calculator;
