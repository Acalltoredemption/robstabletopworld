import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import history from '../../../history/history';
import '../../../firebase/firebaseconfig';


const ApproveComments = () => {
        const [messages, setMessages] = useState([]);

        useEffect(() => {
            const fetchMessages = async () => {
            
                await db.collection('messages').orderBy('date', 'asc').get().then((snapshot) => {
                    this.messages = []
                    
                    snapshot.docs.forEach(doc => {
                        var data = {id: doc.id, ...doc.data() };
                         this.messages.push(data)
                         
                    })
                });
                setMessages(this.messages);
                           
            }      
            fetchMessages();

        }, []);

        return(
            <div>
                <div id="bulkOptionContainer" className="col-xs-4">
                    <div className="approvalheading">
                    <div>Message Inbox</div>
                    </div>
                <table className="table table-bordered blogdisplay">
                <thead>
                    <tr>
                        <th className="blogitem">Name</th>
                        <th className="blogitem">Comment</th>
                        <th className="blogitem">Contact Email</th>
                        <th className="blogitem">Date</th>
                        <th className="blogitem">Delete</th>
                    </tr>
                </thead>
             </table>
                {
                messages && 
                messages.map(message => {
                    function deleteComment (e) {
                        let id = e.target.getAttribute('blogRef');
                        db.collection('messages').doc(id).delete();
                        history.push('/') 
                     }
                     return(
                        <table className="table table-bordered blogdisplay">
                            <td className="blogitem">{message.name}</td>
                            <td className="blogitem">{message.message}</td>
                            <td className="blogitem">{message.email}</td>
                            <td className="blogitem">{message.date}</td>
                            <td className="blogitem"><button type="submit" onClick={(e) => deleteComment(e)} blogRef={message.id} className="btn btn-danger">Delete</button> </td>
                            
                        </table>
                     )
                     }
             )
             }

             </div>
            </div>
            
                )
            
        
    }
    

 
export default ApproveComments;