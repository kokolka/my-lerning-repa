import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, setCurrentIdUser } from '../../redux/profile-reducer';
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
        debugger;
        this.param = data;
        if (this.param != this.props.currentPageUser) {
            this.props.setUserProfile({ userID: this.param });
            this.props.setCurrentIdUser(this.param)
        }
    }

    componentDidUpdate(prevProps) {
        debugger;
        if (prevProps.profile) {
            if (this.param != prevProps.profile.userId) {
                debugger;
                profileAPI.getUserPage(this.param)
                    .then(data => {
                        debugger;
                        this.props.setUserProfile(data);
                    })
            }
        }
    }

    componentDidMount() {
        debugger;
        profileAPI.getUserPage(this.param)
            .then(data => {
                debugger;
                this.props.setUserProfile(data);
            })
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
    setCurrentIdUser
})(ProfileContainer);