import { getDataAPI, postDataAPI, deleteDataAPI, putDataAPI, tokenUser } from '../../utils/fetchData';
import { successMessage, errorMessage } from '../../utils/toast';
import { GLOBALTYPES } from './globalTypes';



const token = `Bearer ${tokenUser}`

export const createMeet = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI('auth/sessions', data, token);
        if (res.status === 200) {
            successMessage(res.data[0]);
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        errorMessage("لطفا دوباره تلاش کنید");
    }
}

export const getMeets = () => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await getDataAPI('auth/sessions', token);
        dispatch({ type: GLOBALTYPES.GET_MEETS, payload: { meets: res.data.sessions } })
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        dispatch({ type: GLOBALTYPES.GET_MEETS, payload: { meets: [] } })
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        errorMessage("لطفا دوباره تلاش کنید");
    }
}


export const deleteMeet = id => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await deleteDataAPI(`auth/sessions/${id}`, token);
        if (res.status === 200) {
            successMessage(res.data);
            dispatch({ type: GLOBALTYPES.DELETE_MEET, payload: { id } });
        }
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        errorMessage("لطفا دوباره تلاش کنید");
    }
};