import React from 'react'
import s from './DFC.module.css';
import FortyRefPhoto from '../../../assets/images/containers/40ref.jpg'

export default function FortyRef() {
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
                        <td>37' 9.1" = 11555 mm</td>
                        <td>7' 5" = 2286 mm</td>
                        <td>7' 4.8" = 2280 mm</td>
                    </tr>
                    <tr>
                        <td>двери</td>
                        <td>7' 4.97" = 2285 mm</td>
                        <td>7' 3.65" = 2245 mm</td>
                    </tr>
                </thead>
            </table>
            <b>
                40-футовый рефрижераторный контейнер
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
                            <td>9634 lbs = 4370 kg</td>
                        </tr>
                        <tr>
                            <td>макс. загрузка</td>
                            <td>57560 lbs = 26110 kg</td>
                        </tr>
                        <tr>
                            <td>объём</td>
                            <td>2126 cub. ft. = 60,2 cub. m</td>
                        </tr>
                    </thead>
                </table>
                <img src={FortyRefPhoto} alt={'picture'} />
            </div>
        </div>
    )
}
