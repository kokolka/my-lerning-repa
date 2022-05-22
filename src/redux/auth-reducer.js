import { authAPI } from "../api/api";
import { getErrorLogin } from "./app-reducer";



const SET_USER_DATA = 'SET_USER_DATA';
const SET_OUTPUT = 'SET_OUTPUT';

let initialState = {
    id: null,
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
                id: null,
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

export const meUser = () => (dispatch) => {
    return (
        authAPI.meGetUser()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { email, id, login } = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
                return (response);
            })
            .catch(() => {
                return ('error');
            })
    )
}



export let postLogin = (email, password, rememberMe) => (dispatch) => {
    return (
        authAPI.postLogin(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(meUser());
                } else {
                    dispatch(getErrorLogin(response.data.resultCode, response.data.messages));
                    console.log('resultCode: ' + response.data.resultCode);
                    console.log('email: ' + email);
                    console.log('password: ' + password);
                    console.log('rememberMe: ' + rememberMe);
                }
            })
    )
}
export const deleteLogOut = () => {
    return (dispatch) => {
        authAPI.deleteLogOut().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}
export default authReducer;