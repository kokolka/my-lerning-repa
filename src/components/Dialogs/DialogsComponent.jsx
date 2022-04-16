import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';

const DialogsComponent = (props) => {
    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let changeMessage = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }
    debugger;
    return (
        <Dialogs
            onSendMessage={sendMessage}
            onChangeMessage={changeMessage}
            dialogsData={props.store.getState().dialogs.dialogsData}
            messagesData={props.store.getState().dialogs.messagesData}
            newMessage={props.store.getState().dialogs.newMessage}
        />
    )
}

export default DialogsComponent;