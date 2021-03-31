import React from 'react'
import s from './DFC.module.css';
import TwonyVentPhoto from '../../../assets/images/containers/20vent.jpg'

export default function TwonyVent() {
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
                        <td>19' 9,1" = 6068 mm</td>
                        <td>7' 9,99" = 2438 mm</td>
                        <td>8' 5,01"= 2591 mm</td>
                    </tr>
                    <tr>
                        <td>внутренние</td>
                        <td>19' 3,6" = 5900 mm</td>
                        <td>7' 6,21" = 2323 mm</td>
                        <td>7' 7,66" = 2367 mm</td>
                    </tr>
                    <tr>
                        <td>двери</td>
                        <td>7' 4" = 2256 mm</td>
                        <td>6'10" = 1859 mm</td>
                    </tr>
                </thead>
            </table>
            <b>
                20-футовый вентилируемый контейнер
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
                            <td>5842 lbs = 2650 kg</td>
                        </tr>
                        <tr>
                            <td>макс. загрузка</td>
                            <td>47070 lbs = 21350 kg</td>
                        </tr>
                        <tr>
                            <td>объём</td>

                            <td>1146 cub. ft. = 32,44 cub. m</td>

                        </tr>
                        <tr>
                            <th>ВЕНТИЛЯЦИЯ</th>
                            <td>Top: 9,000 cm3 x side Base: 1,000 cm3 x side</td>
                        </tr>
                    </thead>
                </table>
                <img src={TwonyVentPhoto} />
            </div>
        </div>
    )
}
