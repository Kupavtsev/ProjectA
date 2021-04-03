import React from 'react';

export default function Articles() {
    return (
        <div className=" column is-half">
            <div className="box">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img
                                src="https://s2.logaster.com/static/v3/img/products/logo.png"
                                alt={'Articles'}
                            />
                        </figure>
                    </div>
                    <div className="media-content">
                        <b style={{ textTransform: "capitalize" }}>
                            Статьи
                        <p><span className="tag is-primary">Статьи о прицепах</span></p>
                        </b>
                        <div>прицеп</div>

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
        </div>
    )
}
