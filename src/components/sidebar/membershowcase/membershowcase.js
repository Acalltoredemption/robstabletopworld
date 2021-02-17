import React, {useEffect, useState} from 'react';
import './membershowcase.css';
import 'firebase/firestore';
import history from '../../../history/history';
import {db} from '../../../firebase/firebaseconfig';


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
                   
                    <div className="mainholder" key={photo} onClick={redirect}>
                    <h5 className="showcasetitle">Our Community</h5>
                    <div className="art-image-border">
                    <img className=" maindiv" src={photo} alt="a community art sample" />
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