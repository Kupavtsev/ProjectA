import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

// My Components
import SemiOne from './SemiOne';
import SemiTwo from './SemiTwo';
import SemiThree from './SemiThree';


export default function Semitrailers() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <nav class="breadcrumb is-small" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/tents">Полу-прицепы</Link></li>
                    <li class="is-active"><Link to="/semitrailers" aria-current="page">Бортовые полу-прицепы</Link></li>
                </ul>
            </nav>

            <div>
                <SemiOne />
            </div>
            <br></br>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <SemiTwo />
            </div>
            <br></br>
            <div data-aos="zoom-in"
                data-aos-easing="linear">
                <SemiThree />
            </div>
        </div>
    )
}
