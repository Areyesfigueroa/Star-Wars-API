import React from 'react';
import TableRow from './TableRow/TableRow';

const tableBody = (props) => {

    return (
        <tbody>
            {props.body.map(row => (
                <TableRow key={row[0]} data={row}/> 
            ))}
        </tbody>
    );
};

export default tableBody;