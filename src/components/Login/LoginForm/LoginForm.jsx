import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './LoginForm.module.css';

let LoginForm = (props) => {

    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '', rememberMy: false, captcha: true }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Required';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        props.postLogin(values.email, values.password, values.rememberMy);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {(p) => (
                    <Form>
                        <div>
                            <Field
                                className={p.errors.email && p.touched.email ? s.entry_field__errors : ''}
                                placeholder="Email"
                                type="email"
                                name="email"
                            />
                            <ErrorMessage
                                className={p.errors.email && p.touched.email ? s.errors : ''}
                                name="email"
                                component="div"
                            />
                        </div>
                        <div>
                            <Field
                                className={p.errors.password && p.touched.password ? s.entry_field__errors : ''}
                                placeholder="Password"
                                type="password"
                                name="password"
                            />
                            <ErrorMessage
                                className={p.errors.password && p.touched.password ? s.errors : ''}
                                name="password"
                                component="div"
                            />
                        </div>
                        <div>
                            <Field type='checkbox' name='rememberMy' />
                            {'Remember my'}
                        </div>
                        <div>
                            <button type="submit" disabled={p.isSubmitting}>
                                Sing In
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LoginForm;