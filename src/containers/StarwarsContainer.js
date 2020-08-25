import React, { useEffect, useState } from 'react';

//Containers
import StarwarsTableContainer from './StarwarsTableContainer';
import SearchbarContainer from './SearchbarContainer';

//Bootstrap
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

//Axios
import {fetchSearchResults} from '../http';


const StarwarsContainer = () => {

    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [totalEntries, setTotalEntries] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    
    const [tableData, setTableData]= useState(null);

    useEffect(() => {
        console.log("Change Page or search");
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

export default StarwarsContainer;