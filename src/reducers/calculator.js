import * as types from '../constants/ActionTypes';
import expdata from './expdata';

let initialState = {
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
            let arr = action.id.split('_'),
                name = arr[0],
                val = parseInt(arr[1],10);
            return {
                ...state,
                exp: {
                    ...state.exp,
                    [name]: val
                }
            };
        default:
            return state;
    };
};

export default calculator;
