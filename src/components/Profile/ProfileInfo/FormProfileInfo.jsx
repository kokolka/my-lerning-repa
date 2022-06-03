import React from 'react';
import { Field, Form, Formik } from 'formik';
import s from './FormProfileInfo.module.css';
import { Textarea } from '../../common/FormControls/FormControl';
import { putProfileInfoParam } from '../../../redux/profile-reducer';


import axios from "axios"
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7b2bf063-5f39-45d3-b53c-542238da0668"
    }
});

const FormProfileInfo = (props) => {
    return (
        <Formik
            initialValues={
                {
                    AboutMe: '',
                    lookingForAJob: false,
                    lookingForAJobDescription: '',
                    fullName: '',
                    contacts: { github: '', vk: '', facebook: '', instagram: '', twitter: '', website: '', youtube: '', mainLink: '' }
                }
            }
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    //props.putProfileInfoParam(props.meUserId, values.lookingForAJob, values.lookingForAJobDescription, values.fullName, values.contacts);
                    //putProfileInfoParam(props.meUserId, values.lookingForAJob, values.lookingForAJobDescription, values.fullName, values.contacts);
                    //putProfileInfoParam(23614, true, 'yes', 'values.fullName', { github: 's', vk: 's', facebook: 's', instagram: 's', twitter: 's', website: 's', youtube: 's', mainLink: 's' });
                    debugger;
                    let Contacts = {github: 's', Vk: 's', Facebook: 's', instagram: 's', twitter: 's', website: 's', youtube: 's', mainLink: 's'}
                    instance.put('profile', {AboutMe:'aaaaaa', userId: 23614, lookingForAJob: true, lookingForAJobDescription: 'yes', fullName: 'values.fullName', Contacts: Contacts})
                    .then(response => {
                        debugger;
                        if(response.data.resultCode === 0){
                            alert(response.data);
                        }
                    })
                    
                    
                    //alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className={s.element_box}>
                        <div className={s.element_box__nameProporty}>About me</div>
                        <Field type="text" name="AboutMe" />
                    </div>
                    <div className={s.element_box}>
                        <div className={s.element_box__checkbox}>Are you find a job?</div>
                        <Field type="checkbox" name="lookingForAJob" />
                    </div>
                    <div className={s.element_box}>
                        <div className={s.element_box__nameProporty}>Description your job:</div>
                        <Field component={Textarea} placeholder=' ' name="lookingForAJobDescription" />
                    </div>
                    <div className={s.element_box}>
                        <div className={s.element_box__nameProporty}>Your full name</div>
                        <Field type="text" name="fullName" />
                    </div>
                    <div className={s.element_box}>
                        <div className={s.element_box__nameProporty}>Your github:</div>
                        <Field type="text" name="contacts.github" placeholder="https://github.com/" />
                    </div>
                    <div className={s.element_box}>
                        <div className={s.element_box__nameProporty}>Your vk:</div>
                        <Field type="text" name="contacts.vk" placeholder="https://vk.com/" />
                    </div>
                    <div className={s.element_box}>
                        <div className={s.element_box__nameProporty}>Your facebook:</div>
                        <Field type="text" name="contacts.facebook" placeholder="https://facebook.com" />
                    </div>
                    <div className={s.element_box}>
                        <div className={s.element_box__nameProporty}>Your instagram:</div>
                        <Field type="text" name="contacts.instagram" placeholder="https://www.instagram.com" />
                    </div>
                    <div className={s.element_box}>
                        <div className={s.element_box__nameProporty}>Your twitter:</div>
                        <Field type="text" name="contacts.twitter" placeholder="https://twitter.com" />
                    </div>
                    <div className={s.element_box}>
                        <div className={s.element_box__nameProporty}>Your website:</div>
                        <Field type="text" name="contacts.website" placeholder="your website" />
                    </div>
                    <div className={s.element_box}>
                        <div className={s.element_box__nameProporty}>Your youtube:</div>
                        <Field type="text" name="contacts.youtube" placeholder="https://www.youtube.com" />
                    </div>
                    <div className={s.element_box}>
                        <div className={s.element_box__nameProporty}>Your mainLink:</div>
                        <Field type="text" name="contacts.mainLink" placeholder="https://www.mainLink.ru" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}


export default FormProfileInfo;