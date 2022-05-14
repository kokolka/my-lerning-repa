import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import s from './Login.module.css';
import {postLogin} from '../../redux/auth-reducer';

const Login = () => {
    return(
        <div className={s.Login_box}>
            <h1>Login</h1>
            <LoginForm postLogin = {postLogin}/>
        </div>
    );
}

export default Login;