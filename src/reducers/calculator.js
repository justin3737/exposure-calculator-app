import * as types from '../constants/ActionTypes';
import expdata from './expdata';

let initialState = {
    ev        : 13,
    count     : false,
    expdata,
    exp : {
        Shutter : 0,
        ISO     : 0,
        Aperture: 0
    },
    err    : false,
    errCode: 0
};

const calculator = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_COUNT:
            return {
                ...state,
                count : !state.count
            };
        case types.CHANGE_SLICK_ID:
            let arr  = action.id.split('_'),
                name = arr[0],
                val  = parseInt(arr[1],10);
            if (!state.count) {
                let _exp = {
                        ...state.exp,
                        [name]: val
                    };
                return {
                    ...state,
                    exp: _exp,
                    ev : countEV(_exp)
                };
            } else {
                let _newexp = getNewExp(state.exp, state.ev, name, val),
                    _minShutter = 0,
                    _maxShutter = expdata['Shutter'].length;

                if (_newexp['Shutter'] >= _maxShutter || _newexp['Shutter'] < _minShutter) {
                    return {
                        ...state,
                        err : true,
                        errCode: 100
                    };
                };
                return {
                    ...state,
                    exp    : _newexp,
                    err    : false,
                    errCode: 0
                };
            }
        default:
            return state;
    };
};

export default calculator;

const countEV = (exp) => {
    let shutterTable = [13,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16];
    return shutterTable[exp.Shutter] + exp.Aperture + exp.ISO -1;
};

const getNewExp = (exp, ev, name, val) => {
    let _inc = exp[name] - val,
        _exp = {
            ...exp,
            [name]: val
        };
    if (_inc === 0) return _exp;
    if (name === 'ISO') {
        if (_inc > 0) {
            _exp.Shutter += 1;
        } else {
            _exp.Shutter -= 1;
        }
    } else {
        if (_inc > 0) {
            _exp.Shutter -= 1;
        } else {
            _exp.Shutter += 1;
        }
    }
    return _exp;
};