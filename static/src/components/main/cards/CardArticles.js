import React from 'react';
import { NavLink } from "react-router-dom";

import Logo from '../../../assets/images/cardArticles.png'

export default function Articles() {
    return (
        <div className=" column is-half">
            <NavLink to='/articles'>
            <div className="box">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img
                                src={Logo}
                                alt={'Articles'}
                            />
                        </figure>
                    </div>
                    <div className="media-content">
                        <b style={{ textTransform: "capitalize" }}>
                            Статьи
                        <p><span className="tag is-primary">Статьи о прицепах</span></p>
                        </b>
                        <div><br></br></div>

                        <div className="is-clearfix">
                            <button
                                className="button is-small is-outlined is-primary   is-pulled-right"
                                onClick={() =>
                                    alert('tents')
                                }
                            >
                                Грузовики
              </button>
                        </div>
                    </div>
                </div>
            </div>
            </NavLink>
        </div>
    )
}
