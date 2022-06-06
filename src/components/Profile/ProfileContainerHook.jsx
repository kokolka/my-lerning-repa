import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import {
    setUserProfile,
    setCurrentIdUser,
    getUserPageFunction,
    getUserStatus,
    putUserStatus,
    addPostActionCreator,
    savePhoto,
    putProfileInfoParam
} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

const ProfileContainerHook = (props) => {

    useEffect(() => {
        props.getUserPageFunction(props.currentPageUser); //thunk
        props.getUserStatus(props.currentPageUser);
    }, [props.currentPageUser])

    let getParamsWithUrl = (data) => { //callback функция для получения номера профиля из url 
        if (data !== props.currentPageUser) { //сравнение старого url и нового url
            props.setCurrentIdUser(data); //dispatch для нициализации перерисовки через componentDidUpdate
        }
    }

    return (
        <Profile
            {...props}
            getParamsWithUrl={getParamsWithUrl}
            param={props.currentPageUser}
        />
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    currentPageUser: state.profilePage.currentPageUser,
    meUserId: state.auth.userId,
    pd: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
    messageError: state.profilePage.errorMessageProfile
})

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        setCurrentIdUser,
        getUserPageFunction,
        getUserStatus,
        putUserStatus,
        addPostActionCreator,
        savePhoto,
        putProfileInfoParam
    })
)(ProfileContainerHook);