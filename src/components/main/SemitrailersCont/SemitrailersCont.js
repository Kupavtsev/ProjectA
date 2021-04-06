import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

import { YMInitializer } from 'react-yandex-metrika';

// My Components
import SemiContOne from './SemiContOne';
import SemiContTwo from './SemiContTwo';
import SemiContThree from './SemiContThree';


export default function SemitrailersCont() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <nav class="breadcrumb is-small" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/tents">Полу-прицепы</Link></li>
                    <li class="is-active"><Link to="/semitrailers-cont" aria-current="page">Полуприцепы - контейнеровозы</Link></li>
                </ul>
            </nav>

            <div>
                <SemiContOne />
            </div>
            <br></br>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <SemiContTwo />
            </div>
            <br></br>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <SemiContThree />
            </div>
            <YMInitializer accounts={[75168874]} />
        </div>
    )
}
