import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import s from './Login.module.css';
import {postLogin} from '../../redux/auth-reducer';
import { Navigate } from "react-router-dom";

const Login = (props) => {

    let handlerThank = (email, password, rememberMe) => {
        postLogin(email, password, rememberMe);
    }
     
    if(props.isAuth === true){ 
        return <Navigate to={'/profile'}/>
    }

    return(
        <div className={s.Login_box}>
            <h1>Login</h1>
            <LoginForm postLogin = {handlerThank}/>
            <button onClick={() => {
                postLogin('kirill-i_98@mail.ru', 'Mrdidok141592Z1998rehb', true);
            }}>
                Sing In
            </button>
        </div>
    );
}

export default Login;