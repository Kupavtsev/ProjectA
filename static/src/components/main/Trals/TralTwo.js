import React from 'react';
import Logo from '../../../assets/images/trals/82_20.gif';


export default function TralTwo() {
    return (
        <div>
            Двухосный низкорамный полуприцеп ТСП 94182-0000020 ( 2 - осный )
            <img src={Logo} alt={'picture'} />
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <th>ВЕС</th>
                        <td>10,8 т</td>
                    </tr>
                    <tr>
                        <td>грузоподъемность</td>
                        <td>26,2 т</td>
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
                        <td>3 м</td>
                        <td>3,50 м</td>
                    </tr>
                    <tr>
                        <td>погрузочная высота</td>
                        <td>0,864 м</td>
                    </tr>
                </thead>
                
            </table>
        </div>
    )
}
