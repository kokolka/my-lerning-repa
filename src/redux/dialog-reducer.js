const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogReducer = (state, action) => {

    if(action.type === ADD_MESSAGE){
        if(state.newMessage != ''){
            let newMessage = {
                id: state.dialogsData.length + 1, 
                message: state.newMessage,
                who: 2 
            };
            state.messagesData.push(newMessage);
            state.newMessage = '';
        }
    }else if(action.type === UPDATE_NEW_MESSAGE){
        state.newMessage = action.newMessage;
    }

    return state;
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

export default dialogReducer;