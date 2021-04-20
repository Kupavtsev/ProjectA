import React from 'react';
import { NavLink } from 'react-router-dom';

// My Components
import Logo from '../../../assets/images/tents/TentLogoBlackMain.png';

export default function CardTents() {
    // debugger;
    return (

        <div className="column is-half">
            <NavLink to='/tents'>
                <div className="box">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-128x128">
                                <img
                                    src={Logo}
                                    alt={'Tents'}
                                />
                            </figure>
                        </div>
                        <div className="media-content">
                            <b style={{ textTransform: "capitalize" }}>
                                Тент
                            <p><span className="tag is-primary">Полу-прицепы</span></p>
                            </b>
                            <div><br></br></div>

                            <div className="is-clearfix">
                                <button
                                    className="button is-small is-outlined is-primary   is-pulled-right" >
                                    Полу-прицепы
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
