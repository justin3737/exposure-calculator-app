import * as types from 'constants/ActionTypes';

export const toggleCount = () => {
    return {
        type: types.TOGGLE_COUNT
    };
};

export const gotoSlick = (id) => {
    return {
        type: types.CHANGE_SLICK_ID,
        id
    };
};

export const toggleInfo = () => {
    return {
        type: types.TOGGLE_INFO
    };
};

export const setLanguage = (language) => {
    return {
        type: types.CHANGE_LANGUAGE,
        language
    };
};
