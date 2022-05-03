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
        if (this.param != this.props.currentPageUser) {
            this.props.setUserProfile({ userID: this.param });
            this.props.setCurrentIdUser(this.param)
            // this.lastIdParam = this.param;
            debugger;
            // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.param)
            //     .then(response => {
            //         this.props.setUserProfile(response.data);
            //         debugger;
            //     })
        }

        //this.lastIdParam = this.param;
    }

    componentDidUpdate(prevProps) {
        debugger;
        if (prevProps.profile) {
            if (this.param != prevProps.profile.userId) {
                debugger;
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.param)
                    .then(response => {
                        debugger;
                        this.props.setUserProfile(response.data);
                        debugger;
                    })
            }
        }
    }

    componentDidMount() {
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.param)
            .then(response => {
                debugger;
                this.props.setUserProfile(response.data);
                debugger;
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