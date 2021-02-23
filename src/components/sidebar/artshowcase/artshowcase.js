import React, {useEffect, useState} from 'react';
import './artshowcase.css';
import 'firebase/firestore';
import history from '../../../history/history';
import {db} from '../../../firebase/firebaseconfig';
import Tilt from 'react-vanilla-tilt';

const Showcase = () => {
    const [showcase, setShowcase] = useState('')
    function redirect(){
        history.push('/art')
    }
    useEffect(() => {
        db.collection('showcase').orderBy('date', 'asc').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
               

                let photo = doc.data().photo;
 
        
                setShowcase(
                   

<div className="upcoming" key={photo} onClick={redirect}> 
<div className="upcomingbox">
<Tilt className="tiltbox"> 
<div className="image-border">
<div className="upcomingcontent2">
<p className="wartitle">Art Showcase</p>
</div>
<img className="upcomingimg" src={photo} alt="an upcoming event" />
</div>
</Tilt>
</div> 
</div>                
                )
            })
        })
     }, []);


    return (

        <div id="showcase-list">
            {showcase}
        </div>
    )

}
 
export default Showcase;