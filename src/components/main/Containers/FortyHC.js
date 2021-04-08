import React from 'react'
import s from './DFC.module.css';
import FortyDryPhoto from '../../../assets/images/containers/40dry.jpg'

export default function FortyHC() {
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
                        <td>39' 3.25" = 12022 mm</td>
                        <td>7' 8.5" = 2352 mm</td>
                        <td>8' 10.25" = 2700 mm</td>
                    </tr>
                    <tr>
                        <td>двери</td>
                        <td>7' 5.75" = 2340 mm</td>
                        <td>8' 5.75" = 2585 mm</td>
                    </tr>
                </thead>
            </table>
            <b>
                40-футовый high cube контейнер (увеличенной ёмкости)
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
                            <td>9150 lbs = 4150 kg</td>
                        </tr>
                        <tr>
                            <td>макс. загрузка</td>
                            <td>58050 lbs = 26330 kg</td>
                        </tr>
                        <tr>
                            <td>объём</td>
                            <td>2697 cub. ft. = 76,4 cub. m</td>
                        </tr>
                    </thead>
                </table>
                <img src={FortyDryPhoto} alt={'picture'} />
            </div>
        </div>
    )
}
