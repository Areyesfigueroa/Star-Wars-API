import React, { useState } from 'react';
import useSound from 'use-sound';
import classes from './SoundPlayer.module.css';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import empireSong from '../../sounds/empire.mp3';
import speakerOnImg from '../../assets/speaker-on.png';
import speakerOffImg from '../../assets/speaker-off.png';


const SoundPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const [play, { stop }] = useSound(empireSong);

    const handleClick = () => {
        let newStatus = !playing;
        newStatus ? play():stop();

        setPlaying(newStatus);
    }

    return (
        <Button variant="light" className={classes.SoundPlayer} onClick={handleClick}>
            <Image src={playing ? speakerOnImg:speakerOffImg} rounded />
        </Button>
    );
};

export default SoundPlayer;