import React from 'react';
import { NavLink } from "react-router-dom";
import About from '../../../assets/images/about.png';

export default function CardTNVED() {
    return (
        <div className=" column is-half">
            <NavLink to='/about'>
            <div className="box">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img
                                src={About}
                                alt={'About'}
                            />
                        </figure>
                    </div>
                    <div className="media-content">
                            <b style={{ textTransform: "capitalize" }}>
                                Информация
                                <span className="tag is-primary">О проекте</span>
                            </b>
                            {/* <div>рамник</div>

                            <div className="is-clearfix">
                                <button
                                    className="button is-small is-outlined is-primary is-pulled-right">
                                    Контейнеры
                            </button>
                            </div> */}
                        </div>
                </div>
            </div>
            </NavLink>
        </div>
    )
}
