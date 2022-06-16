import { getDataAPI, postDataAPI, tokenUser } from '../../utils/fetchData';
import { successMessage, errorMessage } from '../../utils/toast';
import { GLOBALTYPES } from './globalTypes';


const token = `Bearer ${tokenUser}`

export const getCategories = () => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await getDataAPI('auth/categories', token);
        dispatch({ type: GLOBALTYPES.GET_CATEGORIES, payload: { data: res.data.categories } });
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        dispatch({ type: GLOBALTYPES.GET_CATEGORIES, payload: { data: [] } });
        errorMessage("لطفا دوباره تلاش کنید");
    }
}

export const createCategory = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI('auth/categories', data, token);
        if (res.status === 200) successMessage(res.data[0]);
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        errorMessage("لطفا دوباره تلاش کنید");
    }
}