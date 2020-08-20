import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import Header from './components/Header/Header';

//Components
import Pagination from './components/Pagination/Pagination';

//Containers
import StarwarsTableContainer from './containers/StarwarsTableContainer';
import SearchbarContainer from './containers/SearchbarContainer';

//Bootstrap
import Spinner from 'react-bootstrap/Spinner';

//Axios
import {fetchPeople, fetchSearchResults} from './http';

function App() {
  
  const [tableData, setTableData]= useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPeople(page).then(res => {
      setPageCount(Math.ceil(res.count/res.results.length));
    });
  }, []);

  useEffect(() => {
    fetchPeople(page).then(res => {
        setTableData(res.results);
    });
  }, [page]);


  const handleSearch = (query) => {
      fetchSearchResults(query).then(res => {
        if(!res.results) return;
        setTableData(res.results);
      });
  }

  const loadingSpinner = (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );

  return (
    <div className="App">
      <Header />
      <SearchbarContainer search={handleSearch}/>
      { tableData && pageCount ? <StarwarsTableContainer data={tableData}/>: loadingSpinner}
      { tableData && pageCount ? <Pagination click={setPage} count={pageCount} />: null}
    </div>
  );
}

export default App;
