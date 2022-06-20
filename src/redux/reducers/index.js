import { combineReducers } from 'redux';

// ? reducers
import auth from './authReducer';
import global from './publicReducer';
import categories from './categoriesReducer';
import contacts from './contactsReducer';


export default combineReducers({
    auth,
    global,
    categories,
    contacts
})