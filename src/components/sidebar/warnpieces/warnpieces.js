import React, {useEffect, useState} from 'react';
import './warnpieces.css';
import 'firebase/firestore';
import {db} from '../../../firebase/firebaseconfig';
import Tilt from 'react-vanilla-tilt';
import {Badge} from 'antd';

const {Ribbon} = Badge;

const WarShowcase = () => {
    const [warshowcase, setwarShowcase] = useState('')
    useEffect(() => {
        db.collection('war').orderBy('date', 'asc').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
               

                let photo = doc.data().photo;
                let url = doc.data().url;
 
        
                setwarShowcase(



                    <div className="upcoming" key={photo}> 
                    <div className="upcomingbox">
                    <Tilt className="tiltbox"> 
                    <Ribbon text="War and Pieces" color="cyan">
                    <div className="image-border">
                    <a href={url}>
                    <img className="upcomingimg" src={photo} alt="an upcoming event" />
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

        <div id="showcase-list">
            {warshowcase}
        </div>
    )

}
 
export default WarShowcase;