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
    ]

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'How are you?' }
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;