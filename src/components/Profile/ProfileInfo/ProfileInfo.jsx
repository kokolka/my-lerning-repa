import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import prof from './ProfileInfo.module.css';
import FormProfileInfo from './FormProfileInfo';

//изображения соц сетей
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

let mySocialNetwork = (profile) => { //Создание массива из тегов 'a' с изображениями соц сети внутри
    let numberInArrow = 0; // счётчик для массива
    let arrComponents = [];
    for (let key in profile.contacts) { //перебор компонентов объекта по их key
        if (profile.contacts[key] != null && profile.contacts[key] != '') {
            arrComponents.push(<a href={profile.contacts[key]} target='_blank' className={prof.elA}>
                <img src={socialNetworkObject[key]} key={key} /> {/* способ вывода иконок через объект, без дополнительного счётчика */}
            </a>)
        }
        numberInArrow = numberInArrow + 1; // переход на следующую итерацию 
    }
    return arrComponents;
}

const ProfileInfo = (props) => {

    let [isEditModeProfile, setEditModeProfile] = useState(false);
    let lastIdParam = props.param;
    let paramPage = useParams(); //hoc для получения параметров из url
    let userIdFromURL = paramPage.id;

    if (!userIdFromURL) { //если из url не получили id пользователя
        if (!props.meUserId) return <Navigate to='/login' /> //если не авторизованы, то редирект
        userIdFromURL = `${props.meUserId}`; //если авторизованы, то переходим на свою страницу
    }

    if (lastIdParam !== userIdFromURL) {
        props.getParamsWithUrl(userIdFromURL)
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
                <ProfileAva {...props} userIdFromURL={userIdFromURL} selectMainAva={selectMainAva} key='ProfileAva' />
                <div className={prof.profile_description}>
                    {!isEditModeProfile && <ProfileInfoUser 
                        key='ProfileInfoUser'
                        {...props}
                        userIdFromURL={userIdFromURL}
                        onEditModeProfile={onEditModeProfile}
                    />}
                    {isEditModeProfile && <div key='onEditMode'>
                        <FormProfileInfo
                            key='onEditModeElement'
                            profile={props.profile}
                            offEditModeProfile={offEditModeProfile}
                            putProfileInfoParam={props.putProfileInfoParam}
                            meUserId={props.meUserId}
                            messageError={props.messageError}
                        />
                    </div>}
                </div>
            </div>
        </div>
    );
}

const ProfileAva = (props) => {
    return (
        <div key='avaBox' className={prof.profile_ava}>
            <img key='ava' src={props.profile.photos.large != null ? props.profile.photos.large : noPhoto} />
            {props.userIdFromURL == props.meUserId ? <div>
                <input key='inputChangeAva' type='file' id='download_file' onChange={props.selectMainAva} className={prof.button_download} />
                <label key='labelChangeAva' htmlFor='download_file'>
                    <span className={prof.img_download}><img
                        src='https://avatars.mds.yandex.net/i?id=ffcffc28c3200781aeff82ea047a9711-5294137-images-thumbs&n=13'
                    /></span>
                </label>
            </div>
                : null}
        </div>
    );
}
const ProfileInfoUser = (props) => {
    return (
        <div key='offEditMode'>
            <div key='fullName'>{`${props.profile.fullName}`}</div>
            <div key='About me'>{`About me: ${props.profile.aboutMe != null ? props.profile.aboutMe : ''}`}</div>
            <div key='Looking for job'>{`Looking for job: ${props.profile.lookingForAJob == true ? 'yes' : 'no'}`}</div>
            <div key='jobDescription'>
                {props.profile.lookingForAJob === true && props.profile.lookingForAJobDescription != null
                    ? <div key='Description'>
                        {`Job Description: ${props.profile.lookingForAJobDescription}`}
                    </div>
                    : null}
            </div>
            <div key='Me social network'>{`Me social network:`}
                {mySocialNetwork(props.profile)}
            </div>
            <div className={prof.status_box} key='status'>
                <div className={prof.status_box__pole}>
                    <div className={prof.status_box__pole__name}>My status: </div> <ProfileStatusWithHooks
                        status={props.status}
                        putUserStatus={props.putUserStatus}
                        meUserId={props.meUserId}
                        userIdFromURL={props.userIdFromURL}
                    />
                </div>
            </div>
            {props.userIdFromURL == props.meUserId
                ? <button onClick={props.onEditModeProfile} key='onEditModeProfile'>
                    Change profile
                </button>
                : null}
        </div>
    );
}

export default ProfileInfo;