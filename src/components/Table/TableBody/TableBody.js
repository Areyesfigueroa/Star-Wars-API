import React from 'react';
import TableRow from './TableRow/TableRow';

const tableBody = (props) => {
    // console.log(props.body);
    return (
        <tbody>
            {props.body.map(row => (
                <TableRow key={row[0]} data={row}/> 
            ))}
        </tbody>
    );
};

export default tableBody;