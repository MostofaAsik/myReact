import React, { useEffect, useState } from 'react';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>

            <div>
                {
                    countries.map(country => {
                        console.log(country);
                        return <p>{country.name.common}</p>
                    })
                }
            </div>

        </div>
    );
};

export default Countries;