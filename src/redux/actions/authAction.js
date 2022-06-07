import { postDataAPI } from './../../utils/fetchData';
import { GLOBALTYPES } from './globalTypes';



export const loginUser = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI("login", data);
        console.log(res);
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        console.log(err);
    }
}