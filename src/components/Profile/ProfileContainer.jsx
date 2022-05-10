import React from 'react';
import Profile from './Profile';
import { 
    setUserProfile, 
    setCurrentIdUser, 
    getUserPageFunction,
    getUserStatus
} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    constructor(props, param, lastIdParam) {
        super(props);
        this.param = param;
        this.lastIdParam = lastIdParam;
        this.getParamsWithUrl = this.getParamsWithUrl.bind(this);
    }

    getParamsWithUrl = (data) => { //callback функция для получения номера профиля из url 
        this.param = data;
        if (this.param != this.props.currentPageUser) {
            this.props.setUserProfile({ userID: this.param });
            this.props.setCurrentIdUser(this.param); //dispatch для нициализации перерисовки через componentDidUpdate
        }
    }

    componentDidUpdate(prevProps) { //метод жизненного цикла, запускается при изменение props-ов
        if (prevProps.profile) {
            if (this.param != prevProps.profile.userId) {
                this.props.getUserPageFunction(this.param); //thunk
                this.props.getUserStatus(this.param); //thunk
            }
        }
    }

    componentDidMount() { //метод жизненного цикла, запускается после отрисовки компоненты
        this.props.getUserPageFunction(this.param); //thunk
        this.props.getUserStatus(this.param); //thunk
    }

    render() {
        return (
            // ...this.props - передача всех props
            <Profile
                {...this.props}
                getParamsWithUrl={this.getParamsWithUrl}
                param={this.param}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    currentPageUser: state.profilePage.currentPageUser
})

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        setCurrentIdUser,
        getUserPageFunction,
        getUserStatus
    }),
    withAuthRedirect
)(ProfileContainer);