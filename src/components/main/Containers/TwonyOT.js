import React from 'react'
import s from './DFC.module.css';
import Logo from '../../../assets/images/containers/20optop.jpg'

export default function TwonyOT() {
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
                        <td>8' = 2438 mm</td>
                        <td>8' 6" = 2591 mm</td>
                    </tr>
                    <tr>
                        <td>внутренние</td>
                        <td>19' 4,3" = 5902 mm</td>
                        <td>7' 6,21" = 2323 mm</td>
                        <td>7' 7,66" = 2367 mm</td>
                    </tr>
                    <tr>
                        <td>двери</td>
                        <td>7' 4" = 2256 mm</td>
                        <td>7' 8,5" = 2352 mm</td>
                    </tr>
                </thead>
            </table>
            <b>
                 20-футовый контейнер с открытым верхом open top
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
                            <td>5380 lbs = 2440 kg</td>
                        </tr>
                        <tr>
                            <td>макс. загрузка</td>
                            <td>47520 lbs = 21560 kg</td>
                        </tr>
                        <tr>
                            <td>объём</td>
                            <td>1133 cub. ft. = 32 cub. m</td>
                        </tr>
                    </thead>
                </table>
                <img src={Logo} alt={'picture'} />
            </div>
        </div>
    )
}
