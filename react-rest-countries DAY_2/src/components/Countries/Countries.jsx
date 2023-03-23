import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>

            <h2>Hlw From Countries</h2>
            <div className='container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                        // name={country.name.common}
                        population={country.population}
                        flags={country.flags.png}
                    // region={country.region}
                    ></Country>)
                }
            </div>

        </div>
    );
};
// function Country(props) {
//     return (
//         <div>
//             <h1>Country-Name:{props.name}</h1>
//             <p>Population:{props.population}</p>
//         </div>
//     )
// }

export default Countries;