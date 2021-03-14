import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import history from '../../../history/history';
import '../../../firebase/firebaseconfig';


const ApprovedArticleComments = () => {
        const [showcase, setShowcase] = useState([]);

        useEffect(() => {
            const fetchShowcases = async () => {
            
                await db.collection('comments').orderBy('approved').get().then((snapshot) => {
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
                    <div><input type="submit" className="btn btn-success btn-send" onClick={() => history.push('/articlecomments')} value="View UnApproved Comments" /></div>
                    <div>Approved Comments</div>
                    </div>
                <table className="table table-bordered blogdisplay">
                <thead>
                    <tr>
                        <th className="blogitem">Username</th>
                        <th className="blogitem">Comment</th>
                        <th className="blogitem">Date</th>
                        <th className="blogitem">Delete</th>
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

            return(
                <table className="table table-bordered blogdisplay">
                    <td className="blogitem">{showcase.username}</td>
                    <td className="blogitem">{showcase.content}</td>
                    <td className="blogitem">{showcase.date}</td>
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
    

 
export default ApprovedArticleComments;