import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import s from './Login.module.css';
import { Navigate } from "react-router-dom";


const Login = ({postLogin, isAuth, numberError, messageError}) => {

    if (isAuth === true) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div className={s.Login_box}>
            <h1>Login</h1>
            <LoginForm
                postLogin={postLogin}
                numberError={numberError}
                messageError={messageError}
            />
            {/* 'kirill-i_98@mail.ru', 'Mrdidok141592Z1998rehb', true */}
        </div>
    );
}

export default Login;