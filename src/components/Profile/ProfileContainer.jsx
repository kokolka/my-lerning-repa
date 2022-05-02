import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profile-reducer';
import axios from 'axios';

class ProfileContainer extends React.Component {
    constructor(props, param, flagState){
        debugger;
        super(props);
        this.param = param;
        this.flagState = flagState;
        this.getParamsWithUrl = this.getParamsWithUrl.bind(this);
    }

    getParamsWithUrl = (data) =>{
        debugger;
        this.param = data;
        if(this.flagState == true){
            this.componentDidMount();
        }
        this.flagState = false;
    }
    
    componentDidMount(){
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.param)
            .then(response => {
                this.props.setUserProfile(response.data);
                this.flagState = true;
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} getParamsWithUrl={this.getParamsWithUrl}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);