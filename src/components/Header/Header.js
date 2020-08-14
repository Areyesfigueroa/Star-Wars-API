import React from 'react';
import classes from './Header.module.css';

const header = () => {
    return (
        <header className={classes.Header}>   
            <h1>Star Wars API</h1>
        </header>
    );
};

export default header;  