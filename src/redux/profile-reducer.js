import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_CURRENT_ID_USER = 'SET_CURRENT_ID_USER';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likeCounts: 10 },
        { id: 2, message: 'Are you busy?', likeCounts: 4 },
        { id: 3, message: 'I\'am not', likeCounts: 25 },
        { id: 4, message: 'Good', likeCounts: 1 }
    ],
    newPostText: '',
    profile: null,
    status: '',
    currentPageUser: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            if (action.text != ''){

                let newPost = {
                    id: state.postsData.length + 1,
                    message: action.text,
                    likeCounts: 0
                };
                return {
                    ...state,
                    newPostText: '',
                    postsData: [...state.postsData, newPost]
                };
            }
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
                currentPageUser: action.idUser
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST:
            return {
                ...state, postsData: state.postsData.filter(p => p.id != action.postId )
            }
        default: return state;
    }
};

export const addPostActionCreator = (text) => {
    return { type: ADD_POST, text };
};
export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile };
};
export const setCurrentIdUser = (idUser) => {
    return { type: SET_CURRENT_ID_USER, idUser };
};
export const setUserStatus = (status) => {
    return { type: SET_USER_STATUS, status };
};
export const deletePost = (postId) => {
    return { type: DELETE_POST, postId };
};
 
export const getUserPageFunction = (id) => {
    return (dispatch) => {
        profileAPI.getUserPage(id)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
} 
export const getUserStatus = (id) => {
    return (dispatch) => {
        profileAPI.getUserStatus(id)
            .then(data => {
                dispatch(setUserStatus(data));
            })
    };
}
export const putUserStatus = (status) => (dispatch) => {
    profileAPI.putUserStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setUserStatus(status));
            }
        })
}


export default profileReducer;