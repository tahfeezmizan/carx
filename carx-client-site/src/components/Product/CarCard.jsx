import React from 'react';

const CarCard = ({card}) => {
    const {name, price, brandname} = card;

    return (
        <div className='p-10 bg-slate-100 '>
            <h2>{name}</h2>
            <h2>{brandname}</h2>
            <p className="">{price}</p>
        </div>
    );
};

export default CarCard;