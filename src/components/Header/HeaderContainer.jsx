import React from 'react';
import axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component{
    
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
        .then(response=>{
            if(response.data.resultCode === 0){
                let {email, id, login} = response.data.data;
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