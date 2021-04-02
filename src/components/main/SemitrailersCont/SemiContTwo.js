import React from 'react';
import Logo1 from '../../../assets/images/semitrailerCont/konteinerovoz3.jpg';
import Logo2 from '../../../assets/images/semitrailerCont/konteinerovoz2.jpg';


export default function SemiOne() {
    return (
        <div>
            Cтандартный полуприцеп-контейнеровоз
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
                        <td>1,40 м</td>
                    </tr>
                </thead>
            </table>
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <td>
                        Cтандартный полуприцеп-контейнеровоз предназначен для перевозки одного или двух
                        20 футовых стандартных контейнеров либо одного 40 футового стандартного контейнера.
                        Масса перевозимого груза на полуприцепе такой комплектации может достигать 31 000 кг.
                        Подвеска всех данных типов полуприцепов исполняется в рессорном или пневматическом варианте.
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
