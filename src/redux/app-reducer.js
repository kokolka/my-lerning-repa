import { meUser} from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED/APP';
const GET_ERROR_LOGIN = 'GET_ERROR_LOGIN/APP';
const RESET_ERROR_LOGIN = 'RESET_ERROR_LOGIN/APP';
const SET_SIZE_APP = 'SET_SIZE_APP/APP';
const SET_IS_BUTTON_MENU = 'SET_IS_BUTTON_MENU/APP';
const CHANGE_IS_BUTTON_MENU = 'CHANGE_IS_BUTTON_MENU/APP';

let initialState = {
    initialized: false, 
    numberError: 0,
    messageError: '',
    sizeApp: null,
    isButtonMenu: false
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
        case SET_IS_BUTTON_MENU: 
            return {
                ...state,
                isButtonMenu: action.isButton
            };  
        case CHANGE_IS_BUTTON_MENU: 
            return {
                ...state,
                isButtonMenu: !state.isButtonMenu
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
export const setIsButtonMenu = () => {
    return { type: SET_IS_BUTTON_MENU, isButton: true}; 
};
export const changeIsButtonMenu = () => {
    return { type: CHANGE_IS_BUTTON_MENU}; 
};

export const initializeApp = () => (dispatch) => {
    let init = dispatch(meUser());

    init.then(() => {
        dispatch(setInitialized());
    })
}

export default appReducer;