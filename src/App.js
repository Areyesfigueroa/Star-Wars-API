import React from 'react';
import './App.css';

// Components
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import SectionWrapper from './components/SectionWrapper/SectionWrapper'

function App() {
  return (
    <div className="App">
      <Header />
      <SectionWrapper>
        <Table />
      </SectionWrapper>
    </div>
  );
}

export default App;
