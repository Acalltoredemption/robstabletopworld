import React, {useEffect, useState} from 'react';
import './membershowcase.css';
import 'firebase/firestore';
import history from '../../../history/history';
import {db} from '../../../firebase/firebaseconfig';
import Tilt from 'react-vanilla-tilt';


const MemberShowcase = () => {
    const [membershowcase, setmemberShowcase] = useState('')
    function redirect(){
        history.push('/community')
    }
    useEffect(() => {
        db.collection('community').orderBy('date', 'asc').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
               

                let photo = doc.data().photo;
 
        
                setmemberShowcase(
                   


            <div className="upcoming" key={photo} onClick={redirect}> 
            <div className="upcomingbox">
            <Tilt className="tiltbox"> 
            <div className="image-border">
            <div className="upcomingcontent2">
            <p className="wartitle">Our Community</p>
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
            {membershowcase}
        </div>
    )

}
 
export default MemberShowcase;