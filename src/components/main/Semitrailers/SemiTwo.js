import React from 'react';
import Logo from '../../../assets/images/semitrailer/bort3xosn1.gif';


export default function SemiOne() {
    return (
        <div>
            Трехосный полуприцеп бортовой с раздвижными кониками
            <img src={Logo} alt={'picture'} />
            <table className='table is-bordered'>
                <thead>
                    <tr>
                        <th>ВЕС</th>
                        <td>8,5 т</td>
                    </tr>
                    <tr>
                        <td>грузоподъемность</td>
                        <td>29,5 т</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
