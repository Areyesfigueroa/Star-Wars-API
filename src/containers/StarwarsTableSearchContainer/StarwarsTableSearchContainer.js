import React, { useEffect, useState } from 'react';

import StarwarsTableContainer from './StarwarsTableContainer/StarwarsTableContainer';
import SearchbarContainer from '../SearchbarContainer/SearchbarContainer';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import {fetchSearchResults} from '../../http';


const StarwarsTableSearchContainer = () => {

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

      return (
        <div>
          <SearchbarContainer search={handleSearch}/>
          {tableData ?
            <StarwarsTableContainer
              data={tableData}
              page={page}
              pageCount={pageCount}
              maxDisplayCount={10}
              totalEntries={totalEntries}
              changePage={setPage}
            />
            : 
            <LoadingSpinner />}
        </div>
      );
};

export default StarwarsTableSearchContainer;