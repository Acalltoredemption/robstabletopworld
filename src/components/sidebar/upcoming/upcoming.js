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
               
                let photo = doc.data().photo;
                let url = doc.data().url;
        
                setEvents(

<div className="upcoming" key={photo}> 
<div className="upcomingbox">
    
<Tilt className="tiltbox"> 
<Ribbon color="green" text="Video of the Week!">
<div className="upimage-border">
<a href={url} target="_blank">
<img className="upupcomingimg" src={photo} alt="an upcoming event" />
</a>
</div>
</Ribbon>
</Tilt>
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