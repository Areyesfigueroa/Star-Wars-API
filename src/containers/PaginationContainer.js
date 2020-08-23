import React, { useEffect, useState } from 'react';
import PaginationBtn from 'react-bootstrap/Pagination';
import Pagination from '../components/Pagination/Pagination';

const PaginationContainer = (props) => {
    
    const [buttonList, setButtonList] = useState([]);
    const [fromEntries, setFromEntries] = useState(1);
    const [toEntries, setToEntries] = useState(10);

    useEffect(() => {
        let list = [];
        for(let i = 1; i <= props.count; i++) {
            list.push((
                <PaginationBtn.Item 
                key={i} 
                active={props.page === i}
                onClick={() => props.click(i)}>
                    {i}
                </PaginationBtn.Item>
            ))
        }
        setButtonList(list);
    }, [props.page]);

    useEffect(() => {
        setFromEntries((props.page * props.maxDisplayEntries) - (props.maxDisplayEntries - 1));
        setToEntries((props.page * props.maxDisplayEntries) > props.totalEntries ? props.totalEntries: (props.page * props.maxDisplayEntries));
    }, [props.page, props.totalEntries]);

    const handlePrevBtn = () => {
        let newPage = props.page === 1 ? 1 : props.page - 1;
        props.click(newPage);
    }

    const handleNextBtn = () => {
        let newPage = props.page === props.count ? props.count : props.page + 1;
        props.click(newPage);
    }
    return (
        <Pagination
        buttonList={buttonList} 
        prevBtn={handlePrevBtn} 
        nextBtn={handleNextBtn}
        fromEntries={fromEntries}
        toEntries={toEntries}
        totalEntries={props.totalEntries} />
    );
};

export default PaginationContainer;