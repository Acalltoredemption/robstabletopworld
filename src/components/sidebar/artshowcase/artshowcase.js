import React, {useEffect, useState} from 'react';
import './artshowcase.css';
import 'firebase/firestore';
import history from '../../../history/history';
import {db} from '../../../firebase/firebaseconfig';


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
                   
                    <div className="mainholder" key={photo} onClick={redirect}>
                    <h5 className="showcasetitle">Art Showcase</h5>
                    <div className="art-image-border">
                    <img className="maindiv" src={photo} alt="a community art sample" />
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