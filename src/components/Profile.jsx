import React from 'react';
import prof from './Profile.module.css';
//import './Profile.css';

const Profile = () => {
    return (
        <div className={prof.content}>
            <div>
                <img src='https://w-dog.ru/wallpapers/14/6/324153998540799/bezmyatezhnost-gorizont-sineva.jpg' />
            </div>
            <div>
                <div>
                    <img src='https://data.whicdn.com/images/238932713/original.jpg' />
                </div>
                <div>
                    description
                </div>
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={prof.post}>
                    <div className={prof.item}>
                        post 1
                    </div>
                    <div className={prof.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;