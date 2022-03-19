import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return (
        <header>
        {/* <header className={h.header}> */}
            <img className={h.logoPage} src='https://www.clipartmax.com/png/full/131-1317081_sayence-0-0-reproduction-of-google-chrome-logo-by-sayence-drawing.png' />
        </header>
    );
}

export default Header;