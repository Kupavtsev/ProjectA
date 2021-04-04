import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

import CbmFF from './CbmFF';
import CbmSE from './CbmSE';

import CbmET from './CbmET';
import CbmEF from './CbmEF';

import CbmN from './CbmN';
import CbmNS from './CbmNS';

import CbmOHT from './CbmOHT';
import CbmOHTw from './CbmOHTw';

export default function TentsEuro() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <nav class="breadcrumb is-small" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/tents">Полу-прицепы</Link></li>
                    <li class="is-active"><Link to="/tents-euro" aria-current="page">Евро-тент</Link></li>
                </ul>
            </nav>
            <div>
                <CbmFF />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <CbmSE />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <CbmET />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <CbmEF />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <CbmN />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <CbmNS />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <CbmOHT />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <CbmOHTw />
            </div>
        </div>
    )
}
