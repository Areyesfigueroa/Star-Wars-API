import React, { useRef } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';

const SearchbarContainer = (props) => {

    const inputEl = useRef(null);

    const onKeyDownHandler = (event) => {
        if(event.keyCode === 13) props.search(inputEl.current.value);
    }

    return (
        <div>
            <Searchbar reference={inputEl} keydown={onKeyDownHandler} search={() => props.search(inputEl.current.value)}/>
        </div>
    );
};

export default SearchbarContainer;