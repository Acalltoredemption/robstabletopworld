import React, {useEffect, useState} from 'react';
import './warnpieces.css';
import 'firebase/firestore';
import history from '../../../history/history';
import {db} from '../../../firebase/firebaseconfig';
import Tilt from 'react-vanilla-tilt';


const WarShowcase = () => {
    const [warshowcase, setwarShowcase] = useState('')
    function redirect(){
        history.push('/warandpieces')
    }
    useEffect(() => {
        db.collection('war').orderBy('date', 'asc').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
               

                let photo = doc.data().photo;
                let url = doc.data().url;
 
        
                setwarShowcase(



                    <div className="upcoming" key={photo}> 
                    <div className="upcomingbox">
                    <Tilt className="tiltbox"> 
                    <div className="image-border">
                    <div className="upcomingcontent2">
                    <p className="wartitle">War and Pieces</p>
                    </div>
                    <a href={url}>
                    <img className="upcomingimg" src={photo} alt="an upcoming event" />
                    </a>
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
            {warshowcase}
        </div>
    )

}
 
export default WarShowcase;