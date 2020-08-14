import React from 'react';
import classes from './Table.module.css';

const table = () => {
    return (
        <table className={`table ${classes.Table}`}>
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Birthdate</th>
                    <th scope="col">Height</th>
                    <th scope="col">Mass</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>09/15/1994</td>
                    <td>5'6</td>
                    <td>150kg</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>09/15/1994</td>
                    <td>5'6</td>
                    <td>150kg</td>
                </tr>
                <tr>
                    <td>Frank</td>
                    <td>09/15/1994</td>
                    <td>5'6</td>
                    <td>150kg</td>
                </tr>
            </tbody>
        </table>
    );
};

export default table;