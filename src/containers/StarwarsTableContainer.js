import React, { useState, useEffect, Fragment } from 'react';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';

import { fetchPeople, fetchData } from '../http';

const StarwarsTableContainer = () => {

    const [tableBody, setTableBody] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        fetchPeople(page).then(res => {
            setPageCount(Math.ceil(res.count/res.results.length));
        });
    }, [])
    
    useEffect(() => {
        fetchPeople(page).then(res => {
            populateTableBody(res.results);
        });
    }, [page]);

    const populateTableBody = (people) => {
        let tableData = [];
        people.forEach(async (person) => {
            let homeworld = person.homeworld ? await fetchData(person.homeworld) : "N/A";
            let species = person.species.length > 0 ? await fetchData(person.species[0]) : {name: 'Human'};

            tableData.push([
                person.name,
                person.birth_year,
                person.height,
                person.mass,
                homeworld.name,
                species.name
            ]);

            if(tableData.length === people.length) {
                setTableBody(tableData);
            }
        });
    }

    const table = (
        <Fragment>
            <Table 
            header={['Name','Birth Year','Height','Mass','Homeworld','Species']} 
            body={tableBody}
            /> 
    
            <Pagination click={setPage} count={pageCount}/>
        </Fragment>
    );

    return (
        <div>
            { tableBody.length > 0 ? table: null }
        </div>
    );
};

export default StarwarsTableContainer;