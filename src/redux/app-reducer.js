import { meUser} from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED/APP';
const GET_ERROR_LOGIN = 'GET_ERROR_LOGIN/APP';
const RESET_ERROR_LOGIN = 'RESET_ERROR_LOGIN/APP';
const SET_SIZE_APP = 'SET_SIZE_APP/APP';

let initialState = {
    initialized: false, 
    numberError: 0,
    messageError: '',
    sizeApp: null
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
        case SET_SIZE_APP: 
            return {
                ...state,
                sizeApp: action.size
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
export const setSizeApp = (size) => {
    return { type: SET_SIZE_APP, size}; 
};

export const initializeApp = () => (dispatch) => {
    let init = dispatch(meUser());

    init.then(() => {
        dispatch(setInitialized());
    })
}

export default appReducer;