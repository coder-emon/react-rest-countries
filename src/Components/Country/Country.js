import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props.country)
    const { name, area, population, flags} = props.country;
    return (
        <div className='country bg-warning'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;