import React from 'react';
import Logo from '../../../assets/images/tents/85cbm.jpg'

export default function CbmEF() {
    return (
        <div>
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <th>Тент 85 куб.м</th>
                    </tr>
                    <tr>
                        <th>РАЗМЕРЫ</th>
                        <td>длина</td>
                        <td>ширина</td>
                        <td>высота</td>
                    </tr>
                    <tr>
                        <td>внутренние</td>
                        <td>13,62 м</td>
                        <td>2,48 м</td>
                        <td>2,52 м</td>
                    </tr>
                    <tr>
                        <td>внешние</td>
                        <td>13,7 м</td>
                        <td>2,55 м</td>
                        <td>4,0 м</td>
                    </tr>
                    <tr>
                        <th>ВЕС</th>
                    </tr>
                    <tr>
                        <td><b>грузоподъемность</b></td>
                        <td>20 - 24 т</td>

                    </tr>
                    <tr>
                        <td>объём</td>
                        <td>85 куб.м</td>
                    </tr>
                </thead>
            </table>
            <img src={Logo} alt={'picture'} />
        </div>
    )
}
