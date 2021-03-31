import React from 'react';

import CardTents from './cardsTents/CardTents';
import CardContTrals from './cardsTents/CardContTrals';
import CardOnBoardTents from './cardsTents/CardOnBoardTents';
import CardSizedTrals from './cardsTents/CardSizedTrals';

import s from './Tents.module.css';


export default function Tents() {
    return (
        
        <>
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
            </div>
        </>
    );
}
