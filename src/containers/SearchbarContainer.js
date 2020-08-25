import React, { useState } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';

const SearchbarContainer = (props) => {
    const [inputValue, setInputValue] = useState('');

    const onKeyDownHandler = (event) => {
        setInputValue(event.target.value);
        if(event.keyCode === 13) props.search(event.target.value);
    }

    return (
        <div>
            <Searchbar keydown={onKeyDownHandler} search={() => props.search(inputValue)}/>
        </div>
    );
};

export default SearchbarContainer;