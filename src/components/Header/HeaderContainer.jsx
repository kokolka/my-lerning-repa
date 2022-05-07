import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {meUser} from '../../redux/auth-reducer'; 
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component{
    
    componentDidMount(){
        this.props.meUser();
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
    meUser
})(HeaderContainer);