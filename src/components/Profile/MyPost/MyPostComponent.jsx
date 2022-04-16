import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPost from './MyPost';

const MyPostComponent = (props) => {
    let messageAlert = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
    debugger;
    return (
        <MyPost 
            AddPost={messageAlert} 
            AppPostNewText={onPostChange} 
            pd={props.store.getState().profile.postsData} 
            newPostText={props.store.getState().profile.newPostText} />
    );
}

export default MyPostComponent;