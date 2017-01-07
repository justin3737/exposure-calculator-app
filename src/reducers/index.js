import { combineReducers } from 'redux';
import calculator from './calculator';
import information from './information';

const rootReducer = combineReducers({
    calculator,
    information
});

export default rootReducer;
