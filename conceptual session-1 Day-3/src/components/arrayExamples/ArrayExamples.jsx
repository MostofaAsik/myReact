import React, { useState } from 'react';
import { guns } from '../../../test';

const ArrayExamples = () => {
    const [data, setdata] = useState(guns)
    const handleRemove = (id) => {
        const filteredData = data.filter(d => d.id !== id)
        setdata(filteredData)

    }

    return (
        <div>
            <div>
                {
                    data.map(singleData => (
                        <>
                            <p>{singleData.name}</p>
                            <button onClick={() => handleRemove(singleData.id)} className='btn mt-4'>Remove</button>
                        </>
                    ))
                }
            </div>
            <div>
                <button onClick={() => setdata([])} className='btn btn-secondary mt-12'>Remove All</button>
                <br /><br />
                <input onChange={(e) => console.log(e.target.value)} type="text" placeholder='write a comment' />
            </div>
        </div>
    );
};

export default ArrayExamples;