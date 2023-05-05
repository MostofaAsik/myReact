import React from 'react';

const Knob = (props) => {
    return (
        <div style={{ border: "2px solid purple", padding: "10px", margin: '10px' }}>
            <h4>This is Knob Components</h4>
            <p>Knob counter:{props.steps}</p>
        </div>
    );
};

export default Knob;