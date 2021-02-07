import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import './approve.css';
import history from '../../../history/history';

const Approve = () => {
        const [showcase, setShowcase] = useState([]);

        useEffect(() => {
            const fetchShowcases = async () => {
            
                await db.collection('showcase').orderBy('date', "desc").get().then((snapshot) => {
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
    
        function deleteBlog (e) {
           let id = e.target.getAttribute('showcaseRef');
           db.collection('showcase').doc(id).delete();
           history.push('/')
        
           
        }
    

        return(
            <div>
                <div id="bulkOptionContainer" className="col-xs-4">
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

            return(
                <table className="table table-bordered blogdisplay">
                    <td className="blogitem">{showcase.name}</td>
                    <td className="blogitem">{showcase.description}</td>
                    <td className="blogitem"><img className="adminblogimg"  src={showcase.photo} alt="a blogpost" /></td>
                    <td className="blogitem"><button type="submit" onClick={(e) => deleteBlog(e)} showcaseRef={showcase.id} className="btn btn-danger">Delete</button> </td>
                    <td className="blogitem" id={showcase.date}><input type="submit" className="btn btn-primary btn-send" value="Edit Blog" /> </td>
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