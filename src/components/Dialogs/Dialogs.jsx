import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    Kirill
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your do?</div>
            </div>
        </div>
    )
}

export default Dialogs;