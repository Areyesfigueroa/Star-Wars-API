import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Background from './components/Background/Background';
import SoundPlayer from './components/SoundPlayer/SoundPlayer';

import backgroundImg from './assets/images/red-blue-galaxy.jpg';
import imperialSong from './assets/sounds/imperial.mp3';

import StarwarsTableSearchContainer from './containers/StarwarsTableSearchContainer/StarwarsTableSearchContainer';

function App() {

  return (
    <div className="App">
      <Background img={backgroundImg} shadowOpacity={0.7}/>
      <SoundPlayer audio={imperialSong}/>

      <Header />
      <StarwarsTableSearchContainer />
    </div>
  );
}

export default App;
