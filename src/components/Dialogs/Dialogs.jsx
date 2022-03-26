import React from 'react';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css'


const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Kirill' },
        { id: 2, name: 'Anna' },
        { id: 3, name: 'Dimon' },
        { id: 4, name: 'Serj' }
    ];

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'How are you?' }
    ];

    let dialogsElements = dialogsData
        .map(el => <Dialog name={el.name} id={el.id} />);

    let messagesElements = messagesData
        .map(message => <Message message={message.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;