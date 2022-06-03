import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import prof from './ProfileInfo.module.css';
import noPhoto from '../../../assets/imeges/noPhoto.png';
import iconFacebook from '../../../assets/imeges/iconsFacebook.png';
import iconWebsite from '../../../assets/imeges/web30.png';
import iconVK from '../../../assets/imeges/iconsvk30.png';
import iconTwitter from '../../../assets/imeges/iconsTwitter30.png';
import iconInstagram from '../../../assets/imeges/iconsinstagram.png';
import iconYouTube from '../../../assets/imeges/iconsyoutube30.png';
import iconGithub from '../../../assets/imeges/iconsgithub30.png';
import iconMainLink from '../../../assets/imeges/iconsLinkedIn30.png';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import { Field, Form, Formik } from 'formik';
import FormProfileInfo from './FormProfileInfo';

const ProfileInfo = (props) => {

    let [isEditModeProfile, setEditModeProfile] = useState(false);
    let lastIdParam = props.param;
    let paramPage = useParams(); //hoc для получения параметров из url
    let userIdFromURL = paramPage.id;

    if (!userIdFromURL) {
        if (!props.meUserId) return <Navigate to='/login' />
        userIdFromURL = `${props.meUserId}`;
    }

    if (lastIdParam !== userIdFromURL) {
        props.getParamsWithUrl(userIdFromURL)
    }

    let socialNetworkObject = {
        facebook: iconFacebook,
        website: iconWebsite,
        vk: iconVK,
        twitter: iconTwitter,
        instagram: iconInstagram,
        youtube: iconYouTube,
        github: iconGithub,
        mainLink: iconMainLink
    }
    let mySocialNetwork = () => {
        let numberInArrow = 0; // счётчик для массива
        let arrComponents = [];
        for (let key in props.profile.contacts) { //перебор компонентов объекта по их key
            if (props.profile.contacts[key] != null) {
                arrComponents.push(<a href={props.profile.contacts[key]} target='_blank' className={prof.elA}>
                    <img src={socialNetworkObject[key]} /> {/* способ вывода иконок через объект, без дополнительного счётчика */}
                </a>)
            }
            numberInArrow = numberInArrow + 1; // переход на следующую итерацию 
        }
        return arrComponents;
    }
    const selectMainAva = (e) => {
        if (e.target.files.length > 0) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onEditModeProfile = () => {
        setEditModeProfile(true);
    }
    const offEditModeProfile = () => {
        setEditModeProfile(false);
    }

    if (props.profile == null || Object.keys(props.profile).length < 2) {
        return <Preloader />
    }
    return (
        <div className={prof.profile}>
            <div className={prof.profile_info}>
                <div className={prof.profile_ava}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : noPhoto} />
                    {userIdFromURL == props.meUserId ? <input type='file' onChange={selectMainAva} /> : null}
                </div>
                <div className={prof.profile_description}>
                    {!isEditModeProfile && <div>
                        <div>{`${props.profile.fullName}`}</div>
                        <div>{`About me: ${props.profile.aboutMe != null ? props.profile.aboutMe : ''}`}</div>
                        <div>{`Looking for job: ${props.profile.lookingForAJob == true ? 'YES' : 'NO'}`}</div>
                        <div>{`Job Description: ${props.profile.lookingForAJobDescription != null ? props.profile.lookingForAJobDescription : ''}`}</div>
                        <div>{`Me social network:`}
                            {mySocialNetwork()}
                        </div>
                        <div className={prof.status_box}>
                            <div className={prof.status_box__pole}>My status:</div>
                            <ProfileStatusWithHooks
                                status={props.status}
                                putUserStatus={props.putUserStatus}
                                meUserId={props.meUserId}
                                userIdFromURL={userIdFromURL}
                            />
                        </div>
                        {userIdFromURL == props.meUserId ? <div onClick={onEditModeProfile}>
                            Change profile
                        </div>
                        :null
                        }
                    </div>}
                    {isEditModeProfile && <div>
                        <FormProfileInfo putProfileInfoParam={props.putProfileInfoParam} meUserId={props.meUserId}/>
                        <div onClick={offEditModeProfile}>Change</div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;