import React from 'react';
import merch1 from '../../../images/merch1.jpg';
import merch2 from '../../../images/merch2.jpg';
import merch3 from '../../../images/merch3.jpg';
import merch4 from '../../../images/merch4.jpg';
import merch5 from '../../../images/merch5.jpg';
import leftarrow from '../../../images/arrow-left-circle.svg';
import rightarrow from '../../../images/arrow-right-circle.svg';
import Tilt from 'react-vanilla-tilt';

import './merch.css';


const Merch = () => {
    return (
        <div className="merchlist">
            <p className="merch-title">Check out our 'merch!</p>
            <div className="merchbox">
            <Tilt className="tiltbox" >
            <div className="merch-item tiltitem">
                <img className="merch-image" alt="shop item" src={merch1} />
                </div>
            </Tilt>
            </div>
                <p className="merch-desc">Description of item</p>

        <div className="merchbox">    
        <Tilt className="tiltbox">
            <div className="merch-item tiltitem">
                <img className="merch-image" alt="shop item" src={merch5} />
                </div>
        </Tilt>
        </div>
                <p className="merch-desc">Description of item</p>


                <div className="merchbox">
            <Tilt className="tiltbox">
            <div className="merch-item tiltitem">
                <img className="merch-image" alt="shop item" src={merch3} />
                </div>
            </Tilt>
            </div>
                <p className="merch-desc">Description of item</p>

                <div className="merchbox">    
        <Tilt className="tiltbox">
            <div className="merch-item tiltitem">
                <img className="merch-image" alt="shop item" src={merch4} />
                </div>
        </Tilt>
        </div>
                <p className="merch-desc">Description of item</p>

                <div className="merchbox">    
        <Tilt className="tiltbox">
            <div className="merch-item tiltitem">
                <img className="merch-image" alt="shop item" src={merch2} />
                </div>
        </Tilt>
        </div>
                <p className="merch-desc">Description of item</p>
            
            <p className="arrowholder"><img width="35" alt ="left pointer arrow" height="35" src={leftarrow} />
            <img width="35" alt="right pointer arrow" height="35"  src={rightarrow} />
            </p>
            

        </div>

    )
}

export default Merch;
