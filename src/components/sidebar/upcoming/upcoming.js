import React, {useEffect, useState} from 'react';
import Tilt from 'react-vanilla-tilt';
import './upcoming.css';
import 'firebase/firestore';

import {db} from '../../../firebase/firebaseconfig';

 




const Upcoming = () => {
    const [events, setEvents] = useState('')

    
    useEffect(() => {
        db.collection('events').orderBy('createdat', 'asc').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
               
                let date = doc.data().date;
                let description = doc.data().description;
                let photo = doc.data().photo;
                let title = doc.data().title;
        
                setEvents(
                    <div className="upcoming">
                
                    <p className="upcoming-title">Upcoming Event</p>
                    <div className="upcomingbox">
                    <Tilt className="tiltbox"> 
                <div className="image-border">
        
                <div className="upcomingcontent">
                <h1 className="upcomingtitle">{title}</h1>
                </div>
        
                <img className="upcomingimg" src={photo} alt="an upcoming event" />
                </div>
                </Tilt>
                </div>
        
        
                    <p className="upcoming-date">{date}</p>
                <div className="upcoming-desc">
                    {description}
                </div>
                
        
        
                </div>
                )
            })
        })
     }, []);


    return (

        <ul id="event-list">
{events}
        </ul>
    )
}

export default Upcoming;