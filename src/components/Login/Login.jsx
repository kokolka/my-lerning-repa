import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import s from './Login.module.css';

const Login = () => {
    return(
        <div className={s.Login_box}>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
}

export default Login;