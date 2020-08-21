import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import Header from './components/Header/Header';

//Containers
import StarwarsTableContainer from './containers/StarwarsTableContainer';
import SearchbarContainer from './containers/SearchbarContainer';
import PaginationContainer from './containers/PaginationContainer';

//Bootstrap
import Spinner from 'react-bootstrap/Spinner';

//Axios
import {fetchPeople, fetchSearchResults} from './http';

function App() {
  
  const [tableData, setTableData]= useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [totalEntries, setTotalEntries] = useState(0);

  useEffect(() => {
    fetchPeople(page).then(res => {
      setPageCount(Math.ceil(res.count/res.results.length));
      setTotalEntries(res.count);
    });
  }, []);

  useEffect(() => {
    if(isDisplayingSearchData()) return;
    fetchPeople(page).then(res => {
        setTableData(res.results);
    });
  }, [page]);


  const handleSearch = (query) => {
      fetchSearchResults(query).then(res => {
        if(!res.results) return;
        setTableData(res.results);
        setPage(0); 
      });
  }

  const isDisplayingSearchData = () => {
    return page === 0;
  }

  const loadingSpinner = (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );

  const displayTable = () => {
    if(tableData && pageCount)
    {
      return (
        <div>
          <StarwarsTableContainer data={tableData}/>
          <PaginationContainer 
            click={setPage} 
            page={page} 
            count={pageCount} 
            maxDisplayEntries={10}
            totalEntries={totalEntries}
          />
        </div>
      );
    } else {
      return loadingSpinner;
    }
  }

  return (
    <div className="App">
      <Header />
      <SearchbarContainer search={handleSearch}/>
      { displayTable() }
    </div>
  );
}

export default App;
