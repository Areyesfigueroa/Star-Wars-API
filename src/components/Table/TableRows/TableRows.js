import React from 'react';
import TableRow from './TableRow/TableRow';

const tableRows = (props) => {

    return (
        <tbody>
            {props.data.map(row => (
                <TableRow key={row[0]} data={row}/> 
            ))}
        </tbody>
    );
};

export default tableRows;