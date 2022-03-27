import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPost pd = {props.pd}/>
        </div>
    );
}

export default Profile;