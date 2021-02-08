import React, {useEffect, useState} from 'react';
import './artshowcase.css';
import 'firebase/firestore';
import history from '../../../history/history';
import {db} from '../../../firebase/firebaseconfig';


const Showcase = () => {
    const [showcase, setShowcase] = useState('')
    function redirect(){
        history.push('/community')
    }
    useEffect(() => {
        db.collection('showcase').orderBy('date', 'asc').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
               
                let date = doc.data().date;
                let photo = doc.data().photo;
                let name = doc.data().name; 
                console.log(doc.data());
        
                setShowcase(
                    <div className="mainholder" onClick={redirect}>
                    <h5 className="showcasetitle">Community Showcase</h5>
                    <div className="image-border">
                    <img className="showcase maindiv" src={photo} />
                    </div>
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