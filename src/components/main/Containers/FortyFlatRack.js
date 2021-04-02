import React from 'react'
import s from './DFC.module.css';
import Logo from '../../../assets/images/containers/40flatrack.jpg'

export default function FortyFlatRack() {
    return (
        <div className={s.opentops}>

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
                        <td>39'5,6" = 12032mm</td>
                        <td>7'4,1" = 2240 mm</td>
                        <td>6'8,1" = 2034 mm</td>
                    </tr>
                    <tr>
                        <td>компактный вариант
                            (внутренние размеры)</td>
                        <td>39'5,6" = 12032 mm</td>
                        <td>7'4,1" = 2240 mm</td>
                        <td>1'10,4" = 570 mm</td>
                    </tr>
                </thead>
            </table>
            <b>
               40-футовый flatrack контейнер
            </b>
            <div className={s.tableWeight}>
                <table className='table is-bordered'>
                    <thead >
                        <tr>
                            <th>ВЕС</th>
                        </tr>
                        <tr>
                            <td><b>макс. брутто</b></td>
                            <td>88180 lbs = 45000 kg</td>

                        </tr>
                        <tr>
                            <td>тара</td>
                            <td>12190 lbs = 5530 kg</td>
                        </tr>
                        <tr>
                            <td>макс. загрузка</td>
                            <td>87020 lbs = 39470 kg</td>
                        </tr>
                        <tr>
                            <td>объём</td>
                            <td>1936 cub. ft. = 54,8 cub. m</td>
                        </tr>
                    </thead>
                </table>
                <img src={Logo} />
            </div>
        </div>
    )
}
