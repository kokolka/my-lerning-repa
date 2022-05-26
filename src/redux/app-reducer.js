import { authAPI } from "../api/api";
import { meUser, setAuthUserData } from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';
const GET_ERROR_LOGIN = 'GET_ERROR_LOGIN';

let initialState = {
    initialized: false, 
    numberError: 0,
    messageError: ''
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        case GET_ERROR_LOGIN: //test
            return {
                ...state,
                numberError: action.number,
                messageError: action.message
            }; 
        default:
            return state;
    }
};

export const setInitialized = () => {
    return { type: SET_INITIALIZED }; 
};
export const getErrorLogin = (number, message) => {
    return { type: GET_ERROR_LOGIN, number, message }; 
};

export const initializeApp = () => (dispatch) => {
    let init = dispatch(meUser());

    init.then(() => {
        dispatch(setInitialized());
    })
}

export default appReducer;