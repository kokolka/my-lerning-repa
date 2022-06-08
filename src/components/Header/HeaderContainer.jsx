import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {meUser, deleteLogOut} from '../../redux/auth-reducer';
import { getIsAuth, getLogin } from '../../redux/auth-selectors';

class HeaderContainer extends React.Component{
    
    render(){
        return <Header {...this.props}/>
    }
}

let matStateToProps = (state) => {
    return{
        isAuth: getIsAuth(state),
        login: getLogin(state)
    }
}

export default connect(matStateToProps, {deleteLogOut})(HeaderContainer);