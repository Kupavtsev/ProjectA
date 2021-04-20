import React from 'react'
import { Link } from "react-router-dom";

import { YMInitializer } from 'react-yandex-metrika';

export default function Menu() {
    return (
        <nav>
            <div
                className="navbar container"
                role="navigation">
                <Link to="/tents" className="navbar-item">
                    Полу-прицепы
                    </Link>

                <Link to="/trucks" className="navbar-item">
                    Грузовики
                    </Link>

                <Link to="/containers" className="navbar-item">
                    Контейнеры
                    </Link >

                <Link to="/tnved" className="navbar-item">
                    Тн-ВЭД
                    </Link>
            </div>
            <YMInitializer accounts={[75168874]} />
        </nav>
    )
}
