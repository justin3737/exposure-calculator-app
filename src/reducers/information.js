import * as types from '../constants/ActionTypes';

let initialState = {
    showInfo: false
};

const information = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_INFO:
            return {
                ...state,
                showInfo: !state.showInfo
            };
        default:
            return state;
    }
};

export default information;
