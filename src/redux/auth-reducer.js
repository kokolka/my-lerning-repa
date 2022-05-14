import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

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
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => {
    return { type: SET_USER_DATA, data: { userId, email, login } };
};

export const meUser = () => {
    return (dispatch) => {
        authAPI.meUser().then(data => {
            if (data.resultCode === 0) {
                let { email, id, login } = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
    }
}

export const postLogin = (loginData) => () => {
    authAPI.postLogin(loginData).then(response => {
        if (response.data.resultCode === 0) {
            meUser();
        } 
    })
}
export const deleteLogOut = () => {
    return () => {
        authAPI.deleteLogOut().then(response => {
            if (response.data.resultCode === 0) {
                console.log(response);
                meUser();
            }
        })
    }
}
export default authReducer;