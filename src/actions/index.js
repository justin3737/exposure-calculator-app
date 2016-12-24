import * as types from 'constants/ActionTypes';

export const toggleLock = () => {
    return {
        type: types.TOGGLE_LOCK
    };
};

export const gotoSlick = (id) => {
    return {
        type: types.CHANGE_SLICK_ID,
        id
    };
};