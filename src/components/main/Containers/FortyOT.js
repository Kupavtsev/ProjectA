import React from 'react'
import s from './DFC.module.css';
import Logo from '../../../assets/images/containers/40optop.jpg'

export default function FortyOT() {
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
                        <td>39' 5,2" = 12021 mm</td>
                        <td>7' 8,4" = 2350 mm</td>
                        <td>7' 7,7" = 2367 mm</td>
                    </tr>
                    <tr>
                        <td>двери</td>
                        <td>7' 8" = 2338 mm</td>
                        <td>7' 3,8" = 2234 mm</td>
                    </tr>
                </thead>
            </table>
            <b>
                  40-футовый контейнер с открытым верхом open top
            </b>
            <div className={s.tableWeight}>
                <table className='table is-bordered'>
                    <thead >
                        <tr>
                            <th>ВЕС</th>
                        </tr>
                        <tr>
                            <td><b>макс. брутто</b></td>
                            <td>79370 lbs = 36000 kg</td>

                        </tr>
                        <tr>
                            <td>тара</td>
                            <td>9760 lbs = 4430 kg</td>
                        </tr>
                        <tr>
                            <td>макс. загрузка</td>
                            <td>69600 lbs = 31570 kg</td>
                        </tr>
                        <tr>
                            <td>объём</td>
                            <td>2355 cub. ft. = 66,7 cub. m</td>
                        </tr>
                    </thead>
                </table>
                <img src={Logo} alt={'picture'} />
            </div>
        </div>
    )
}
