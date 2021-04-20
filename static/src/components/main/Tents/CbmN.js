import React from 'react';
import Logo from '../../../assets/images/tents/90cbm.gif'

export default function CbmN() {
    return (
        <div>
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <th>Тент 90 куб.м</th>
                    </tr>
                    <tr>
                        <th>РАЗМЕРЫ</th>
                        <td>длина</td>
                        <td>ширина</td>
                        <td>высота</td>
                    </tr>
                    <tr>
                        <td>внутренние</td>
                        <td>13,6 м</td>
                        <td>2,45 м</td>
                        <td>2,60 м</td>
                    </tr>
                    <tr>
                        <th>ВЕС</th>
                    </tr>
                    <tr>
                        <td><b>грузоподъемность</b></td>
                        <td>20-24 т</td>

                    </tr>
                    <tr>
                        <td>объём</td>
                        <td>90 куб.м</td>
                    </tr>
                </thead>
            </table>
            <img src={Logo} alt={'picture'} />
        </div>
    )
}
