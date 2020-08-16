import React from 'react';

const tableRow = (props) => {
    return (
        <tr>
            {props.data.map((el) => (
                <td key={el}>{el}</td>
            ))}
        </tr>
    );
};

export default tableRow;