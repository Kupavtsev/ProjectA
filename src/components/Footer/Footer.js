import React from 'react'
import s from './Footer.module.css';
import { YMInitializer } from 'react-yandex-metrika';

export default function Footer() {
    return (
        <footer className={s.footer}>
            www.kpglogistic.ru
            <YMInitializer accounts={[75168874]} />
        </footer>
    )
}
