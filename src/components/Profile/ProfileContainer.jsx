import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, setCurrentIdUser } from '../../redux/profile-reducer';
import axios from 'axios';


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
        if (this.param !== this.lastIdParam) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.param)
                .then(response => {
                    this.props.setUserProfile(response.data);
                })
        }

        this.lastIdParam = this.param;
    }

    componentDidMount() {
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.param)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} getParamsWithUrl={this.getParamsWithUrl} param={this.param} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {
    setUserProfile,
    setCurrentIdUser
})(ProfileContainer);