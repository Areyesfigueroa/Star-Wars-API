import React, { useState, useEffect, Fragment } from 'react';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';
import Spinner from 'react-bootstrap/Spinner';

import { fetchPeople, fetchData } from '../http';

const StarwarsTableContainer = () => {

    const [tableBody, setTableBody] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        fetchPeople(page).then(res => {
            setPageCount(Math.ceil(res.count/res.results.length));
        });
    }, [])
    
    useEffect(() => {
        fetchPeople(page).then(res => {
            setLoading(true);
            populateTableBody(res.results);
        });
    }, [page]);

    useEffect(() => setLoading(false), [tableBody]);

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
        <Table 
        header={['Name','Birth Year','Height','Mass','Homeworld','Species']} 
        body={tableBody}
        />         
    );

    const loadingSpinner = (
        <div 
        style={
            {
                display: 'flex', 
                height: "616px", 
                padding: "30px", 
                marginTop: "50px", 
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box"
            }}>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );

    return (
        <div>
            { loading ? loadingSpinner : table }
            { pageCount===0 ? null :  <Pagination click={setPage} count={pageCount} /> }

        </div>
    );
};

export default StarwarsTableContainer;