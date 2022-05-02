import React from 'react';
import MyPostComponent from './MyPost/MyPostContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} getParamsWithUrl={props.getParamsWithUrl}/>
            <MyPostComponent/>
        </div>
    );
}

export default Profile;