import * as types from '../constants/ActionTypes';

let initialState = {
    lock : false
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
