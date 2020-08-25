import React, { useEffect, useState } from 'react';
import Sound from 'react-sound';
import './App.css';

// Components
import Header from './components/Header/Header';
import Background from './components/Background/Background';
import SoundPlayer from './components/SoundPlayer/SoundPlayer';

//Containers
import StarwarsTableContainer from './containers/StarwarsTableContainer';
import SearchbarContainer from './containers/SearchbarContainer';
import PaginationContainer from './containers/PaginationContainer';

//Bootstrap
import Spinner from 'react-bootstrap/Spinner';

//Axios
import {fetchSearchResults} from './http';

function App() {
  
  const [tableData, setTableData]= useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [totalEntries, setTotalEntries] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {

    fetchSearchResults(searchValue, page).then(res => {
        setTotalEntries(res.count);
        setPageCount(Math.ceil(res.count/10));
        setTableData(res.results);
    });
  }, [page, searchValue]);


  const handleSearch = (query) => {
    setSearchValue(query);
    setPage(1);
  }

  const loadingSpinner = (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );

  const table = () => (
    <div>
      <StarwarsTableContainer data={tableData} />
      <PaginationContainer
        click={setPage}
        page={page}
        count={pageCount}
        maxDisplayEntries={10}
        currDisplayEntries={tableData.length}
        totalEntries={totalEntries}
      />
    </div>
  );

  return (
    <div className="App">
      {/* <SoundPlayer 
      url={'./sounds/empire.mp3'}
      playStatus={Sound.status.PLAYING} /> */}
      <Background img='red-blue-galaxy.jpg' shadowOpacity={0.7}/>
      <Header />
      <SearchbarContainer search={handleSearch}/>
      { tableData ? table(): loadingSpinner }
    </div>
  );
}

export default App;
