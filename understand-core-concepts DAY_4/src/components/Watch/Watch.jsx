import React, { useEffect, useState } from 'react';
import Dial from '../../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0)  //destructuring
    const increaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps)
    }
    useEffect(() => {
        console.log("hello");

    }, [steps])

    return (
        <div style={{ border: "3px solid red", padding: '10px' }}>
            <h2>This my Digital watch</h2>
            <p>Steps:{steps}</p>
            <button onClick={increaseSteps} >De Dour...</button>
            <Dial steps={steps}></Dial>

        </div>
    );
}


export default Watch;