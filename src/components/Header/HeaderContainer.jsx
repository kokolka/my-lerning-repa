import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {meUser, deleteLogOut} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component{
    
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

export default connect(matStateToProps, {deleteLogOut})(HeaderContainer);