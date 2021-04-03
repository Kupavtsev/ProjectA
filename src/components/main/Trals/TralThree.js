import React from 'react';
import Logo from '../../../assets/images/trals/183_40.gif';


export default function TralThree() {
    return (
        <div>
            Трехосный низкорамный полуприцеп ТСП 94183-0000040 ( 3 - осный )
            <img src={Logo} />
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <th>ВЕС</th>
                        <td>13 т</td>
                    </tr>
                    <tr>
                        <td>грузоподъемность</td>
                        <td>45 т</td>
                    </tr>
                    <tr>
                        <th>РАЗМЕРЫ</th>
                        <td>длина площадки</td>
                        <td>ширина площадки</td>
                        <td>ширина с уширителями</td>
                    </tr>
                    <tr>
                        <td>внешние габариты полуприцепа</td>
                        <td>11 м</td>
                        <td>2,5 м</td>
                        <td>3 м</td>
                    </tr>
                    <tr>
                        <td>погрузочная высота</td>
                        <td>0,92 м</td>
                    </tr>
                </thead>
                
            </table>
        </div>
    )
}
