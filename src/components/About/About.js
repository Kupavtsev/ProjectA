import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            <nav class="breadcrumb is-small" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li class="is-active"><Link to="/tnved" aria-current="page">О проекте</Link></li>
                </ul>
            </nav>
            <br></br>
            <strong>О проекте</strong>
            <br></br>
            <br></br>
            Данный сайт содержит обзор основных полу прицепов используемых на еврофурах.
            Виды и типы океанских транспортных контейнеров, контейнеровозов.
            Низкорамные тралы для перевозки негабаритных грузов.
            <br></br>
            Указаны внешние, внутренние размеры и характеристики по грузоподъемности и объему.
        </div>
    )
}
