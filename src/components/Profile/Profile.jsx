import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import './Profile.css';

const Profile = () => {

    let postsData = [
        { id: 1, message: 'Hi, how are you?', likeCounts: 10 },
        { id: 2, message: 'Are you busy?', likeCounts: 4 },
        { id: 2, message: 'I\'am not', likeCounts: 25 },
    ];

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPost pd = {postsData}/>
        </div>
    );
}

export default Profile;