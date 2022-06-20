import { GLOBALTYPES } from "../actions/globalTypes";




const initialState = {
    allContacts: []
}


const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.GET_CONTACTS:
            return {
                ...state,
                allContacts: action.payload.contacts
            }
        case GLOBALTYPES.ADD_CONTACTS:
            return {
                ...state,
                allContacts: [action.payload.contacts, ...state.allContacts]
            }
        default:
            return state;
    }
}
export default contactsReducer;