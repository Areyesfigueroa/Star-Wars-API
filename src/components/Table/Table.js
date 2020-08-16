import React from 'react';
import classes from './Table.module.css';
import TableRows from './TableRows/TableRows';

const table = (props) => {
    console.log(props.data);

    //[row1[col1, col2, col3], row2[col1, col2, col3]]
    //name, birth_year, height, mass
    let tableData = [];
    props.data.forEach(person => {
        tableData.push(
            [
                person.name, 
                person.birth_year, 
                person.height, 
                person.mass
            ]);
    });


    return (
        <div className={classes.Table}>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Birthdate</th>
                        <th scope="col">Height</th>
                        <th scope="col">Mass</th>
                    </tr>
                </thead>
                <TableRows data={tableData}/>
            </table>
        </div>
    );
};

export default table;