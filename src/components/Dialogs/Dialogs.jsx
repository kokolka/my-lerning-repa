import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    
    // let activeDialog = (d) => {
    //     if(dialogsElements){
    //         d.name
    //     }
    // }

    let dialogsElements = props.dd
        .map(el => <Dialog name={el.name} id={el.id} />);

    let messagesElements = props.md
        .map(message => <Message message={message.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    Kirill
                </div>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;