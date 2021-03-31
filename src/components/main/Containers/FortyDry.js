import React from 'react'
import s from './DFC.module.css';
import FortyDryPhoto from '../../../assets/images/containers/40dry.jpg'

export default function FortyDty() {
    return (
        <div className={s.dfc}>

            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <th>РАЗМЕРЫ</th>
                        <td>длина</td>
                        <td>ширина</td>
                        <td>высота</td>
                    </tr>
                    <tr>
                        <td>внешние</td>
                        <td>40' = 12192 mm</td>
                        <td>8' = 2438 mm</td>
                        <td>8'6" = 2591 mm</td>
                    </tr>
                    <tr>
                        <td>внутренние</td>
                        <td>39' 3.25" = 12022 mm</td>
                        <td>7' 5.625" = 2352 mm</td>
                        <td>7' 10.25" = 2395 mm</td>
                    </tr>
                    <tr>
                        <td>двери</td>
                        <td>7' 8.25" = 2343 mm</td>
                        <td>7' 5.75" = 2280 mm</td>
                    </tr>
                </thead>
            </table>
            <b>
                40-футовый стандартный контейнер
            </b>
            <div className={s.tableWeight}>
                <table className='table is-bordered'>
                    <thead >
                        <tr>
                            <th>ВЕС</th>
                        </tr>
                        <tr>
                            <td><b>макс. брутто</b></td>
                            <td>67200 lbs = 30480 kg</td>

                        </tr>
                        <tr>
                            <td>тара</td>
                            <td>8600 lbs = 3900 kg</td>
                        </tr>
                        <tr>
                            <td>макс. загрузка</td>
                            <td>58600 lbs = 26580 kg</td>
                        </tr>
                        <tr>
                            <td>объём</td>
                            <td>2392 cub. ft. = 67,7 cub. m</td>
                        </tr>
                    </thead>
                </table>
                <img src={FortyDryPhoto} />
            </div>
        </div>
    )
}
