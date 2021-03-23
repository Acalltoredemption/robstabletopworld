import React from 'react';
import './membershowcase.css';
import history from '../../../history/history';
import Tilt from 'react-vanilla-tilt';
import backgroundphoto from '../../../images/communitybackground.png';
import {Badge} from 'antd';

const {Ribbon} = Badge;

const MemberShowcase = () => {

    function redirect(){
        history.push('/community')
    }

    return (

        <div id="showcase-list">
            
            <div className="upcoming" onClick={redirect}> 
            <div className="upcomingbox">
            <Tilt className="tiltbox"> 
            <Ribbon text="Our Community" color="cyan">
            <div className="image-border">
            <img className="upcomingimg" src={backgroundphoto} alt="an upcoming event" />
            </div>
            </Ribbon>
            </Tilt>
            </div> 
            </div>  
        </div>
    )

}
 
export default MemberShowcase;