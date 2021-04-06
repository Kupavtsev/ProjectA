import React from 'react'
import MainList from '../main/MainList';
import s from './Content.module.css';

import { YMInitializer } from 'react-yandex-metrika';

export default function Content() {
    return (
        <div className={s.content}>
            <MainList />
            <YMInitializer accounts={[75168874]} />
        </div>
    )
}
