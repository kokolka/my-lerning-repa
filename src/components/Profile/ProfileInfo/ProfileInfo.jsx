import React from 'react';
import prof from './ProfileInfo.module.css';
//import './Profile.css';

const ProfileInfo = () => {
    return (
        <div className={prof.profile}>
            <div className={prof.profile_background}>
                <img src='https://w-dog.ru/wallpapers/14/6/324153998540799/bezmyatezhnost-gorizont-sineva.jpg' />
            </div>
            <div className={prof.profile_info}>
                <div className={prof.profile_ava}>
                    <img src='https://data.whicdn.com/images/238932713/original.jpg' />
                </div>
                <div className={prof.profile_description}>
                    description
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;