import React from 'react';
import './members.css';
import comimage from '../../../../images/CommunityShowcase.png';

const Members = ({members}) => {
    return(
        <div>
        <div className="artbanner">
        <div className="comtitle">
            <img src={comimage} className="comimg" alt="Community Showcase Banner" />
            <div className="thetitle">
        <h2>Community Showcase</h2>
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
<div class="showcasecard">
<img src={member.photo} alt="A community member photo" onClick={showModal} className='showcaseitem' alt="a showcase item" />
<div class="container">
  <h4><b>{member.name}</b></h4>


        <div id={specialkey} className="hidemodal">
            <span className="closebutton" onClick={closeModal}>X</span>
        <img className="modalitem" src={member.photo} alt="a community photo submission"  />
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