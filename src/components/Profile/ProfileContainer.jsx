import React from 'react';
import Profile from './Profile';
import {
    setUserProfile,
    setCurrentIdUser,
    getUserPageFunction,
    getUserStatus,
    putUserStatus
} from '../../redux/profile-reducer'; 
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    constructor(props, costil, lastIdParam) {
        super(props);
        this.costil = costil;
        this.lastIdParam = lastIdParam;
        this.getParamsWithUrl = this.getParamsWithUrl.bind(this);
    }

    // state = {
    //     nowUserId: `${this.props.meUserId}`
    // }

    getParamsWithUrl = (data) => { //callback функция для получения номера профиля из url 
        if (data !== this.props.currentPageUser) {
            //this.props.setUserProfile({ userID: data });
            this.props.setCurrentIdUser(data); //dispatch для нициализации перерисовки через componentDidUpdate
            // this.setState({
            //     nowUserId: data.toString()
            // });
        }
        // this.param = data;
        // if (this.param != this.props.currentPageUser) {
        //     this.props.setUserProfile({ userID: this.param });
        //     this.props.setCurrentIdUser(this.param); //dispatch для нициализации перерисовки через componentDidUpdate
        // }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentPageUser !== this.props.currentPageUser) {
            this.props.getUserPageFunction(this.props.currentPageUser); //thunk
            this.props.getUserStatus(this.props.currentPageUser);
        }
    }

    // componentDidUpdate(prevProps) { //метод жизненного цикла, запускается при изменение props-ов
    //     if (prevProps.profile) {
    //         if (this.param != prevProps.profile.userId) {
    //             this.props.getUserPageFunction(this.param); //thunk
    //             this.props.getUserStatus(this.param); //thunk

    //         }
    //     }
    // }

    componentDidMount() { //метод жизненного цикла, запускается после отрисовки компоненты
        this.props.getUserPageFunction(this.props.currentPageUser); //thunk
        this.props.getUserStatus(this.props.currentPageUser); //thunk
    }

    render() {
        return (
            // ...this.props - передача всех props
            <Profile
                {...this.props}
                getParamsWithUrl={this.getParamsWithUrl}
                param={this.props.currentPageUser}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    currentPageUser: state.profilePage.currentPageUser,
    meUserId: state.auth.userId
})

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        setCurrentIdUser,
        getUserPageFunction,
        getUserStatus,
        putUserStatus
    })
    //withAuthRedirect
)(ProfileContainer);