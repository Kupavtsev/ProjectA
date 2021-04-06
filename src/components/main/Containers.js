import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

import { YMInitializer } from 'react-yandex-metrika';

// My Components
import DFC from './Containers/DFC';
import FortyDty from './Containers/FortyDry';
import FortyFiveHC from './Containers/FortyFiveHC';
import FortyHC from './Containers/FortyHC';
import TwonyRef from './Containers/TwonyRef';
import FortyRef from './Containers/FortyRef';
import FortyRefHC from './Containers/FortyRefHC';
import TwonyIzol from './Containers/TwonyIzol';
import TwonyVent from './Containers/TwonyVent';

import TwonyOT from './Containers/TwonyOT';
import FortyOT from './Containers/FortyOT';
import FlatRack from './Containers/FlatRack';
import FortyFlatRack from './Containers/FortyFlatRack';




export default function Containers() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <nav class="breadcrumb is-small" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li class="is-active"><Link to="/containers" aria-current="page">Контейнеры</Link></li>
                </ul>
            </nav>
            <DFC />
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <FortyDty />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <FortyHC />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <FortyFiveHC />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <TwonyRef />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <FortyRef />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <FortyRefHC />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <TwonyIzol />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <TwonyVent />
            </div>

            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <TwonyOT />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <FortyOT />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <FlatRack />
            </div>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <FortyFlatRack />
            </div>

            <div class="tags">
                <span class="tag">Стандартный сухой контейнер</span>
                <span class="tag">Морской контейнер</span>
                <span class="tag">Открытый контейнер</span>
                <span class="tag">Характеристики и размеры</span>
            </div>
            <YMInitializer accounts={[75168874]} />
        </div>
    )
}
