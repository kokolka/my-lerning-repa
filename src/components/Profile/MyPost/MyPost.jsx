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
                <Post/>
            </div>
        </div>
    );
}

export default MyPost;