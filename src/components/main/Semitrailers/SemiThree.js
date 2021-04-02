import React from 'react';
import Logo from '../../../assets/images/semitrailer/bort2xosn1.gif';


export default function SemiOne() {
    return (
        <div>
            Двухосный бортовой полуприцеп 9334-0000020-10
            <img src={Logo} />
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <th>ВЕС</th>
                        <td>6,6 т</td>
                    </tr>
                    <tr>
                        <td>грузоподъемность</td>
                        <td>16,4 т</td>
                    </tr>
                    <tr>
                        <th>РАЗМЕРЫ</th>
                        <td>длина</td>
                        <td>ширина</td>
                        <td>высота</td>
                    </tr>
                    <tr>
                        <td>внутренние габариты кузова</td>
                        <td>12,06 м</td>
                        <td>2,47 м</td>
                        <td>0,73 м</td>
                    </tr>
                    <tr>
                        <td>внешние габариты кузова</td>
                        <td>12,35 м</td>
                        <td>2,50 м</td>
                        <td>2,35 м</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
