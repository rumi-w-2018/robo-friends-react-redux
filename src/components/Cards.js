import React from 'react';
import Card from './Card';

const Cards = ( { robots } ) => {
    
    if(!robots || robots.length === 0 ) {
        return(<div className='white' >No match found...</div>);
    }

    const cardList = robots.map((robot, i) => {
        return(
            <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
        );
    });

    return (
        <div className='white pt4 pb4 pl5 pr5'>
            <div className='flex flex-wrap justify-center'>{cardList}</div>
        </div>
    );
  
};

export default Cards;