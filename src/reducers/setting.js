import * as types from '../constants/ActionTypes';
import infodata from './infodata';

let def_Language  = 'ZH-TW',
    initialState = {
        showInfo: false,
        language: def_Language,
        infodata: infodata[def_Language]
    };

const setting = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_INFO:
            return {
                ...state,
                showInfo: !state.showInfo
            };
        case types.CHANGE_LANGUAGE:
            let lang = (action.language.toUpperCase()===def_Language)?def_Language:'EN-US';
            return {
                ...state,
                language: lang,
                infodata: infodata[lang]
            }
        default:
            return state;
    }
};

export default setting;
