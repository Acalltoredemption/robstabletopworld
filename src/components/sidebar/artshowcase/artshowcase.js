import React from 'react';
import './artshowcase.css';
import history from '../../../history/history';
import Tilt from 'react-vanilla-tilt';
import artbackground from '../../../images/artbackground.png';

const Showcase = () => {

    function redirect(){
        history.push('/art')
    }

                   

    return (

<div id="showcase-list">
<div className="upcoming" onClick={redirect}> 
<div className="upcomingbox">
<Tilt className="tiltbox"> 
<div className="image-border">
<div className="upcomingcontent2">
<p className="wartitle">Art Showcase</p>
</div>
<img className="upcomingimg" src={artbackground} alt="an upcoming event" />
</div>
</Tilt>
</div> 
</div>
</div>
    )

}
 
export default Showcase;