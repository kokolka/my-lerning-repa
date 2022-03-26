import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {

    let postsData = [
        { id: 1, message: 'Hi, how are you?', likeCounts: 10 },
        { id: 2, message: 'Are you busy?', likeCounts: 4 }
    ]

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
                <Post message={postsData[0].message} likeCounts={postsData[0].likeCounts} />
                <Post message={postsData[1].message} likeCounts={postsData[1].likeCounts} />
            </div>
        </div>
    );
}

export default MyPost;