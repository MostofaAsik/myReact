import React from 'react';
import Knob from '../components/Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{ border: "2px solid black", margin: '10px', padding: '10px' }}>
            <h2>This is Dial Components</h2>
            Your steps Count: {props.steps}
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;