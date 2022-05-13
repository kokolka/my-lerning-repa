import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {postLogin} from '../../../redux/auth-reducer';

let LoginForm = () => {

    let p = (a) =>{
        postLogin({
            email: a.login,
            password: a.password,
            rememberMe: a.rememberMy,
            captcha: a.captcha
        });
    }

    return (
        <Formik
            initialValues={{ login: '', password: '', rememberMy: false, captcha: true }}
            validate={values => {
                const errors = {};
                if (!values.login) {
                    errors.login = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login)
                ) {
                    errors.login = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                p(values);
                // postLogin({
                //     email: values.login,
                //     password: values.password,
                //     rememberMe: values.rememberMy,
                //     captcha: values.captcha
                // });
                console.log(values);
                setSubmitting(false);
                // setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                // }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field placeholder="Login" type="email" name="login" />
                        <ErrorMessage name="login" component="div" />
                    </div>
                    <div>
                        <Field placeholder="Password" type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div>
                        <Field type='checkbox' name='rememberMy'/>
                        {'Remember my'}
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            Sing In
                        </button>
                    </div>

                </Form>
            )}
        </Formik>
        // <form>
        //     <div>
        //         <input placeholder="Login" />
        //     </div>
        //     <div>
        //         <input placeholder="Password" />
        //     </div>
        //     <div>
        //         <input type={"checkbox"} />Remember my
        //     </div>
        //     <div>
        //         <button>Sing In</button>
        //     </div>
        // </form>
    );
}

export default LoginForm;