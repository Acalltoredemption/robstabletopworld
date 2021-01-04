import React from 'react';
import UpcomingImage from '../../../images/blood-bowl-cover.jpg';
import './upcoming.css';

const Upcoming = () => {
    return (
        <div className="upcoming">
            <p className="upcoming-title">Upcoming Event!</p>
        <div className="upcoming-image">
        <img className="upcomingimg" src={UpcomingImage} alt="image of an upcoming event" />
            <p className="upcoming-date">Event Date</p>
        <div className="upcoming-desc">
            Description of the upcoming event!
        </div>
        </div>
        </div>
    )
}

export default Upcoming;