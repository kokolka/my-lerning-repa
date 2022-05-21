import { authAPI } from "../api/api";
import { meUser, setAuthUserData } from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false, 
    loginErrors: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const setInitialized = () => {
    return { type: SET_INITIALIZED };
};

export const initializeApp = () => (dispatch) => {
    let init = dispatch(meUser());

    init.then(() => {
        dispatch(setInitialized());
    })
}

export default appReducer;