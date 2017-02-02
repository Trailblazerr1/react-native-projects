import { combineReducers } from 'redux';
import MovieReducer from './movieReducer';
import SelectReducer from './selectReducer';

export default combineReducers({
    mlist: MovieReducer,
    slectedMovie: SelectReducer
});

//export default list : 'Janet';
