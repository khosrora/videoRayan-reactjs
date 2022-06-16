import { combineReducers } from 'redux';

// ? reducers
import auth from './authReducer';
import global from './publicReducer';
import categories from './categoriesReducer';


export default combineReducers({
    auth , 
    global , 
    categories
})