import { errorMessage, successMessage } from '../../utils/toast';
import { postDataAPI } from './../../utils/fetchData';
import { GLOBALTYPES } from './globalTypes';
import Cookies from 'js-cookie';


export const loginUser = data => async dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        const res = await postDataAPI("auth/login", data);
        if (res.data.access_token) {
            successMessage("ورود موفقیت آمیز بود");
            Cookies.set('firstLogin', JSON.stringify(res.data.user));
        }
        dispatch({ type: GLOBALTYPES.USER, payload: { data: res.data.user, access_token: res.data.access_token } })
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        if (err.response.status) errorMessage("لطفا ابتدا ثبت نام کنید");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}

export const refreshUser = () => async dispatch => {
    const user =  JSON.parse(Cookies.get("firstLogin"));
    try {
        if(user){
            dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
            dispatch({ type: GLOBALTYPES.USER, payload: { data : user } })
            dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
        }
    } catch (err) {
        if (err.response.status) errorMessage("لطفا ابتدا وارد وب سایت شوید");
        dispatch({ type: GLOBALTYPES.USER, payload: { data : null } })
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}

export const logOut= () => dispatch => {
    try {
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: true } });
        Cookies.remove('firstLogin');
        dispatch({ type: GLOBALTYPES.USER, payload: { data : null } });
        errorMessage("عملیات خروج انجام شد");
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    } catch (err) {
        console.log(err);
        dispatch({ type: GLOBALTYPES.LOADING, payload: { load: false } });
    }
}