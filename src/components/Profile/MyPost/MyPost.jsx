import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    let postsElements =
        props.pd.map(p => <Post message={p.message} key={p.id} likeCounts={p.likeCounts} />);

    let messageAlert = () => {
        props.AddPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.AppPostNewText(text);
    }

    return (
        <div className={s.postsBlok}>
            My post
            <div>
                <div>
                    <textarea
                        placeholder='Enter your post'
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={messageAlert}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPost;