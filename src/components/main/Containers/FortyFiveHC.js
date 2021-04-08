import React from 'react'
import s from './DFC.module.css';
import FortyDryPhoto from '../../../assets/images/containers/40dry.jpg'

export default function FortyFiveHC() {
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
                        <td>45' = 13716 mm</td>
                        <td>8' 0'' = 2438 mm</td>
                        <td>9' 6" = 2896 mm</td>
                    </tr>
                    <tr>
                        <td>внутренние</td>
                        <td>44' 4" = 13513 mm</td>
                        <td>7' 7'' = 2311 mm</td>
                        <td>8' 8'' = 2642 mm</td>
                    </tr>
                    <tr>
                        <td>двери</td>
                        <td>7'7'' = 2311 mm</td>
                        <td>8' 5'' = 2565 mm</td>
                    </tr>
                </thead>
            </table>
            <b>
                45-футовый high cube контейнер (увеличенной ёмкости)
            </b>
            <div className={s.tableWeight}>
                <table className='table is-bordered'>
                    <thead >
                        <tr>
                            <th>ВЕС</th>
                        </tr>
                        <tr>
                            <td><b>макс. брутто</b></td>
                            <td>77117 lbs = 34934 kg</td>

                        </tr>
                        <tr>
                            <td>тара</td>
                            <td>9921 lbs = 4494 kg</td>
                        </tr>
                        <tr>
                            <td>макс. загрузка</td>
                            <td>67196 lbs = 30440 kg</td>
                        </tr>
                        <tr>
                            <td>объём</td>
                            <td>3019 cub.ft. = 82,5 cub.m</td>
                        </tr>
                    </thead>
                </table>
                <img src={FortyDryPhoto} alt={'picture'} />
            </div>
        </div>
    )
}
