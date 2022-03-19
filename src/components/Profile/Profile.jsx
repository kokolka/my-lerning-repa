import React from 'react';
import MyPost from './MyPost/MyPost';
import prof from './Profile.module.css';
//import './Profile.css';

const Profile = () => {
    return (
        <div>
        {/* <div className={prof.content}> */}
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
            <MyPost/>
        </div>
    );
}

export default Profile;