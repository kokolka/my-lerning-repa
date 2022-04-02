import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    let postsElements = 
        props.pd.map(p => <Post message={p.message} likeCounts={p.likeCounts} />);

    let newPostElement = React.createRef();

    let messageAlert = () =>{
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={s.postsBlok}>
            My post
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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