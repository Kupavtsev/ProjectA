import React from 'react'
import { NavLink } from "react-router-dom";

// My Components
import Logo from '../../../assets/images/containers/CardContainers.jpg';

export default function CardContTrals() {

    return (
        <div className=" column is-half">
            <NavLink to='/semitrailers-cont'>
                <div className="box">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-128x128">
                                <img
                                    src={Logo}
                                    alt={'Trals'}
                                ></img>
                            </figure>
                        </div>
                        <div className="media-content">
                            <b style={{ textTransform: "capitalize" }}>
                                низкорамные 
                                <span className="tag is-primary">П/п - контейнеровозы</span>
                            </b>
                            <div>рамник</div>

                            <div className="is-clearfix">
                                <button
                                    className="button is-small is-outlined is-primary   is-pulled-right">
                                    контейнерные площадки
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
