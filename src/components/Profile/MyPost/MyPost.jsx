import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
//import './Profile.css';

const MyPost = () => {
    return (
        <div className={s.postsBlok}>
            My post
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likeCounts='10'/>
                <Post message='Are you busy?' likeCounts='4'/>
            </div>
        </div>
    );
}

export default MyPost;