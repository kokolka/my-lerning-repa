import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import { Field, Formik, Form } from 'formik';

const MyPost = (props) => {
    let postsElements =
        props.pd.map(p => <Post message={p.message} key={p.id} likeCounts={p.likeCounts} />);

    let messageAlert = () => {
        props.AddPost();
    }
    let onPostChange = (text) => {
        //let text = e.target.value;
        props.AppPostNewText(text);
        messageAlert();
    }
 
    let FormSendMessage = () => ( 
        <div>
            <Formik
                initialValues={{ message: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    onPostChange(values.message);
                    setSubmitting(false);
                }}
                
            >
                {(p) => (
                    <Form>
                        <Field type="text" name="message"/>
                        <button type="submit" disabled={p.isSubmitting}>
                            Send
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );

    return (
        <div className={s.postsBlok}>
            My post
            <div>
                <FormSendMessage />
                {/* <div>
                    <textarea
                        placeholder='Enter your post'
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={messageAlert}>Add post</button>
                </div> */}
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPost;