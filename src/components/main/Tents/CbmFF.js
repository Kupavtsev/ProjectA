import React from 'react';
import Logo from '../../../assets/images/tents/55cbm.jpg'

export default function CbmFF() {
    return (
        <div>
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <th>Тент 55 куб.м</th>
                    </tr>
                    <tr>
                        <th>РАЗМЕРЫ</th>
                        <td>длина</td>
                        <td>ширина</td>
                        <td>высота</td>
                    </tr>
                    <tr>
                        <td>внутренние</td>
                        <td>9,84 м</td>
                        <td>2,42 м</td>
                        <td>2,32 м</td>
                    </tr>
                    <tr>
                        <th>ВЕС</th>
                    </tr>
                    <tr>
                        <td><b>грузоподъемность</b></td>
                        <td>14 - 18 т</td>

                    </tr>
                    <tr>
                        <td>объём</td>
                        <td>55 куб.м</td>
                    </tr>
                </thead>
            </table>
            <img src={Logo} />
        </div>
    )
}
