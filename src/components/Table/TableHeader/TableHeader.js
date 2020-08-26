import React from 'react';

const tableHeader = (props) => {
    const tableHeaderStyle = {
        color: '#fff',
        backgroundColor: '#666666',
        borderColor: '#454d55'
    };
    return (
        <thead className="thead-dark">
            <tr>
                {props.header.map((el, i) => (
                    <th style={tableHeaderStyle} key={i} score="col">{el}</th>
                ))}
            </tr>
        </thead>
    );
};

export default tableHeader;