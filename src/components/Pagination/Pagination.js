import React from 'react';
import Button from 'react-bootstrap/Button';
import PaginationBS from 'react-bootstrap/Pagination';
import classes from './Pagination.module.css';

const pagination = (props) => (
    <div className={classes.Pagination}>
        <div>
            {`Showing ${props.fromEntries} to ${props.toEntries} of ${props.totalEntries}`}
        </div>
        <div className={classes.row}>
            {/* <Button style={{height: "38px"}} variant='primary' onClick={props.prevBtn}>Prev</Button> */}
            <PaginationBS>
                <PaginationBS.Prev onClick={props.prevBtn}/>
                    {props.buttonList}
                <PaginationBS.Next onClick={props.nextBtn}/>
            </PaginationBS>
            {/* <Button style={{height: "38px"}} variant='primary' onClick={props.nextBtn}>Next</Button>         */}
        </div>
    </div>
);

export default pagination;