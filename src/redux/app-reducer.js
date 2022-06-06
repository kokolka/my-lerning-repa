import { authAPI } from "../api/api";
import { meUser, setAuthUserData } from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';
const GET_ERROR_LOGIN = 'GET_ERROR_LOGIN';
const RESET_ERROR_LOGIN = 'RESET_ERROR_LOGIN';

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
        case GET_ERROR_LOGIN: 
            return {
                ...state,
                numberError: action.number,
                messageError: action.message
            }; 
        case RESET_ERROR_LOGIN: 
            return {
                ...state,
                numberError: 0,
                messageError: ''
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
export const resetErrorLogin = () => {
    return { type: RESET_ERROR_LOGIN}; 
};

export const initializeApp = () => (dispatch) => {
    let init = dispatch(meUser());

    init.then(() => {
        dispatch(setInitialized());
    })
}

export default appReducer;