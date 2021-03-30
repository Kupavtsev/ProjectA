import React from 'react'

export default function CardTNVED() {
    return (
        <div className=" column is-half">
            <div className="box">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img
                                src="https://s2.logaster.com/static/v3/img/products/logo.png"
                                alt={'TN-VED'}
                            />
                        </figure>
                    </div>
                    <div className="media-content">
                        <b style={{ textTransform: "capitalize" }}>
                            ТН-ВЭД
              <span className="tag is-primary">Коды ТН-ВЭД</span>
                        </b>
                        <div>Таблица кодов</div>

                        <div className="is-clearfix">
                            <button
                                className="button is-small is-outlined is-primary   is-pulled-right"
                                onClick={() =>
                                    alert('tents')
                                }
                            >
                                Коды
              </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
