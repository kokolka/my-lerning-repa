import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/state';



const Dialogs = (props) => {

    let dialogsElements =
        props.dataDialogs.dialogsData.map(el => <Dialog name={el.name} id={el.id} foto={el.foto} />);

    let messagesElements =
        props.dataDialogs.messagesData.map(message => <Message message={message.message} who={message.who} />)

    //let textMessage = React.createRef();

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onChangeMessage = (e) => {
        //let text = textMessage.current.value;
        let text = e.target.value;
        props.dispatch(updateNewMessageActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {props.dataDialogs.dialogsData[1].name}
                </div>
                <div className={s.message_area}>
                    {messagesElements}
                </div>
                <div className={s.send}>
                    <div>
                        <textarea
                            placeholder='Enter your message'
                            onChange={onChangeMessage}
                            //ref={textMessage}
                            value={props.dataDialogs.newMessage}
                        />
                    </div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;