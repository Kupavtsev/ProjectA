import React from 'react'
import MainList from '../main/MainList';
import s from './Content.module.css';

export default function Content() {
    return (
        <div className={s.content}>
            <MainList />
        </div>
    )
}
