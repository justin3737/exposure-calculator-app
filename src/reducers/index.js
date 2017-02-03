import { combineReducers } from 'redux';
import calculator from './calculator';
import setting from './setting';

const rootReducer = combineReducers({
    calculator,
    setting
});

export default rootReducer;
