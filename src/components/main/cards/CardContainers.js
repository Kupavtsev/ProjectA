import React from 'react'
import { Link } from "react-router-dom";
import CardContainersLogo from '../../../assets/images/containers/CardContainers.jpg';

export default function CardContainers() {

    const linkToCoontainers = () => {
        <Link to="/containers" />
    }

    return (
        <div className=" column is-half">
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
              <span className="tag is-primary">Полу-Контейнеры</span>
                        </b>
                        <div>рамник</div>

                        <div className="is-clearfix">
                            <button
                                className="button is-small is-outlined is-primary   is-pulled-right"
                                onClick={ linkToCoontainers }
                            >
                                Containers
              </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
