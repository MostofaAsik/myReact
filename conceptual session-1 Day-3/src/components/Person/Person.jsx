import React, { useState } from 'react';
import Messege from '../Messege/Messege';
import './Person.css'
import { guns } from '../../../test';

const Person = () => {
    const [data, setData] = useState(guns)
    return (
        <div>
            <h1>MAS</h1>
            <Messege></Messege>

            <div>
                {
                    data.map(gun => {
                        <>
                            <p>{gun.name}</p>
                        </>

                    })
                }
            </div>
        </div>

    );
};

export default Person;