import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

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



export default function Containers() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div>
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
        </div>
    )
}
