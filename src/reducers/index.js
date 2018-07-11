import { combineReducers } from 'redux';
import robotsReducer from './robots';
import searchKeyReducer from './searchKey';

const combinedReducer = combineReducers({
    robots: robotsReducer,
    searchKey: searchKeyReducer
});

export default combinedReducer;
