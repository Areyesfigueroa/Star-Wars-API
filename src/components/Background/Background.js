import React from 'react';
import classes from './Background.module.css';

const background = (props) => {
    return (
        <div className={classes.Background}>
            <div 
                className={classes.shadowBox} 
                style={{backgroundColor: `rgba(1,1,1,${props.shadowOpacity})`}}></div>
            <img 
                src={require(`../../assets/${props.img}`)} 
                alt="Galaxy Background"/>
        </div>
    );
};

export default background;