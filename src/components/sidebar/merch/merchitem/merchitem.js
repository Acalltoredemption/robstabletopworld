import React from 'react';
import Tilt from 'react-vanilla-tilt';
import './merchitem.css'



const MerchItem = ({merch}) => {
    
    return (
        <div>
            {merch &&
            merch.map(merch => {
            return(
            <div key={merch.url}>
            <div className="merchbox">
            <Tilt> 
            <div className="image-border">
                <a href={merch.url}>
            <img className="merchimg" src={merch.photo} alt="an merchandise item" />
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