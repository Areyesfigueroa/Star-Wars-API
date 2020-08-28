import React from 'react';
import classes from './Header.module.css';
import Image from 'react-bootstrap/Image';

import stormTrooperGif from '../../assets/images/stormtrooper.gif';
import redSaber from '../../assets/images/Left_Red_01.png';
import blueSaber from '../../assets/images/Right_Blue_01.png';

//NOTE: This heroku project is only accepting inline css for this component.
const header = () => {
    const headerStyle = {
        margin: "30px 0",
        padding: "0 100px"
    };
    const stormTrooperImgStyle = {
        width: "auto",
        height: "50px"
    };
    const titleStyle = {
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
    const lightSaberImgStyle = {
        width: "100%",
        height: "auto"
    }
    return (
        <header className={classes.Header} style={headerStyle}>
            <Image style={stormTrooperImgStyle} src={stormTrooperGif}/>
            <div style={titleStyle}>
                <div>
                    <Image style={lightSaberImgStyle} src={redSaber}/>
                </div>
                <h1 style={{minWidth: "300px"}}>Star Wars APi</h1>
                <div>
                    <Image style={lightSaberImgStyle} src={blueSaber}/>
                </div>
            </div>
        </header>
    );
};

export default header;  