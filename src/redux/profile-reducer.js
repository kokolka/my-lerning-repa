const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likeCounts: 10 },
        { id: 2, message: 'Are you busy?', likeCounts: 4 },
        { id: 3, message: 'I\'am not', likeCounts: 25 },
        { id: 4, message: 'Good', likeCounts: 1 }
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    if(action.type === ADD_POST){
        if(state.newPostText != ''){
            let newPost = {
                id: state.postsData.length + 1, 
                message: state.newPostText, 
                likeCounts: 0
            };
            //let stareCopy = 
            return{
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            };
            // stareCopy.postsData = [...state.postsData];
            // stareCopy.postsData.push(newPost);
            // stareCopy.newPostText = '';
            // return stareCopy;
        }
    }else if(action.type === UPDATE_NEW_POST_TEXT){
        //let stareCopy = 
        return{
            ...state,
            newPostText: action.newText
        };
        // stareCopy.newPostText = action.newText;
        // return stareCopy;
    }

    return state;
};

export const addPostActionCreator = () => {
    return {type: ADD_POST};
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};

export default profileReducer;