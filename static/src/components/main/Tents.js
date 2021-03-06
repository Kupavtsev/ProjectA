import React from 'react';
import { Link } from 'react-router-dom';

import { YMInitializer } from 'react-yandex-metrika';

import CardTents from './cardsTents/CardTents';
import CardContTrals from './cardsTents/CardContTrals';
import CardOnBoardTents from './cardsTents/CardOnBoardTents';
import CardSizedTrals from './cardsTents/CardSizedTrals';

import s from './Tents.module.css';


export default function Tents() {
    return (
        
        <>
        <nav className="breadcrumb is-small" aria-label="breadcrumbs">
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li className="is-active"><Link to="/tents" aria-current="page">Полу-прицепы</Link></li>
            </ul>
        </nav>
        <div className={s.main}>
            <div className="hero is-small is-primary">
                <div className="hero-body container">
                    <h4 className="title">Виды грузовых полуприцепов</h4>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="column columns is-multiline">
                    <CardTents />
                    <CardContTrals />
                    <CardOnBoardTents />
                    <CardSizedTrals />
                </div>
            </div>
            <YMInitializer accounts={[75168874]} />
            </div>
        </>
    );
}
