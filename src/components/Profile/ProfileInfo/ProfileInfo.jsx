import React from 'react';
import { useParams } from 'react-router';
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
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {

    let lastIdParam = props.param;

    let paramPage = useParams(); //hoc для получения параметров из url
    let userIdFromURL = paramPage.id;
    if (!userIdFromURL) {
        userIdFromURL = "2";
    }

    if (lastIdParam !== userIdFromURL) {
        props.getParamsWithUrl(userIdFromURL)
    }

    //иконки для ссылок на соц сети
    let socialNetwork = (network) => {
        if (props.profile.contacts.facebook != null && network === 'facebook') {
            return iconFacebook
        } else if (props.profile.contacts.website != null && network === 'website') {
            return iconWebsite
        } else if (props.profile.contacts.vk != null && network === 'vk') {
            return iconVK
        } else if (props.profile.contacts.twitter != null && network === 'twitter') {
            return iconTwitter
        } else if (props.profile.contacts.instagram != null && network === 'instagram') {
            return iconInstagram
        } else if (props.profile.contacts.youtube != null && network === 'youtube') {
            return iconYouTube
        } else if (props.profile.contacts.github != null && network === 'github') {
            return iconGithub
        } else if (props.profile.contacts.mainLink != null && network === 'mainLink') {
            return iconMainLink
        } else {
            return '';
        }
    }

    if (props.profile == null || Object.keys(props.profile).length < 2) {
        return <Preloader />
    }

    return (
        <div className={prof.profile}>
            {/* <div className={prof.profile_background}>
                <img src='https://w-dog.ru/wallpapers/14/6/324153998540799/bezmyatezhnost-gorizont-sineva.jpg' />
            </div> */}
            {/* {flag === false? <Preloader/>: */}
            <div className={prof.profile_info}>
                <div className={prof.profile_ava}>
                    {/* <img src='https://data.whicdn.com/images/238932713/original.jpg' /> */}
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : noPhoto} />
                </div>
                <div className={prof.profile_description}>
                    <div>{`${props.profile.fullName}`}</div>
                    <div>{`About me: ${props.profile.aboutMe != null ? props.profile.aboutMe : ''}`}</div>
                    <div>{`Looking for job: ${props.profile.lookingForAJob == true ? 'YES' : 'NO'}`}</div>
                    <div>{`Me social network:`}
                        <a href={props.profile.contacts.facebook} target='_blank'>
                            <img src={socialNetwork('facebook')} />
                        </a>
                        <a href={props.profile.contacts.website} target='_blank'>
                            <img src={socialNetwork('website')} />
                        </a>
                        <a href={props.profile.contacts.vk} target='_blank'>
                            <img src={socialNetwork('vk')} />
                        </a>
                        <a href={props.profile.contacts.twitter} target='_blank'>
                            <img src={socialNetwork('twitter')} />
                        </a>
                        <a href={props.profile.contacts.instagram} target='_blank'>
                            <img src={socialNetwork('instagram')} />
                        </a>
                        <a href={props.profile.contacts.youtube} target='_blank'>
                            <img src={socialNetwork('youtube')} />
                        </a>
                        <a href={props.profile.contacts.github} target='_blank'>
                            <img src={socialNetwork('github')} />
                        </a>
                        <a href={props.profile.contacts.mainLink} target='_blank'>
                            <img src={socialNetwork('mainLink')} />
                        </a>
                    </div>
                    <ProfileStatus status={props.status} />
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;