import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import history from '../../../history/history';
import '../../../firebase/firebaseconfig';

const ViewMerch = () => {
        const [merch, setMerch] = useState([]);

        useEffect(() => {
            const fetchMerch = async () => {
            
                await db.collection('merch').get().then((snapshot) => {
                    this.merchlist = []
                    
                    snapshot.docs.forEach(doc => {
                        var data = {id: doc.id, ...doc.data() };
                         this.merchlist.push(data)
                         
                    })
                });
                setMerch(this.merchlist);
                           
            }      
            fetchMerch();
        }, []);
    


    

        return(
            <div>
                <div id="bulkOptionContainer" className="col-xs-4">
                    <div className="approvalheading">
                    <div>Your Merch</div>
                    </div>
                <table class="table table-bordered blogdisplay">
                <thead>
                    <tr>
                        <th className="blogitem">Description</th>
                        <th className="blogitem">Photo</th>
                        <th className="blogitem">Delete</th>
                    </tr>
                </thead>
             </table>
                {
                merch && 
                merch.map(merch => {
                    function deleteMerch (e) {
                        db.collection('merch').doc(merch.id).delete();
                        history.push('/')
                     }

            return(
                <table className="table table-bordered blogdisplay">
                    <td className="blogitem">{merch.description}</td>
                    <td className="blogitem"><img className="adminblogimg"  src={merch.photo} alt="a blogpost" /></td>
                    <td className="blogitem"><button type="submit" onClick={(e) => deleteMerch(e)} className="btn btn-danger">Delete</button> </td>
                </table>
             )
             }
             )
        
             }

             </div>
            </div>
            
                )
            
        
    }
    

 
export default ViewMerch;