import React from 'react';
import classes from './Header.module.css';

const header = () => {
    return (
        <header className={classes.Header}>
            <img src={require('../../assets/stormtrooper.gif')}/>
            <div className={classes.title}>
                <div>
                    <img src={require('../../assets/Left_Red_01.png')}/>
                </div>
                <h1>Star Wars APi</h1>
                <div>
                    <img src={require('../../assets/Right_Blue_01.png')}/>
                </div>
            </div>
        </header>
    );
};

export default header;  