import * as types from '../constants/ActionTypes';
import infodata from './infodata';

let defLanguage  = "ZH_TW",
    initialState = {
        showInfo: false,
        language: defLanguage,
        infodata: infodata[defLanguage]
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
