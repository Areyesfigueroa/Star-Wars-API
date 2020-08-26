import React, { useState, useEffect } from 'react';
import Table from '../../../components/Table/Table';

import PaginationContainer from '../../PaginationContainer/PaginationContainer';

import { fetchHomeworld, fetchSpecies } from '../../../http';

const StarwarsTableContainer =  (props) => {

    const [tableBody, setTableBody] = useState([]);
    const [tableHeader, setTableHeader] = useState([]);

    useEffect(() => {
        let tableData = [];
        props.data.forEach(async (person) => {
            let homeworld = person.homeworld ? await fetchHomeworld(person.homeworld.replace('http', 'https')) : "N/A";
            let species = person.species.length > 0 ? await fetchSpecies(person.species[0].replace('http', 'https')) : {name: 'Human'};
    
            tableData.push([
                person.name,
                person.birth_year,
                person.height,
                person.mass,
                homeworld.name,
                species.name
            ]);
            if(tableData.length === props.data.length) {
                setTableHeader(['Name','Birth Year','Height','Mass','Homeworld','Species']);
                setTableBody(tableData);
            }
        });
    }, [props.data]);

    return (
        <div>
            <Table 
                header={tableHeader} 
                body={tableBody}
            />   
            <PaginationContainer
                click={props.changePage}
                page={props.page}
                count={props.pageCount}
                maxDisplayCount={props.maxDisplayCount}
                totalEntries={props.totalEntries}
            />
        </div>
    );
};

export default StarwarsTableContainer;