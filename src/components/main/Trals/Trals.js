import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

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
        </div>
    )
}
