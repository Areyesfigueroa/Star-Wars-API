import React, { useRef } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';

const SearchbarContainer = (props) => {

    const inputEl = useRef(null);
    // const handleSearch = () => {
    //     fetchSearchResults(inputEl.current.value).then(response => {
    //         if(!response.results) return;
    //         props.searchResults(response.results);
    //     });
    // }

    return (
        <div>
            <Searchbar reference={inputEl} search={() => props.search(inputEl.current.value)}/>
        </div>
    );
};

export default SearchbarContainer;