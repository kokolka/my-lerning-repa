import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import storeContext from '../../StoreContext';

const DialogsComponent = () => {
    // let sendMessage = () => {
    //     props.store.dispatch(addMessageActionCreator());
    // }
    // let changeMessage = (text) => {
    //     props.store.dispatch(updateNewMessageActionCreator(text));
    // }
    return (
        <storeContext.Consumer>
            {   store => {
                    let sendMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }
                    let changeMessage = (text) => {
                        store.dispatch(updateNewMessageActionCreator(text));
                    }
                    return <Dialogs
                            onSendMessage={sendMessage}
                            onChangeMessage={changeMessage}
                            dialogsData={store.getState().dialogs.dialogsData}
                            messagesData={store.getState().dialogs.messagesData}
                            newMessage={store.getState().dialogs.newMessage}
                        />
                }
            }
        </storeContext.Consumer>
    )
}

export default DialogsComponent;