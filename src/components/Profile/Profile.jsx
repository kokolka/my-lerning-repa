import React from 'react';
import MyPostComponent from './MyPost/MyPostContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            {/* Блок с информацие о пользователе */}
            <ProfileInfo
                profile={props.profile}
                getParamsWithUrl={props.getParamsWithUrl}
                param={props.param} 
                status={props.status}/>
            {/* Блок с постами пользователя */}
            <MyPostComponent />
        </div>
    );
}

export default Profile;