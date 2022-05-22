import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import s from './Login.module.css';
import { Navigate } from "react-router-dom";


const Login = (props) => {

    if (props.isAuth === true) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div className={s.Login_box}>
            <h1>Login</h1>
            <LoginForm
                postLogin={props.postLogin}
                numberError={props.numberError}
                messageError={props.messageError}
            />
            {/* 'kirill-i_98@mail.ru', 'Mrdidok141592Z1998rehb', true */}
        </div>
    );
}

export default Login;