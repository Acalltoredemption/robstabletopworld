import React from 'react';
import './communityitem.css';
import artimage from '../../../images/ArtShowcase.png';
import {Badge} from 'antd';

const {Ribbon} = Badge;

const Item = ({items}) => {
    return(
        <div >
            <div className="artbanner">
        <div className="comtitle">
            <img src={artimage} className="dungeonimg" alt="Community banner " />
            <div className="thetitle">
        <h2 className="titlestyler">Art Showcase</h2>
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
                document.getElementById(item.description).classList.add("resizer");
            }
            function showModal(){
                document.getElementById(item.description).classList.remove("resizer");
                document.getElementById(item.name).className="showmodal";
            }

            
                return(
  
<div key={item.name} >
<div className="showcasecard resizer" id={item.description}>
    <Ribbon color="gold" text={item.name}>
    <div onClick={showModal}>
<img src={item.photo} alt="A community artwork submission" id="theimage" className='showcaseimage' />
</div>
</Ribbon>


        <div id={specialkey} className="hidemodal">
            <span className="closebutton" onClick={closeModal}>X</span>
        <img className="modalitem" src={item.photo} alt="a community artwork submission"  />
        <p className="modaldesc">{item.description}</p>
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