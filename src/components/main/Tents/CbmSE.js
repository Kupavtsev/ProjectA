import React from 'react';
import Logo from '../../../assets/images/tents/68cbm.jpg'

export default function CbmSE() {
    return (
        <div>
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <th>Тент 68 куб.м</th>
                    </tr>
                    <tr>
                        <th>РАЗМЕРЫ</th>
                        <td>длина</td>
                        <td>ширина</td>
                        <td>высота</td>
                    </tr>
                    <tr>
                        <td>внутренние</td>
                        <td>12,26 м</td>
                        <td>2,42 м</td>
                        <td>2,32 м</td>
                    </tr>
                    <tr>
                        <td>внешние</td>
                        <td>12,5 м</td>
                        <td>2,55 м</td>
                        <td>4,0 м</td>
                    </tr>
                    <tr>
                        <th>ВЕС</th>
                        <td>7,5 т</td>
                    </tr>
                    <tr>
                        <td><b>грузоподъемность</b></td>
                        <td>20 - 24 т</td>

                    </tr>
                    <tr>
                        <td>объём</td>
                        <td>68 куб.м</td>
                    </tr>
                </thead>
            </table>
            <img src={Logo} />
        </div>
    )
}
