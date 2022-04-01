import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css'



const Dialogs = (props) => {

    let dialogsElements = 
        props.dataDialogs.dialogsData.map(el => <Dialog name={el.name} id={el.id} foto={el.foto}/>);

    let messagesElements = 
        props.dataDialogs.messagesData.map(message => <Message message={message.message} who={message.who} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {
                        props.dataDialogs.dialogsData[1].name
                    }
                </div>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;