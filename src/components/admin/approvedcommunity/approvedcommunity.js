import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import './approvedcommunity.css';
import history from '../../../history/history';
import '../../../firebase/firebaseconfig';
import firebase from 'firebase'

const ApprovedCommunity = () => {
        const [showcase, setShowcase] = useState([]);

        useEffect(() => {
            const fetchShowcases = async () => {
            
                await db.collection('community').orderBy('approved').get().then((snapshot) => {
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
                    <div><input type="submit" className="btn btn-success btn-send" onClick={() => history.push('/communitysubmissions')} value="View UnApproved Members" /></div>
                    <div>Approved Community Members</div>
                    </div>
                <table class="table table-bordered blogdisplay">
                <thead>
                    <tr>
                        <th className="blogitem">Name</th>
                        <th className="blogitem">Bio</th>
                        <th className="blogitem">Photo</th>
                        <th className="blogitem">Delete</th>
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
            return(
                <table className="table table-bordered blogdisplay">
                    <td className="blogitem">{showcase.name}</td>
                    <td className="blogitem">{showcase.bio}</td>
                    <td className="blogitem"><img className="adminblogimg"  src={showcase.photo} alt="a blogpost" /></td>
                    <td className="blogitem"><button type="submit" onClick={(e) => deleteBlog(e)} className="btn btn-danger">Delete</button> </td>
                </table>
             )
             }
             )
        
             }

             </div>
            </div>
            
                )
            
        
    }
    

 
export default ApprovedCommunity;