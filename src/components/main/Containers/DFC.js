import React from 'react'
import s from './DFC.module.css';
import DFCPhoto from '../../../assets/images/containers/20dry.jpg'

export default function DFC() {
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
                        <td>20' = 6096 mm</td>
                        <td>7' 9.25" = 2370 mm</td>
                        <td>8' 6" = 2591 mm</td>
                    </tr>
                    <tr>
                        <td>внутренние</td>
                        <td>19' 5.75" = 5935 mm</td>
                        <td>7' 8" = 2335 mm</td>
                        <td>7' 9.75" = 2383 mm</td>
                    </tr>
                    <tr>
                        <td>двери</td>
                        <td>7' 8" = 2335 mm</td>
                        <td>7' 6.25" = 2292 mm</td>
                    </tr>
                </thead>
            </table>
            <b>
                20-футовый стандартный контейнер
            </b>
            <div className={s.tableWeight}>
                <table className='table is-bordered'>
                    <thead >
                        <tr>
                            <th>ВЕС</th>
                        </tr>
                        <tr>
                            <td><b>макс. брутто</b></td>
                            <td>52910 lbs = 24000 kg</td>

                        </tr>
                        <tr>
                            <td>тара</td>
                            <td>4585 lbs = 2080 kg</td>
                        </tr>
                        <tr>
                            <td>макс. загрузка</td>
                            <td>48325 lbs = 21920 kg</td>
                        </tr>
                        <tr>
                            <td>объём</td>
                            <td>1197.25 cub. ft. = 33,9 cub. m</td>
                        </tr>
                    </thead>
                </table>
                <img src={DFCPhoto} />
            </div>
        </div>
    )
}
