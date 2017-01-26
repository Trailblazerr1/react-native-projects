import { combineReducers } from 'redux';
import LibReducer from './libReducers';

export default combineReducers({
    libraries: LibReducer
});
