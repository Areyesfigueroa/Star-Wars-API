import React from 'react';

const tableRow = (props) => {
    return (
        <tr>
            {props.data.map((el, i) => (
                <td key={`${i}-${el[0]}`}>{el}</td>
            ))}
        </tr>
    );
};

export default tableRow;