import React from 'react';
import Profile from './Profile';
import { setUserProfile, setCurrentIdUser, getUserPageFunction } from '../../redux/profile-reducer';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
    constructor(props, param, lastIdParam) {
        debugger;
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
            }
        }
    }

    componentDidMount() { //метод жизненного цикла, запускается после отрисовки компоненты
        this.props.getUserPageFunction(this.param); //thunk
    }

    render() {
        
        if(!this.props.isAuth) return <Navigate to={'/login'}/>;
        return (
            // ...this.props - передача всех props
            <Profile
                {...this.props}
                profile={this.props.profile}
                getParamsWithUrl={this.getParamsWithUrl}
                param={this.param}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    currentPageUser: state.profilePage.currentPageUser,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
    setUserProfile,
    setCurrentIdUser,
    getUserPageFunction
})(ProfileContainer);