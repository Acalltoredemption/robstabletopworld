import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import './approvecommunity.css';
import history from '../../../history/history';
import '../../../firebase/firebaseconfig';
import firebase from 'firebase'
import {toast} from 'react-toastify';

const ApproveCommunity = () => {
        const [showcase, setShowcase] = useState([]);

        useEffect(() => {
            const fetchShowcases = async () => {
            
                await db.collection('community').orderBy('unapproved').get().then((snapshot) => {
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
                    <div><input type="submit" className="btn btn-success btn-send" onClick={() => history.push('/approvedcommunity')} value="View Approved Members" /></div>
                    <div>Unapproved Community Members</div>
                    </div>
                <table className="table table-bordered blogdisplay">
                <thead>
                    <tr>
                        <th className="blogitem">Name</th>
                        <th className="blogitem">Bio</th>
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
                        db.collection('community').doc(showcase.id).delete();
                        history.push('/')
                     }

                    function approveBlog (e) {
                        db.collection('community').doc(showcase.id).set({
                            approved: true
                        }, { merge: true});
                        var docRef = db.collection('community').doc(showcase.id);
                        docRef.update({
                            unapproved: firebase.firestore.FieldValue.delete()
                        })
                        toast.success('Community entry has been approved.')
                        history.push('/') 
                    }
            return(
                <table className="table table-bordered blogdisplay" key={showcase.name}>
                    <tbody>
                        <tr>
                    <td className="blogitem">{showcase.name}</td>
                    <td className="blogitem">{showcase.bio}</td>
                    <td className="blogitem"><img className="adminblogimg"  src={showcase.photo} alt="a blogpost" /></td>
                    <td className="blogitem"><button type="submit" onClick={(e) => deleteBlog(e)} className="btn btn-danger">Delete</button> </td>
                    <td className="blogitem" id={showcase.date}><input type="submit" onClick={(e) => approveBlog(e)} showcaseid={showcase.id} className="btn btn-success btn-send" value="Approve" /> </td>
                    </tr>
                    </tbody>
                </table>
             )
             }
             )
        
             }

             </div>
            </div>
            
                )
            
        
    }
    

 
export default ApproveCommunity;