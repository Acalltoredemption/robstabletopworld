import React from 'react';
import Tilt from 'react-vanilla-tilt';
import './merchitem.css'



const MerchItem = ({merch}) => {
    
    return (
        <div className="upcoming">
            {merch &&
            merch.map(merch => {
            return(
            <div>
            <div className="upcomingbox">
            <Tilt className="tiltbox"> 
            <div className="image-border">
                <a href={merch.url}>
            <img className="showcase maindiv" src={merch.photo} alt="an merchandise item" />
            </a>
            </div>
            </Tilt> 
            </div>

            <div className="upcoming-desc">
                {merch.description}
            </div>
            </div>
            )
            })}
            </div>
      );
}
 
export default MerchItem;