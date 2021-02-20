import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import './approve.css';
import history from '../../../history/history';
import '../../../firebase/firebaseconfig';
import firebase from 'firebase'

const Approve = () => {
        const [showcase, setShowcase] = useState([]);

        useEffect(() => {
            const fetchShowcases = async () => {
            
                await db.collection('showcase').orderBy('unapproved').get().then((snapshot) => {
                    this.showcases = []
                    
                    snapshot.docs.forEach(doc => {
                        var data = {id: doc.id, ...doc.data() };
                         this.showcases.push(data)
                         
                    })
                });
                setShowcase(this.showcases);
                           
            }      
            fetchShowcases();
        }, []);
    


    

        return(
            <div>
                <div id="bulkOptionContainer" className="col-xs-4">
                    <div className="approvalheading">
                    <div><input type="submit" className="btn btn-success btn-send" onClick={() => history.push('/approved')} value="View Approved Submissions" /></div>
                    <div>Unapproved Submissions</div>
                    </div>
                <table class="table table-bordered blogdisplay">
                <thead>
                    <tr>
                        <th className="blogitem">Name</th>
                        <th className="blogitem">Description</th>
                        <th className="blogitem">Photo</th>
                        <th className="blogitem">Delete</th>
                        <th className="blogitem">Approve</th>
                    </tr>
                </thead>
             </table>
                {
                showcase && 
                showcase.map(showcase => {
                    function deleteBlog (e) {
                        db.collection('showcase').doc(showcase.id).delete();
                        history.push('/')
                     }

                    function approveBlog (e) {
                        db.collection('showcase').doc(showcase.id).set({
                            approved: true
                        }, { merge: true});
                        var docRef = db.collection('showcase').doc(showcase.id);
                        docRef.update({
                            unapproved: firebase.firestore.FieldValue.delete()
                        })
                        history.push('/') 
                    }
            return(
                <table className="table table-bordered blogdisplay">
                    <td className="blogitem">{showcase.name}</td>
                    <td className="blogitem">{showcase.description}</td>
                    <td className="blogitem"><img className="adminblogimg"  src={showcase.photo} alt="a blogpost" /></td>
                    <td className="blogitem"><button type="submit" onClick={(e) => deleteBlog(e)} className="btn btn-danger">Delete</button> </td>
                    <td className="blogitem" id={showcase.date}><input type="submit" onClick={(e) => approveBlog(e)} showcaseid={showcase.id} className="btn btn-success btn-send" value="Approve" /> </td>
                </table>
             )
             }
             )
        
             }

             </div>
            </div>
            
                )
            
        
    }
    

 
export default Approve;