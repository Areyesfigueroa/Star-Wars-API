import React from 'react';

const tableRow = (props) => (
    <tr>
        {props.data.map((el, i) => (
            <td key={`${i}-${el[0]}`}>{el}</td>
        ))}
    </tr>
);

export default tableRow;