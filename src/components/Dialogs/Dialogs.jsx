import React from 'react';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <Dialog name='Kirill' id='1'/>
                <Dialog name='Anna' id='2'/>
                <Dialog name='Dimon' id='3'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Hi'/>
                <Message message='How is your do?'/>
            </div>
        </div>
    )
}

export default Dialogs;