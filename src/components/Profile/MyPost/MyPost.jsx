import React from 'react';
import prof from './MyPost.module.css';
import Post from './Post/Post';
//import './Profile.css';

const MyPost = () => {
    return (
        <div>
            My post
            <div>
                New post
            </div>
            <div className={prof.post}>
                <Post message='Hi, how are you?' likeCounts='10'/>
                <Post message='Are you busy?' likeCounts='4'/>
            </div>
        </div>
    );
}

export default MyPost;