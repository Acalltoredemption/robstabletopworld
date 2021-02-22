import React from 'react';
import './communityitem.css';
import artimage from '../../../images/ArtShowcase.png';


const Item = ({items}) => {
    return(
        <div >
            <div className="artbanner">
        <div className="comtitle">
            <img src={artimage} className="dungeonimg" />
            <div className="thetitle">
        <h2>Art Showcases</h2>
            </div> 
        </div>
        </div>
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
  
<div key={item.name}>
<div class="showcasecard">
<img src={item.photo} alt="A community artwork submission" onClick={showModal} className='showcaseimage' />
<div class="container">
  <h4><b>{item.name}</b></h4>


        <div id={specialkey} className="hidemodal">
            <span className="closebutton" onClick={closeModal}>X</span>
        <img className="modalitem" src={item.photo} alt="a community artwork submission"  />
        <p className="modaldesc">{item.description}</p>
        </div>


</div>
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