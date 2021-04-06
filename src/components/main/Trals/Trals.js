import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

import { YMInitializer } from 'react-yandex-metrika';

// My Components
import TralOne from './TralOne';
import TralTwo from './TralTwo';
import TralThree from './TralThree';


export default function Trals() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <nav class="breadcrumb is-small" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/tents">Полу-прицепы</Link></li>
                    <li class="is-active"><Link to="/trals" aria-current="page">Низкорамные полу-прицепы</Link></li>
                </ul>
            </nav>
            <div>
                <TralOne />
            </div>
            <br></br>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <TralTwo />
            </div>
            <br></br>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <TralThree />
            </div>
            <YMInitializer accounts={[75168874]} />
        </div>
    )
}
