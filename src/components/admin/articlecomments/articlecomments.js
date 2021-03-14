import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import './articlecomments.css';
import history from '../../../history/history';
import '../../../firebase/firebaseconfig';
import firebase from 'firebase'

const ArticleComments = () => {
        const [showcase, setShowcase] = useState([]);

        useEffect(() => {
            const fetchShowcases = async () => {
            
                await db.collection('comments').orderBy('unapproved').get().then((snapshot) => {
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
                    <div><input type="submit" className="btn btn-success btn-send" onClick={() => history.push('/approvedcomments')} value="View Approved Comments" /></div>
                    <div>Unapproved Comments</div>
                    </div>
                <table className="table table-bordered blogdisplay">
                <thead>
                    <tr>
                        <th className="blogitem">Username</th>
                        <th className="blogitem">Comment</th>
                        <th className="blogitem">Date</th>
                        <th className="blogitem">Delete</th>
                        <th className="blogitem">Approve</th>
                    </tr>
                </thead>
             </table>
                {
                showcase && 
                showcase.map(showcase => {
                    function deleteBlog (e) {
                        db.collection('comments').doc(showcase.id).delete();
                        history.push('/')
                     }

                    function approveBlog (e) {
                        db.collection('comments').doc(showcase.id).set({
                            approved: true
                        }, { merge: true});
                        var docRef = db.collection('comments').doc(showcase.id);
                        docRef.update({
                            unapproved: firebase.firestore.FieldValue.delete()
                        })
                        history.push('/') 
                    }
            return(
                <table className="table table-bordered blogdisplay" key={showcase.id}>
                    <td className="blogitem">{showcase.username}</td>
                    <td className="blogitem">{showcase.content}</td>
                    <td className="blogitem">{showcase.date}</td>
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
    

 
export default ArticleComments;