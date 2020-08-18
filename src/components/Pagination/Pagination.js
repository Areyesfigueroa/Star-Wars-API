import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const pagination = (props) => {

    let buttonList = [];
    for(let i = 1; i <= props.count; i++) {
        buttonList.push((
            <Button 
            key={i}
            variant="primary"
            onClick={() => props.click(i)}>{i}</Button>
        ))
    }
    return (
    <ButtonGroup aria-label="Basic example">
        {buttonList}
    </ButtonGroup>
    );
};

export default pagination;