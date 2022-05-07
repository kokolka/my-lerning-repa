import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, setCurrentIdUser, getUserPageFunction } from '../../redux/profile-reducer';
import axios from 'axios';
import { profileAPI } from '../../api/api';


class ProfileContainer extends React.Component {
    constructor(props, param, lastIdParam) {
        debugger;
        super(props);
        this.param = param;
        this.lastIdParam = lastIdParam;
        this.getParamsWithUrl = this.getParamsWithUrl.bind(this);
    }

    getParamsWithUrl = (data) => {
        this.param = data;
        if (this.param != this.props.currentPageUser) {
            this.props.setUserProfile({ userID: this.param });
            this.props.setCurrentIdUser(this.param)
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.profile) {
            if (this.param != prevProps.profile.userId) {
                this.props.getUserPageFunction(this.param);
            }
        }
    }

    componentDidMount() {
        this.props.getUserPageFunction(this.param);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} getParamsWithUrl={this.getParamsWithUrl} param={this.param} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    currentPageUser: state.profilePage.currentPageUser
})

export default connect(mapStateToProps, {
    setUserProfile,
    setCurrentIdUser,
    getUserPageFunction
})(ProfileContainer);