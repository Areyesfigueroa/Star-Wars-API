import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import Header from './components/Header/Header';

//Containers
import StarwarsTableContainer from './containers/StarwarsTableContainer';

function App() {

  return (
    <div className="App">
      <Header />
      <StarwarsTableContainer />
    </div>
  );
}

export default App;
