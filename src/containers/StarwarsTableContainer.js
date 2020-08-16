import React, { useState, useEffect } from 'react';
import Table from '../components/Table/Table';

import { fetchPeople, fetchData } from '../http';

const StarwarsTableContainer = () => {

    const [people, setPeople] = useState([]);
    const [tableBody, setTableBody] = useState([]);

    useEffect(() => {
        fetchPeople(1).then(res => {
            setPeople(res.results);
        });
    }, []);

    useEffect(() => {
        if (people.length <= 0) return;
        let tableData = [];
        people.forEach(async (person) => {
            let homeworld = person.homeworld ? await fetchData(person.homeworld) : "N/A";
            let species = person.species.length > 0 ? await fetchData(person.species[0]) : {name: 'N/A'};

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

    }, [people]);

    return (
        <div>
            {tableBody.length > 0 ? 
            <Table 
            header={['Name','Birth Year','Height','Mass','Homeworld','Species']} 
            body={tableBody} 
            />: null}
        </div>
    );
};

export default StarwarsTableContainer;