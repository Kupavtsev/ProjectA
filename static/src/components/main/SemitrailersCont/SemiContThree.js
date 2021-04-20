import React from 'react';
import Logo1 from '../../../assets/images/semitrailerCont/bortcont1.gif';


export default function SemiOne() {
    return (
        <div>
            Бортовой полуприцеп контейнеровоз
            <img src={Logo1} alt={'picture'} />
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
                        <td>погрузочная высота</td>
                    </tr>
                    <tr>
                        <td>внутренние габариты кузова</td>
                        <td>12,39 - 13,0 м</td>
                        <td>2,48 м</td>
                        <td>0,6 м</td>
                    </tr>
                    <tr>
                        <th>ВЕС</th>
                        <td>7 - 9 т</td>
                    </tr>
                    <tr>
                        <td>грузоподъемность</td>
                        <td>35 - 50 т</td>
                    </tr>
                </thead>
            </table>
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <td>
                        Контейнеровоз дополнительно оборудован 12 фитингами для перевозки контейнеров 20 футов и 40 футов. Борта съемные.
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
