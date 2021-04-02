import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

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
        </div>
    )
}
