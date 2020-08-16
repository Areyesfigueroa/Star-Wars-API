import React from 'react';
import classes from './Table.module.css';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';

const table = (props) => {
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