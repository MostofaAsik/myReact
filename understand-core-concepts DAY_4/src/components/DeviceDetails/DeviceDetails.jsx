import React from 'react';

const DeviceDetails = (props) => {
    return (
        <div>
            <h2>Information About Device Details</h2>
            <p>Price:{props.price}</p>
        </div>
    );
};

export default DeviceDetails;