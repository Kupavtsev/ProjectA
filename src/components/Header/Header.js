import React from 'react'
import { Link } from 'react-router-dom';
import s from './Header.module.css';
import Menu from './Menu';

export default function Header() {
    return (
        <header className={s.header}>
            <div className={s.home}>
                <Link to='/'>Габариты</Link>
            </div>
            
            <div className={s.loginBlock}>
                <Menu />
            </div>
        </header>
    )
}
