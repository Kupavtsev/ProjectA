import React from 'react';
import Logo from '../../../assets/images/tents/96cbm.gif'

export default function CbmNS() {
    return (
        <div>
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <th>Тент 96 куб.м</th>
                    </tr>
                    <tr>
                        <th>РАЗМЕРЫ</th>
                        <td>длина</td>
                        <td>ширина</td>
                        <td>высота</td>
                    </tr>
                    <tr>
                        <td>внутренние</td>
                        <td>13,8 м</td>
                        <td>2,45 м</td>
                        <td>2,45-3,0 м</td>
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
                        <td>96 куб.м</td>
                    </tr>
                </thead>
            </table>
            <img src={Logo} alt={'picture'} />
        </div>
    )
}
