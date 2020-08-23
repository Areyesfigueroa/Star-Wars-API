import React from 'react';
import PaginationBS from 'react-bootstrap/Pagination';
import classes from './Pagination.module.css';

const pagination = (props) => (
    <div className={classes.Pagination}>
        <div>
            {`Showing ${props.fromEntries} to ${props.toEntries} of ${props.totalEntries}`}
        </div>
        <PaginationBS>
            <PaginationBS.Prev onClick={props.prevBtn}/>
                {props.buttonList}
            <PaginationBS.Next onClick={props.nextBtn}/>
        </PaginationBS>
    </div>
);

export default pagination;