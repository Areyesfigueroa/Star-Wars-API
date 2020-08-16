import React from 'react';

const tableHeader = (props) => (
    <thead className="thead-dark">
        <tr>
            {props.header.map((el, i) => (
                <th key={i} score="col">{el}</th>
            ))}
        </tr>
    </thead>
);

export default tableHeader;