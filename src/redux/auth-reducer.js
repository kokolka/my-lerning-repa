import { authAPI } from "../api/api";
import { getErrorLogin, resetErrorLogin } from "./app-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_OUTPUT = 'SET_OUTPUT';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload 
                //isAuth: true
            };
        case SET_OUTPUT:
            return {
                ...state,
                userId: null,
                email: null,
                login: null,
                isAuth: false
            };

        default:
            return state; 
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
    return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } };
};
export const setOutput = () => {
    return { type: SET_OUTPUT };
};

export const meUser = () => async (dispatch) => {
    let response = await authAPI.meGetUser();
    //.then(response => {
    if (response.data.resultCode === 0) {
        let { email, id, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
    // })
    // .catch(() => {
    //     return ('error');
    // })
}

export let postLogin = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.postLogin(email, password, rememberMe);
    // .then(response => {
    if (response.data.resultCode === 0) {
        dispatch(meUser());
        dispatch(resetErrorLogin());
    } else {
        dispatch(getErrorLogin(response.data.resultCode, response.data.messages));
    }
    // })
}
export const deleteLogOut = () => {
    return async(dispatch) => {
        let response = await authAPI.deleteLogOut();
        // .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        // })
    }
}
export default authReducer;