
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
            var specialkey = item.name;

            function closeModal(){
                document.getElementById(item.name).className="hidemodal"
            }
            function showModal(){
                document.getElementById(item.name).className="showmodal"
            }

            
                return(
        <div className="showcaseitemholder" key={item.name}>
            <h5 className="showcaseauthor">{item.name}</h5>
         <img className="showcaseitem" src={item.photo} onClick={showModal} alt="a community artwork submission" />


        <div id={specialkey} className="hidemodal">
            <span className="closebutton" onClick={closeModal}>X</span>
        <img className="modalitem" src={item.photo} alt="a community artwork submission"  />
        <p className="modaldesc">{item.description}</p>
        </div>


        </div>


        
                            )
                        })
                    }
         </div>
         </div>
        
            )
}
 
export default Item;