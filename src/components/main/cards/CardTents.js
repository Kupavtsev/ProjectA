import React from 'react'

export default function CardTents() {
    return (
        <div className=" column is-half">
            <div className="box">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img
                                src="https://s2.logaster.com/static/v3/img/products/logo.png"
                                alt={'Tents'}
                            />
                        </figure>
                    </div>
                    <div className="media-content">
                        <b style={{ textTransform: "capitalize" }}>
                            Тент
                            <p><span className="tag is-primary">Полу-прицепы</span></p>
                        </b>
                        <div>Тентованные Полу-прицепы</div>

                        <div className="is-clearfix">
                            <button
                                className="button is-small is-outlined is-primary   is-pulled-right"
                                onClick={() =>
                                    alert('tents')
                                }
                            >
                                Полу-прицепы
              </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
