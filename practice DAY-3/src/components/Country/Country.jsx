import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h2 style={{ color: 'black' }}>Country-Name:{props.country.name.common}</h2>
            <img src={props.country.flags.png} alt="" />
            <p>Population: {props.country.population}</p>
            <p>Region:{props.country.region}</p>

        </div>
    );
};

export default Country;