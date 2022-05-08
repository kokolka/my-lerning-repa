import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header>
            <img className={s.logoPage} src='https://www.clipartmax.com/png/full/131-1317081_sayence-0-0-reproduction-of-google-chrome-logo-by-sayence-drawing.png' />
        
            <div className={s.login_block}>
                {props.isAuth === true ? props.login:
                <NavLink to={'/login'}>Login</NavLink>} 
                {/*отображение имени авторизованного пользователя или сслыки на авторизацию*/} 
            </div>
        </header>
    );
}

export default Header;