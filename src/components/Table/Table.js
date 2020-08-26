import React from 'react';
import classes from './Table.module.css';

import Table from 'react-bootstrap/Table';

import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';


const table = (props) => {
    return (
        <div className={classes.Table}>
            <Table className="table" variant='dark' striped bordered responsive>
                <TableHeader header={props.header}/>
                <TableBody body={props.body} />
            </Table>
        </div>
    );
}

export default table;