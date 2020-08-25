import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import classes from './Searchbar.module.css';

const searchbar = (props) => {
    return (
        <div className={classes.Searchbar}>
            <InputGroup className="mb-3">
                <FormControl
                onKeyDown={(event) => props.keydown(event)}
                placeholder="Search Character..."
                aria-label="Searchbar"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button variant="outline-danger" onClick={props.search}>Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default searchbar;