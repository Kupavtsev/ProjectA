import React from 'react'
import s from './DFC.module.css';
import FortyRefPhoto from '../../../assets/images/containers/40ref.jpg'

export default function FortyRefHC() {
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
                        <td>9' 6" = 2895 mm</td>
                    </tr>
                    <tr>
                        <td>внутренние</td>
                        <td>37' 9.3" = 11560 mm</td>
                        <td>7' 5" = 2286 mm</td>
                        <td>8' 2.02" = 2500 mm</td>
                    </tr>
                    <tr>
                        <td>двери</td>
                        <td>7' 5" = 2286 mm</td>
                        <td>8' 1.3" = 2478 mm</td>
                    </tr>
                </thead>
            </table>
            <b>
                40-футовый high cube рефрижераторный контейнер (увеличенной ёмкости)
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
                            <td>9259 lbs = 4200 kg</td>
                        </tr>
                        <tr>
                            <td>макс. загрузка</td>
                            <td>57940 lbs = 26280 kg</td>
                        </tr>
                        <tr>
                            <td>объём</td>
                            <td>2126 cub. ft. = 66,1 cub. m</td>
                        </tr>
                    </thead>
                </table>
                <img src={FortyRefPhoto} alt={'picture'} />
            </div>
        </div>
    )
}
