import React from 'react'
import { NavLink } from "react-router-dom";

// My Components
import CardContainersLogo from '../../../assets/images/containers/CardContainers.jpg';
import Containers from '../Containers';

export default function CardContainers() {

    return (
        <div className=" column is-half">
            <NavLink to='/tents'>
                <div className="box">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-128x128">
                                <img
                                    src={CardContainersLogo}
                                    alt={'Containers'}
                                ></img>
                            </figure>
                        </div>
                        <div className="media-content">
                            <b style={{ textTransform: "capitalize" }}>
                                Контейнеры
                                <span className="tag is-primary">Тралы и низкорамники</span>
                            </b>
                            <div>тралы </div>

                            <div className="is-clearfix">
                                <button
                                    className="button is-small is-outlined is-primary   is-pulled-right">
                                    Containers
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
