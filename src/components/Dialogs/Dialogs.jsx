import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElements =
        props.dialogsData.map(el => <Dialog name={el.name} id={el.id} foto={el.foto} />);

    let messagesElements =
        props.messagesData.map(message => <Message message={message.message} who={message.who} />)

    let sendMessage = () => {
        props.onSendMessage();
    }
    let changeMessage = (e) => {
        let text = e.target.value;
        props.onChangeMessage(text);
    }
    debugger;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {props.dialogsData[1].name}
                </div>
                <div className={s.message_area}>
                    {messagesElements}
                </div>
                <div className={s.send}>
                    <div>
                        <textarea
                            placeholder='Enter your message'
                            onChange={changeMessage}
                            value={props.newMessage}
                        />
                    </div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;