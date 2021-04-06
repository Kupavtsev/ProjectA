import React from 'react'
import { NavLink } from "react-router-dom";

import { YMInitializer } from 'react-yandex-metrika';

// My Components
import Logo from '../../../assets/images/tents/TentLogoBlack.jpg';

export default function CardContainers() {

    return (
        <div className=" column is-half">
            <NavLink to='/tents-euro'>
                <div className="box">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-128x128">
                                <img
                                    src={Logo}
                                    alt={'Containers'}
                                ></img>
                            </figure>
                        </div>
                        <div className="media-content">
                            <b style={{ textTransform: "capitalize" }}>
                                еврофуры
                                <span className="tag is-primary">Грузовые полуприцепы</span>
                            </b>
                            <div>сцепки</div>

                            <div className="is-clearfix">
                                <button
                                    className="button is-small is-outlined is-primary   is-pulled-right">
                                    Тентованные
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
            <YMInitializer accounts={[75168874]} />
        </div>
    )
}
