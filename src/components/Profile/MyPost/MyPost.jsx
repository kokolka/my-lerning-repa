import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    let postsElements =
        props.pd.map(p => <Post message={p.message} likeCounts={p.likeCounts} />);

    let newPostElement = React.createRef();

    let messageAlert = () => {
        props.dispatch({type: 'ADD-POST'});
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlok}>
            My post
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
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