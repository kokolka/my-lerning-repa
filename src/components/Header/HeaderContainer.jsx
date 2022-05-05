import React from 'react';
import axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import { authAPI, usersAPI } from '../../api/api';

class HeaderContainer extends React.Component{
    
    componentDidMount(){
        authAPI.meUser()
        .then(data=>{
            if(data.resultCode === 0){
                let {email, id, login} = data.data;
                this.props.setAuthUserData(id, email, login);
            }
        })
    }

    render(){
        return <Header {...this.props}/>
    }
}

let matStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(matStateToProps, {
    setAuthUserData
})(HeaderContainer);