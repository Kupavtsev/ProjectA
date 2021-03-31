import React from 'react'
import s from './DFC.module.css';
import TwonyIzolPhoto from '../../../assets/images/containers/20izol.jpg'

export default function TwonyIzol() {
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
                        <td>19' 10,5" = 5823 mm</td>
                        <td>8' = 2438 mm</td>
                        <td>8' = 2438 mm</td>
                    </tr>
                    <tr>
                        <td>внутренние</td>
                        <td>18' 6,5" = 5685 mm</td>
                        <td>7' 4" = 2256 mm</td>
                        <td>6' 10" = 1859 mm</td>
                    </tr>
                    <tr>
                        <td>двери</td>
                        <td>7' 4" = 2256 mm</td>
                        <td>6'10" = 1859 mm</td>
                    </tr>
                </thead>
            </table>
            <b>
                20-футовый изолированный контейнер
            </b>
            <div className={s.tableWeight}>
                <table className='table is-bordered'>
                    <thead >
                        <tr>
                            <th>ВЕС</th>
                        </tr>
                        <tr>
                            <td><b>макс. брутто</b></td>
                            <td>44800 lbs = 20320 kg</td>

                        </tr>
                        <tr>
                            <td>тара</td>
                            <td>5600 lbs = 2540 kg</td>
                        </tr>
                        <tr>
                            <td>макс. загрузка</td>
                            <td>39200 lbs = 17780 kg</td>
                        </tr>
                        <tr>
                            <td>объём</td>
                            <td>929 cub. ft. = 26.31 cub. m</td>
                        </tr>
                    </thead>
                </table>
                <img src={TwonyIzolPhoto} />
            </div>
        </div>
    )
}
