import React from 'react';
import Donate from '../../../images/donate.png'




const Donation = () => {
    return ( 
        <div className="miniholder">
        <a href="https://streamlabs.com/robstabletopworld/tip" target="_blank" rel="noopener noreferrer">
            <img className="minimarket" src={Donate} alt="Donate to support the channel!" />
            </a>
        </div>
     );
};

export default Donation;
 
