import React from 'react';
// import Logo1 from '../../../assets/images/semitrailerCont/konteinerovoz1.jpg';
import Logo1 from '../../../assets/images/semitrailerCont/unnamed.jpg';


export default function SemiOne() {
    return (
        <div>
            Низкорамные полуприцепы-контейнеровозы
            <img src={Logo1} />
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
                        <td></td>
                        <td>12,65 м</td>
                        <td>2,50 м</td>
                        <td>1,10 м</td>
                    </tr>
                </thead>
            </table>
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <td>
                        Низкорамные полуприцепы-контейнеровозы используются для перевозки сухогрузных контейнеров повышенной вместимости.
                        Низкорамные полуприцепы контейнеровозы предназначены для перевозки одного 20 футового высокого / стандартного контейнера,
                        двух 20 футовых контейнеров или одного 40 футового высокого / стандартного контейнера.
                        Масса перевозимого груза на низкорамных полуприцепах может достигать 34 000 кг.
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
