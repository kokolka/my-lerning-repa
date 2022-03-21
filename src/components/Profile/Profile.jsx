import React from 'react';
import MyPost from './MyPost/MyPost';
import prof from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import './Profile.css';

const Profile = () => {
    return (
        <div className={prof.profile}>
        {/* <div className={prof.content}> */}
            <ProfileInfo />
            <MyPost/>
        </div>
    );
}

export default Profile;