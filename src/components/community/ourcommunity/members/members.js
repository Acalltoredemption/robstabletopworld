import React from 'react';
import './members.css';


const Members = ({members}) => {
    return(
        <div>
        <h3 className="comtitle">Our Community</h3>
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
        <div className="showcaseitemholder" key={member.name}>
            <h5 className="showcaseauthor">{member.name}</h5>
         <img className="showcaseitem" src={member.photo} onClick={showModal} alt="a community member photo" />


        <div id={specialkey} className="hidemodal">
            <span className="closebutton" onClick={closeModal}>X</span>
        <img className="modalitem" src={member.photo} alt="a community artwork submission"  />
        <p className="modaldesc">{member.bio}</p>
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