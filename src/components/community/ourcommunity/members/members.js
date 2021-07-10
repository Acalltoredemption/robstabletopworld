import React from 'react';
import './members.css';
import comimage from '../../../../images/CommunityShowcase.png';
import {Badge} from 'antd';

const {Ribbon} = Badge;
const Members = ({members}) => {
    return(
        <div>
            <div className="container2">
        <div className="artbanner">
        
            <img src={comimage} className="dungeonimg" alt="Community Showcase Banner" />
            <div className="thetitle">
        <h2 className="titlestyler2">Our Community</h2>
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
                document.getElementById(member.bio).classList.add("resizer");
            }
            function showModal(){
                document.getElementById(member.bio).classList.remove("resizer");
                document.getElementById(member.name).className="showmodal";
            }

            
                return(
<div key={member.name}>
<div className="showcasecard resizer" id={member.bio}>
    <Ribbon color="gold" text={member.name}>
<img src={member.photo} onClick={showModal} className='showcaseitem' alt="a showcase item" />
</Ribbon>


        <div id={specialkey} className="hidemodal">
            <span className="closebutton" onClick={closeModal}>X</span> 
        <img className="modalitem" src={member.photo} alt="a community submission"  />
        <p className="modaldesc">{member.bio}</p>
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