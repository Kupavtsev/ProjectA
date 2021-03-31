import React from 'react'
import { NavLink } from "react-router-dom";

// My Components
import Logo from '../../../assets/images/containers/CardContainers.jpg';

export default function CardContainers() {

    return (
        <div className=" column is-half">
            <NavLink to='/tents'>
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
                                Контейнеры
                                <span className="tag is-primary">Бортовые полуприцепы</span>
                            </b>
                            <div>прицепы</div>

                            <div className="is-clearfix">
                                <button
                                    className="button is-small is-outlined is-primary   is-pulled-right">
                                    полуприцепы
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
