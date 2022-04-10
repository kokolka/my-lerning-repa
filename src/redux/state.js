const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
    _state: {
        profile:{
            postsData: [
                { id: 1, message: 'Hi, how are you?', likeCounts: 10 },
                { id: 2, message: 'Are you busy?', likeCounts: 4 },
                { id: 3, message: 'I\'am not', likeCounts: 25 },
                { id: 4, message: 'Good', likeCounts: 1 }
            ],
            newPostText: ''
        },
        dialogs:{
            dialogsData: [
                { act: 0, id: 1, name: 'Kirill', foto: 'https://avatars.mds.yandex.net/i?id=9b771e9d8999bece7b6aa0fdd258cc60-5150842-images-thumbs&n=13'},
                { act: 0, id: 2, name: 'Anna', foto: 'https://pv1.narvii.com/uploaded_cover/7174/20be9783bffd3b9c915dda2a2fdf5982290ac86ar1-720-1280_raw.jpg'},
                { act: 0, id: 3, name: 'Dimon', foto: 'https://slovnet.ru/wp-content/uploads/2018/12/16-73.jpg'},
                { act: 0, id: 4, name: 'Serj', foto: 'https://w7.pngwing.com/pngs/784/201/png-transparent-avatar-the-last-airbender-aang-katara-youtube-roku-avatar-heroes-fictional-character-last-airbender.png'},
                { act: 0, id: 5, name: 'Diana', foto: 'https://pbs.twimg.com/media/Dj097YcX4AAgJ5G.jpg'}
            ],
            messagesData: [
                { id: 1, message: 'Hi', who: 1},
                { id: 2, message: 'Hi', who: 2 },
                { id: 3, message: 'How are you?', who: 1 }
            ],
            newMessage: ''
        },
        navlink:{
            dialogsData: [
                { id: 1, name: 'Kirill', foto: 'https://avatars.mds.yandex.net/i?id=9b771e9d8999bece7b6aa0fdd258cc60-5150842-images-thumbs&n=13'},
                { id: 2, name: 'Anna', foto: 'https://pv1.narvii.com/uploaded_cover/7174/20be9783bffd3b9c915dda2a2fdf5982290ac86ar1-720-1280_raw.jpg'},
                { id: 3, name: 'Dimon', foto: 'https://slovnet.ru/wp-content/uploads/2018/12/16-73.jpg'},
                { id: 4, name: 'Serj', foto: 'https://w7.pngwing.com/pngs/784/201/png-transparent-avatar-the-last-airbender-aang-katara-youtube-roku-avatar-heroes-fictional-character-last-airbender.png'},
                { id: 5, name: 'Diana', foto: 'https://pbs.twimg.com/media/Dj097YcX4AAgJ5G.jpg'}
            ]
        }
    },
    _callSubscriber(){
    },

    getState(){
        debugger; 
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    
    dispatch(action){
        if(action.type === ADD_POST){
            if(this._state.profile.newPostText != ''){
                let newPost = {
                    id: this._state.profile.postsData.length + 1, 
                    message: this._state.profile.newPostText, 
                    likeCounts: 0
                };
                this._state.profile.postsData.push(newPost);
                this._callSubscriber(this._state);
                this._state.profile.newPostText = '';
            }
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profile.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if(action.type === ADD_MESSAGE){
            if(this._state.dialogs.newMessage != ''){
                let newMessage = {
                    id: this._state.profile.postsData.length + 1, 
                    message: this._state.dialogs.newMessage,
                    who: 2 
                };
                this._state.dialogs.messagesData.push(newMessage);
                this._callSubscriber(this._state);
                this._state.dialogs.newMessage = '';
            }
        }else if(action.type === UPDATE_NEW_MESSAGE){
            this._state.dialogs.newMessage = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
    
    
}

export const addPostActionCreator = () => {
    return {type: ADD_POST};
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};
export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE};
};
export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE, 
        newMessage: text
    };
};

export default store;
window.store = store;