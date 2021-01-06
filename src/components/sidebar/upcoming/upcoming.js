import React from 'react';
import UpcomingImage from '../../../images/blood-bowl-cover.jpg';
import Tilt from 'react-vanilla-tilt';
import './upcoming.css';

const Upcoming = () => {
    return (
        <div className="upcoming">
        
            <p className="upcoming-title">Upcoming Event</p>
            <div className="upcomingbox">
            <Tilt className="tiltbox"> 
        <div className="image-border">
        <div className="upcomingcontent">
        <h1 className="upcomingtitle">BLOOD BOWL</h1>
        </div>
        <img className="upcomingimg" src={UpcomingImage} alt="image of an upcoming event" />
        </div>
        </Tilt>
        </div>
            <p className="upcoming-date">Event Date</p>
        <div className="upcoming-desc">
            Description of the upcoming event!
        </div>
        
        </div>
        
    )
}

export default Upcoming;