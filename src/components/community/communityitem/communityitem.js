import React from 'react';
import './communityitem.css';


const Item = ({items}) => {
    return(
        <div>
        <h3 className="comtitle">Community Showcase</h3>
        <div className="showcaseholder">
            {
            items && 
            items.map(item => {
                return(
        <div>
            <p>{item.name}</p>
         <img className="showcaseitem" src={item.photo} />
            <p>{item.description}</p>
        </div>
        
                            )
                        })
                    }
         </div>
         </div>
        
            )
}
 
export default Item;