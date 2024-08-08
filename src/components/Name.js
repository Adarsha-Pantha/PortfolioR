import React from "react";
import adarshaImage from '../images/Adarsha.jpg'; // Adjust the path if necessary

export default function Name() {
    return (
        <div>
            <img src={adarshaImage} alt="Adarsha" style={{ width: '500px', height: '350px', borderRadius: '50%' }} />
        </div>
    );
}
