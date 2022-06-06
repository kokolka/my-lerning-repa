import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Field, Formik, Form } from 'formik';
import { Textarea } from '../common/FormControls/FormControl';
import { maxLengthCreator } from '../../Utils/Validations/validators';

const Dialogs = (props) => {

    let [actionName, setActionName] = useState('');
    let paramPage = useParams(); //hoc для получения параметров из url

    useEffect(() => {
        if (paramPage.id != null) {
            setActionName(props.dialogsData[+paramPage.id - 1].name);
        }
    }, [paramPage.id])

    //список диалогов
    let dialogsElements =
        props.dialogsData.map(el => <Dialog id={el.id} name={el.name} key={el.id} foto={el.foto} />);

    //список сообщений
    let messagesElements =
        props.messagesData.map(message => <Message message={message.message} key={message.id} who={message.who} />)

    let sendMessage = (text) => {
        props.onSendMessage(text);
    }

    let maxLength20 = maxLengthCreator(20);

    let FormSendMessage = () => (
        <div>
            <Formik
                initialValues={{ message: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    sendMessage(values.message);
                    setSubmitting(false);
                }}
            >
                {(p) => (
                    <Form className={s.send}>
                        <Field
                            className={s.send_textarea}
                            name="message"
                            component={Textarea}
                            placeholder='Enter your post'
                            validate={maxLength20}
                        />
                        <button type="submit" disabled={p.isSubmitting} className={s.send_button}> 
                            Send
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.actionDialog}>
                    {actionName}
                </div>
                <div className={s.message_area}>
                    {messagesElements}
                </div>
                <FormSendMessage />
            </div>
        </div>
    )
}

export default Dialogs;