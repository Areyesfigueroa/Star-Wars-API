import React from 'react';
import './App.css';

// Components
import Header from './components/Header/Header';
import Background from './components/Background/Background';

//Containers
import StarwarsTableSearchContainer from './containers/StarwarsTableSearchContainer/StarwarsTableSearchContainer';

function App() {

  return (
    <div className="App">
      <Background img='red-blue-galaxy.jpg' shadowOpacity={0.7}/>
      <Header />
      <StarwarsTableSearchContainer />
    </div>
  );
}

export default App;
