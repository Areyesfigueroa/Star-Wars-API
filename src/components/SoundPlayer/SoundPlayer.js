import React from 'react';
import useSound from 'use-sound';
import classes from './SoundPlayer.module.css';

import empireSong from '../../sounds/.empire.mp3.icloud';

const SoundPlayer = () => {
  const [play] = useSound(empireSong);

  return <button className={classes.SoundPlayer} onClick={play}>Play Music</button>;
};

export default SoundPlayer;