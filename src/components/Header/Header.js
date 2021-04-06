import React from 'react'
import { Link } from 'react-router-dom';
import s from './Header.module.css';
// import Menu from './Menu';
import MenuClass from './MenuClass';
import Home from '../../assets/images/home.png';

import { YMInitializer } from 'react-yandex-metrika';

export default function Header() {
    return (
        <header className={s.header}>
            <div className={s.home}>
                <br></br>
                <Link to='/'>
                    <img src={Home} alt='Габариты' />
                    </Link>
            </div>
            
            <div className={s.loginBlock}>
                <MenuClass />
            </div>
            <YMInitializer accounts={[75168874]} />
        </header>
    )
}
