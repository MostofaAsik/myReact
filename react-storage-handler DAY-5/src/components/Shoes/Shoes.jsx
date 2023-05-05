import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const mutiplication = multiply(10, 15);
    return (
        <div style={{ border: '2px solid red' }}>
            <h3>This is shoes components</h3>
            <p>TotalMul:{mutiplication}</p>
        </div>
    );
};

export default Shoes;