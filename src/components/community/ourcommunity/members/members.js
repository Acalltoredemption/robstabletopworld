import React from 'react';
import './members.css';
import comimage from '../../../../images/CommunityShowcase.png';

const Members = ({members}) => {
    return(
        <div>
        <div className="artbanner">
        <div className="comtitle">
            <img src={comimage} className="dungeonimg" alt="Community Showcase Banner" />
            <div className="thetitle">
        <h2 className="titlestyler">Community Showcase</h2>
            </div>
        </div>
        </div>
        <div className="showcaseholder">
            {
            members && 
            members.map(member => {
            var specialkey = member.name;

            function closeModal(){
                document.getElementById(member.name).className="hidemodal"
            }
            function showModal(){
                document.getElementById(member.name).className="showmodal"
            }

            
                return(
<div key={member.name}>
<div className="showcasecard">
<img src={member.photo} onClick={showModal} className='showcaseitem' alt="a showcase item" />
<div className="container">
  <h4><b>{member.name}</b></h4>


        <div id={specialkey} className="hidemodal">
            <span className="closebutton" onClick={closeModal}>X</span> 
        <img className="modalitem" src={member.photo} alt="a community submission"  />
        <p className="modaldesc">{member.bio}</p>
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
 
export default Members;