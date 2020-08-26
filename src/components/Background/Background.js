import React from 'react';
import classes from './Background.module.css';
import Image from 'react-bootstrap/Image';

const background = (props) => {
    return (
        <div className={classes.Background}>
            <div 
                className={classes.shadowBox} 
                style={{backgroundColor: `rgba(1,1,1,${props.shadowOpacity})`}}
            >
            </div>
            <Image src={props.img} alt="Galaxy Background"/>
        </div>
    );
};

export default background;