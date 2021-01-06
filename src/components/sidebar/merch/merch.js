import React from 'react';
import merch1 from '../../../images/merch1.jpg';
import merch2 from '../../../images/merch2.jpg';
import merch3 from '../../../images/merch3.jpg';
import Tilt from 'react-vanilla-tilt';

import './merch.css';


const Merch = () => {
    return (
        <div className="merchlist">
            <p className="merch-title">Check out our 'merch!</p>
            <div className="merchbox">
            <Tilt className="tiltbox" >
            <div className="merch-item tiltitem">
                <img className="merch-image" src={merch1} />
                </div>
            </Tilt>
            </div>
                <p className="merch-desc">Description of item</p>

        <div className="merchbox">    
        <Tilt className="tiltbox">
            <div className="merch-item tiltitem">
                <img className="merch-image" src={merch2} />
                </div>
        </Tilt>
        </div>
                <p className="merch-desc">Description of item</p>

                
                <div className="merchbox">
            <Tilt className="tiltbox">
            <div className="merch-item tiltitem">
                <img className="merch-image" src={merch3} />
                </div>
            </Tilt>
            </div>
                <p className="merch-desc">Description of item</p>
            
            

        </div>

    )
}

export default Merch;
