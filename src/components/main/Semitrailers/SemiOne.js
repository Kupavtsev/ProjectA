import React from 'react';
import Logo from '../../../assets/images/semitrailer/bort2xosn2.gif';


export default function SemiOne() {
    return (
        <div>
            Двухосный бортовой полуприцеп 9334-24-10 с кониками
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
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <td>
                        Полуприцеп бортовой 9334-24-10 с кониками предназначен для перевозки различных грузов по общей сети дорог,
                        допускающих осевую нагрузку до 8 т. Коники полуприцепа раздвижные,
                        в транспортном положении с закрытыми бортами расстояние между кониками полуприцепа состовляет 2 260 мм,
                        в раздвинутом положении внутреннее расстояние между кониками увеличивается до 3м.
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
