import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">
                        Kirill
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">
                        Ana
                    </NavLink>
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