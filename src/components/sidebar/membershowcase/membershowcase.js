import React from 'react';
import './membershowcase.css';
import history from '../../../history/history';
import Tilt from 'react-vanilla-tilt';
import backgroundphoto from '../../../images/communitybackground.png';


const MemberShowcase = () => {

    function redirect(){
        history.push('/community')
    }

    return (

        <div id="showcase-list">
            
            <div className="upcoming" onClick={redirect}> 
            <div className="upcomingbox">
            <Tilt className="tiltbox"> 
            <div className="image-border">
            <div className="upcomingcontent2">
            <p className="wartitle">Our Community</p>
            </div>
            <img className="upcomingimg" src={backgroundphoto} alt="an upcoming event" />
            </div>
            </Tilt>
            </div> 
            </div>  
        </div>
    )

}
 
export default MemberShowcase;