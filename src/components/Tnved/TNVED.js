import React from 'react';
import { Link } from 'react-router-dom';

export default function TNVED() {
    return (
        <div>
            <nav class="breadcrumb is-small" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li class="is-active"><Link to="/tnved" aria-current="page">Коды ТН-ВЭД</Link></li>
                </ul>
            </nav>
            TNVED
        </div>
    )
}
