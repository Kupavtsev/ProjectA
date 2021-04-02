import React, { useEffect } from 'react';
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
