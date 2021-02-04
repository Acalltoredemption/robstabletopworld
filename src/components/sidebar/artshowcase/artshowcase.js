import React, {useEffect, useState} from 'react';
import './artshowcase.css';
import 'firebase/firestore';

import {db} from '../../../firebase/firebaseconfig';


const Showcase = () => {
    const [showcase, setShowcase] = useState('')

    useEffect(() => {
        db.collection('showcase').orderBy('date', 'asc').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
               
                let date = doc.data().date;
                let photo = doc.data().photo;
                let name = doc.data().name;
                console.log(doc.data());
        
                setShowcase(
                    <div>
                    <h4>Community Showcase</h4>
                    <img className="showcase maindiv" src={photo} />
                    <p>{name}</p>
                    </div>
                )
            })
        })
     }, []);


    return (

        <ul id="showcase-list">
            {showcase}
        </ul>
    )

}
 
export default Showcase;