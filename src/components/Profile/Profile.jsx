import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import './Profile.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPost/>
        </div>
    );
}

export default Profile;