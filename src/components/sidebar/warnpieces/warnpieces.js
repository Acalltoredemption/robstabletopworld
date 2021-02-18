import React, {useEffect, useState} from 'react';
import './warnpieces.css';
import 'firebase/firestore';
import history from '../../../history/history';
import {db} from '../../../firebase/firebaseconfig';


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
                   
                    <div className="mainholder" key={photo}>
                    <h5 className="showcasetitle">War and Pieces</h5>
                    <a href={url}>
                    <div className="art-image-border">
                    <img className=" maindiv" src={photo} alt="war and pieces" />
                    </div>
                    </a>
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