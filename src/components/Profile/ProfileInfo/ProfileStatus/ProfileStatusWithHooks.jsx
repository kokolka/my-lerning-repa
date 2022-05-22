import React, { useState } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let stateWithUseState = useState(false);

    let editMode = stateWithUseState[0];
    let changeEditMode = stateWithUseState[1];
    //or
    //let [editMode, changeEditMode] = stateWithUseState;
    //or
    //let [editMode, changeEditMode] = useState(false);

    let [status, setStatus] = useState(props.status)

    const activeEditMode = () => {
        changeEditMode(true);
    }
    const deactiveEditMode = () => {
        changeEditMode(false)
        props.putUserStatus(status);
    }

    return (
        <div className={s.status_block}>
            {!editMode && 
                <div>
                    <span
                        className={s.status_editModeOff}
                        onDoubleClick={activeEditMode}
                    >{props.status || 'No status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={(e) => {
                            setStatus(e.target.value)
                        }}
                        className={s.status_editModeOn}
                        onBlur={deactiveEditMode}
                        autoFocus={true}
                        value={status}
                    />
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;