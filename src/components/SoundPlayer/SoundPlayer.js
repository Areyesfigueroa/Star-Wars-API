import React, { useState } from 'react';
import classes from './SoundPlayer.module.css';

import useSound from 'use-sound';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import speakerOnImg from '../../assets/images/speaker-on.png'; 
import speakerOffImg from '../../assets/images/speaker-off.png';

//NOTE: This heroku project is only accepting inline css for this component.
const SoundPlayer = (props) => {
    const [playing, setPlaying] = useState(false);
    const [play, { stop }] = useSound(props.audio, {
        onend: () => play()
    });

    const handleClick = () => {
        let newStatus = !playing;
        newStatus ? play():stop();

        setPlaying(newStatus);
    }

    return (
        <Button variant="light" className={classes.SoundPlayer} onClick={handleClick}>
            {/* Image toggle not working on Heroku */}
            <Image src={playing ? speakerOnImg:speakerOffImg} rounded />
        </Button>
    );
};

export default SoundPlayer;