import { combineReducers } from 'redux';
import MovieReducer from './movieReducer';

export default combineReducers({
    list: MovieReducer
});

//export default list : 'Janet';
