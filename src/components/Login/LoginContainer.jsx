import { connect } from 'react-redux'; //'formik';
import React from 'react';
import Login from './Login';
import {postLogin} from '../../redux/auth-reducer';

let mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth
    }
}

 
let LoginContainer = connect(mapStateToProps, {
    postLogin
})(Login);

export default LoginContainer;