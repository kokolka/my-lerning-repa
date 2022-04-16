import React from 'react';
import MyPostComponent from './MyPost/MyPostComponent';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPostComponent
                store={props.store}
            />
        </div>
    );
}

export default Profile;