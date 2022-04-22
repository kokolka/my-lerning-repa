import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css'

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;

    debugger;

    return (
        <div className={s.dialog}>
            <img src={props.foto}></img>
            <NavLink to={path} className={(sa) => {
                    // sa.isActive ? (s.active) : s.dialog
                    if(sa.isActive){
                        // props.act = 1;
                        return s.active;
                    }else{
                        // props.act = 0;
                        return s.dialog;
                    }
                }
            }
            >{props.name}</NavLink>
        </div>
    )
}

export default Dialog;