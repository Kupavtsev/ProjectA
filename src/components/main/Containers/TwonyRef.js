import React from 'react'
import s from './DFC.module.css';
import TwonyRefPhoto from '../../../assets/images/containers/20ref.jpg'

export default function TwonyRef() {
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
                        <td>17' 9" = 5455 mm</td>
                        <td>7' 4.15" = 2260 mm</td>
                        <td>7' 4.64" = 2275 mm</td>
                    </tr>
                    <tr>
                        <td>двери</td>
                        <td>7' 3.39" = 2237 mm</td>
                        <td>7' 4.15" = 2260 mm</td>
                    </tr>
                </thead>
            </table>
            <b>
                 20-футовый рефрижераторный контейнер
            </b>
            <div className={s.tableWeight}>
                <table className='table is-bordered'>
                    <thead >
                        <tr>
                            <th>ВЕС</th>
                        </tr>
                        <tr>
                            <td><b>макс. брутто</b></td>
                            <td>59520 lbs = 27000 kg</td>

                        </tr>
                        <tr>
                            <td>тара</td>
                            <td>6724 lbs = 3050 kg</td>
                        </tr>
                        <tr>
                            <td>макс. загрузка</td>
                            <td>52800 lbs = 23950 kg</td>
                        </tr>
                        <tr>
                            <td>объём</td>
                            <td>988.8 cub. ft. = 28.0 cub. m</td>
                        </tr>
                    </thead>
                </table>
                <img src={TwonyRefPhoto} />
            </div>
        </div>
    )
}
