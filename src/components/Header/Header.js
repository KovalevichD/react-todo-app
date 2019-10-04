import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logoWrap}>
                <a href="http://localhost:3000" className={style.logo}>To do app</a>
            </div>
        </header>
    )
}

export default Header;