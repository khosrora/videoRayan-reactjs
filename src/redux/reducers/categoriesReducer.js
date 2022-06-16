import { GLOBALTYPES } from "../actions/globalTypes";




const initialState = {
    allCategories: []
}
const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.GET_CATEGORIES:
            return {
                ...state,
                allCategories: action.payload.data
            }
        default:
            return state;
    }
}
export default categoriesReducer;