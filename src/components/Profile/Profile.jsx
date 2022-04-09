import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPost
                pd={props.dataProfile.postsData}
                newPostText={props.dataProfile.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;