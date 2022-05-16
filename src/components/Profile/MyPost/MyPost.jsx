import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { maxLengthCreator, validation, } from '../../../Utils/Validations/validators';
import { Textarea } from '../../common/FormControls/FormControl';

const MyPost = (props) => {
    let postsElements =
        props.pd.map(p => <Post message={p.message} key={p.id} likeCounts={p.likeCounts} />);

    let messageAlert = (text) => {
        props.AddPost(text);
    }

    let maxLength20 = maxLengthCreator(20);

    let FormSendMessage = () => (
        <div>
            <Formik
                initialValues={{ message: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    messageAlert(values.message);
                    setSubmitting(false);
                }}

            >
                {(p) => (
                    <Form>
                        <Field
                            // type="text"
                            name="message"
                            validate={maxLength20}
                            component={Textarea}
                            placeholder='Enter your post'
                            
                        />
                        {/* <ErrorMessage name="message" component="div" /> */}
                        {/* {p.errors.message && p.touched.message && <div>{p.errors.message}</div>} */}
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