import React from 'react';
import classes from './Table.module.css';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';

const table = (props) => {
    // console.log(props.header);
    // console.log(props.body);

    return (
        <div className={classes.Table}>
            <table className="table">
                <TableHeader header={props.header}/>
                <TableBody body={props.body} />
            </table>
        </div>
    );
}

export default table;

            {/* <thead className="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Birthdate</th>
                    <th scope="col">Height</th>
                    <th scope="col">Mass</th>
                    <th scope="col">Homeworld</th>
                    <th scope="col">Species</th>
                </tr>
            </thead> */}