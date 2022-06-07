import { combineReducers } from 'redux';

// ? reducers
import auth from './authReducer';
import global from './publicReducer';


export default combineReducers({
    auth , 
    global
})