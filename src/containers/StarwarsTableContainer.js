import React, { useState, useEffect } from 'react';
import Table from '../components/Table/Table';

import { fetchData } from '../http';

const StarwarsTableContainer =  (props) => {

    const [tableBody, setTableBody] = useState([]);

    useEffect(() => {
        let tableData = [];
        props.data.forEach(async (person) => {
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
            if(tableData.length === props.data.length) {
                setTableBody(tableData);
            }
        });
    }, [props.data]);

    useEffect(() => {
        console.log(tableBody);
    }, [tableBody]);

    return (
        <div>
            {/* <Table 
            header={['Name','Birth Year','Height','Mass','Homeworld','Species']} 
            body={tb}
            />    */}
        </div>
    );
};

export default StarwarsTableContainer;