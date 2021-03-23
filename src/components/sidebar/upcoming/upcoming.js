import React, {useEffect, useState} from 'react';
import Tilt from 'react-vanilla-tilt';
import './upcoming.css';
import 'firebase/firestore';
import {Badge} from 'antd';
import {db} from '../../../firebase/firebaseconfig';
const {Ribbon} = Badge;



 




const Upcoming = () => {
    const [events, setEvents] = useState('')

    
    useEffect(() => {
        db.collection('events').orderBy('createdat', 'asc').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
               
                let description = doc.data().description;
                let photo = doc.data().photo;
                let title = doc.data().title;
                let url = doc.data().url;
        
                setEvents(

<div className="upcoming" key={photo}> 
<div className="upcomingbox">
    
<Tilt className="tiltbox"> 
<Ribbon text={title} color="green" text="Video of the Week!">
<div className="upimage-border">
<a href={url}>
<img className="upupcomingimg" src={photo} alt="an upcoming event" />
</a>
</div>
</Ribbon>
</Tilt>
</div> 
<div className="upcoming-descs">
    {title}
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