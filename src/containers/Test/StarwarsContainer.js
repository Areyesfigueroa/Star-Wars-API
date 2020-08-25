import React from 'react';
import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import Header from './components/Header/Header';
import Background from './components/Background/Background';

//Containers
import StarwarsTableContainer from './containers/StarwarsTableContainer';
import SearchbarContainer from './containers/SearchbarContainer';
import PaginationContainer from './containers/PaginationContainer';

//Bootstrap
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

//Axios
import {fetchSearchResults} from './http';


const StarwarsContainer = () => {

    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [totalEntries, setTotalEntries] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    
    const [tableData, setTableData]= useState(null);

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
    
      const table = () => (
        <div>
          <StarwarsTableContainer 
            data={tableData} 
            page={page}
            count={pageCount}
            maxDisplayEntries={10}
            currDisplayEntries={tableData.length}
            totalEntries={totalEntries}
            changePage={setPage}
          />
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
        <div>
          <SearchbarContainer search={handleSearch}/>
          { tableData ? table(): loadingSpinner }
        </div>
      );
};

export default StarwarsContainer;