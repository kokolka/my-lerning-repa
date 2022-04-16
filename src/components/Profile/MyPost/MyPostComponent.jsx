import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import storeContext from '../../../StoreContext';

const MyPostComponent = () => {
    // let messageAlert = () => {
    //     props.store.dispatch(addPostActionCreator());
    // }
    // let onPostChange = (text) => {
    //     props.store.dispatch(updateNewPostTextActionCreator(text));
    // }
    return (
        <storeContext.Consumer>
            {   store => {
                    let messageAlert = () => {
                        store.dispatch(addPostActionCreator());
                    }
                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    }
                    return <MyPost
                            AddPost={messageAlert}
                            AppPostNewText={onPostChange}
                            pd={store.getState().profile.postsData}
                            newPostText={store.getState().profile.newPostText} />
                }
            }
        </storeContext.Consumer>
    );
}

export default MyPostComponent;