import React from 'react';
import classes from './Header.module.css';
import Image from 'react-bootstrap/Image';

import stormTrooperGif from '../../assets/images/stormtrooper.gif';
import redSaber from '../../assets/images/Left_Red_01.png';
import blueSaber from '../../assets/images/Right_Blue_01.png';

const header = () => {
    return (
        <header className={classes.headerComp}>
            <Image src={stormTrooperGif}/>
            <div className={classes.title}>
                <div>
                    <Image src={redSaber}/>
                </div>
                <h1>Star Wars APi</h1>
                <div>
                    <Image src={blueSaber}/>
                </div>
            </div>
        </header>
    );
};

export default header;  