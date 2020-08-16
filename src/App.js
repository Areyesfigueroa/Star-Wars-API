import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import Header from './components/Header/Header';
import Table from './components/Table/Table';

import {fetchData} from './http';

function App() {

  const [people, setPeople] =  useState(null);

  useEffect(() => {
    fetchData('people/?page=1').then(res => {
      setPeople(res.results);
    });
    console.log('update');
  }, []);

  return (
    <div className="App">
      <Header />
      {people ? <Table data={people}/> : null}
    </div>
  );
}

export default App;
