import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_CURRENT_ID_USER = 'SET_CURRENT_ID_USER';

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likeCounts: 10 },
        { id: 2, message: 'Are you busy?', likeCounts: 4 },
        { id: 3, message: 'I\'am not', likeCounts: 25 },
        { id: 4, message: 'Good', likeCounts: 1 }
    ],
    newPostText: '',
    profile: null,
    currentPageUser: 2
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText != '') {
                let newPost = {
                    id: state.postsData.length + 1,
                    message: state.newPostText,
                    likeCounts: 0
                };
                return {
                    ...state,
                    newPostText: '',
                    postsData: [...state.postsData, newPost]
                };
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_CURRENT_ID_USER: {
            return {
                ...state,
                currentPageUser: action.currentPageUser
            };
        }
        default: return state;
    }
};

export const addPostActionCreator = () => {
    return { type: ADD_POST };
};
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile };
};
export const setCurrentIdUser = (idUser) => {
    return { type: SET_CURRENT_ID_USER, idUser };
};

export const getUserPageFunction = (param) => {
    return (dispatch) => {
        profileAPI.getUserPage(param)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export default profileReducer;