import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import classes from './Pagination.module.css';

const pagination = (props) => (
    <div className={classes.Pagination}>
        <div>
            {`Showing ${props.fromEntries} to ${props.toEntries} of ${props.totalEntries}`}
        </div>
        <div>
            <Button variant='primary' onClick={props.prevBtn}>Prev</Button>
            <ButtonGroup aria-label="Basic example">
                {props.buttonList}
            </ButtonGroup>
            <Button variant='primary' onClick={props.nextBtn}>Next</Button>        
        </div>
    </div>
);

export default pagination;