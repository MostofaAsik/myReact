import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    return (
        <div style={{ border: '2px solid red', margin: '10px', backgroundColor: 'pink' }}>
            <h3>Country-Name:{props.country.name.common}</h3>
            <p>Population:{props.population}</p>
            <img src={props.flags} alt="" />
            <p>Region:{props.country.region}</p>
        </div>
    );
};

export default Country;