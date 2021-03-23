import React from 'react';
import './artshowcase.css';
import history from '../../../history/history';
import Tilt from 'react-vanilla-tilt';
import artbackground from '../../../images/artbackground.png';
import {Badge} from 'antd';

const {Ribbon} = Badge;

const Showcase = () => {

    function redirect(){
        history.push('/art')
    }

                   

    return (

<div id="showcase-list">
<div className="upcoming" onClick={redirect}> 
<div className="upcomingbox">
<Tilt className="tiltbox">
    <Ribbon text="Art Showcase" color="cyan">
<div className="image-border">
<img className="upcomingimg" src={artbackground} alt="an upcoming event" />
</div>
</Ribbon> 
</Tilt>
</div> 
</div>
</div>
    )

}
 
export default Showcase;