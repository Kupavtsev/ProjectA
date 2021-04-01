import React from 'react';
import Logo from '../../../assets/images/tents/120cbm.gif'

export default function CbmOHTw() {
    return (
        <div>
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <th>Тент 120 куб.м</th>
                    </tr>
                    <tr>
                        <th>РАЗМЕРЫ</th>
                        <td>длина</td>
                        <td>ширина</td>
                        <td>высота</td>
                    </tr>
                    <tr>
                        <td>внутренние п/пр</td>
                        <td>8,0 м</td>
                        <td>2,45 м</td>
                        <td>2,95 м</td>
                    </tr>
                    <tr>
                        <td>внутренние прицеп</td>
                        <td>8,0 м</td>
                        <td>2,45 м</td>
                        <td>3,0 м</td>
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
                        <td>120 куб.м</td>
                    </tr>
                </thead>
            </table>
            <img src={Logo} />
        </div>
    )
}
