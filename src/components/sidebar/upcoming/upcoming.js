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
                let url = doc.data().url;
        
                setEvents(
                    <div className="upcoming"> 
                
                    <p className="upcoming-title">Video of the Week!</p>
                    <div className="upcomingbox">
                    <Tilt className="tiltbox"> 
                <div className="image-border">
        
                <div className="upcomingcontent">
                <h1 className="upcomingtitle">{title}</h1>
                </div>
                <a href={url}>
                <img className="upcomingimg" src={photo} alt="an upcoming event" />
                </a>
                </div>
                </Tilt>
                </div>
                <div className="upcoming-descs">
                    {description}
                </div>
                
        
        
                </div>
                )
            })
        })
     }, []);


    return (

        <div className="holderdiv" id="event-list">
{events}
        </div>
    )
}

export default Upcoming;