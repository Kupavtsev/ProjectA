import React from 'react'
import s from './DFC.module.css';
import Logo from '../../../assets/images/containers/20flatrack.jpg'

export default function FlatRack() {
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
                        <td>20' = 6096 mm</td>
                        <td>8' = 2438 mm</td>
                        <td>8' 6" = 2591 mm</td>
                    </tr>
                    <tr>
                        <td>внутренние</td>
                        <td>18'9,4" = 5727 mm</td>
                        <td>7'4,1" = 2240 mm</td>
                        <td>7'1,3" = 2170 mm</td>
                    </tr>
                    <tr>
                        <td>компактный вариант
                            (внутренние размеры)</td>
                        <td>18'9,4" = 5727 mm</td>
                        <td>7'4,1" = 2240 mm</td>
                        <td>1'4,6" = 420 mm</td>
                    </tr>
                </thead>
            </table>
            <b>
                20-футовый flatrack контейнер
            </b>
            <div className={s.tableWeight}>
                <table className='table is-bordered'>
                    <thead >
                        <tr>
                            <th>ВЕС</th>
                        </tr>
                        <tr>
                            <td><b>макс. брутто</b></td>
                            <td>66140 lbs = 30480 kg</td>

                        </tr>
                        <tr>
                            <td>тара</td>
                            <td>6500 lbs = 2950 kg</td>
                        </tr>
                        <tr>
                            <td>макс. загрузка</td>
                            <td>60690 lbs = 27530 kg</td>
                        </tr>
                        <tr>
                            <td>объём</td>
                            <td>986 cub. ft. = 27,9 cub. m</td>
                        </tr>
                    </thead>
                </table>
                <img src={Logo} alt={'picture'} />
            </div>
        </div>
    )
}
