import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header>
            <img className={s.logoPage} src='https://www.clipartmax.com/png/full/131-1317081_sayence-0-0-reproduction-of-google-chrome-logo-by-sayence-drawing.png' />

            <div className={s.login_block}>
                {props.isAuth === true ?
                    <div>
                        {props.login}
                        <div>
                            <button onClick={()=>{props.deleteLogOut()}}>Log Out</button> 
                        </div>
                    </div> :
                    <NavLink to={'/login'}>Login</NavLink>}
                {/*отображение имени авторизованного пользователя или сслыки на авторизацию*/}
            </div>
        </header>
    );
}

export default Header;