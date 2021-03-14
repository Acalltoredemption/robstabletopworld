import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import './approved.css';
import history from '../../../history/history';
import '../../../firebase/firebaseconfig';
import {toast} from 'react-toastify';


const Approved = () => {
        const [showcase, setShowcase] = useState([]);

        useEffect(() => {
            const fetchShowcases = async () => {
            
                await db.collection('showcase').orderBy('approved').get().then((snapshot) => {
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
                    <div><input type="submit" className="btn btn-success btn-send" onClick={() => history.push('/approve')} value="View UnApproved Submissions" /></div>
                    <div>Approved Submissions</div>
                    </div>
                <table className="table table-bordered blogdisplay">
                <thead>
                    <tr>
                        <th className="blogitem">Name</th>
                        <th className="blogitem">Description</th>
                        <th className="blogitem">Photo</th>
                        <th className="blogitem">Delete</th>
                    </tr>
                </thead>
             </table>
                {
                showcase && 
                showcase.map(showcase => {
                    function deleteBlog (e) {
                        db.collection('showcase').doc(showcase.id).delete();
                        toast.warning('Art entry has been removed.')
                        history.push('/')
                     }

            return(
                <table className="table table-bordered blogdisplay">
                    <td className="blogitem">{showcase.name}</td>
                    <td className="blogitem">{showcase.description}</td>
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
    

 
export default Approved;