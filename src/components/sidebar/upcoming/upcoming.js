import React, {useEffect} from 'react';
import UpcomingImage from '../../../images/blood-bowl-cover.jpg';
import Tilt from 'react-vanilla-tilt';
import './upcoming.css';
import firebase from "firebase/app";
import 'firebase/firestore';


 

 
  function renderEvent(doc){
      
    let parentdiv = document.createElement('div');
    let titlep = document.createElement('p');
    let upcomingbox = document.createElement('div');
    let imageborder = document.createElement('div');
    let upcomingcontent = document.createElement('div');
    let titleh1 = document.createElement('h1');
    let eventimage = document.createElement('img');
    let datep = document.createElement('p');
    let upcomingdesc = document.createElement('div');

    eventimage.src = doc.data().photo;
    titleh1.textContent = doc.data().title;
    datep.textContent = doc.data().date;
    upcomingdesc.textContent = doc.data() .description;
    
    titlep.textContent = 'Upcoming Events!';

    parentdiv.className = "upcoming";
    titlep.className = "upcoming-title";
    upcomingbox.className = "upcomingbox";
    imageborder.className = "image-border";
    upcomingcontent.className = "upcomingcontent";
    titleh1.className = "upcomingtitle";
    eventimage.className = "upcomingimg";
    datep.className = "upcoming-date";
    upcomingdesc.className = "upcoming-desc";


    upcomingcontent.appendChild(titleh1);
    imageborder.appendChild(upcomingcontent);
    imageborder.appendChild(eventimage);
    upcomingbox.appendChild(imageborder);
    
    
  

    parentdiv.appendChild(titlep);
    parentdiv.appendChild(upcomingbox);
    parentdiv.appendChild(datep);
    parentdiv.appendChild(upcomingdesc);



      document.getElementById('event-list').appendChild(parentdiv);
  
  }





const Upcoming = () => {

    useEffect(() => {
        db.collection('events').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                renderEvent(doc);
            })
        })
     }, []);


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
        

        <ul id="event-list">

        </ul>
        </div>
     
        
    )
}

export default Upcoming;