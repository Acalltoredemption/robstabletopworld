import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import './fileedit.css';
import history from '../../../history/history';
import {toast} from 'react-toastify';

const FileEdit = () => {
        const [files, setFiles] = useState([]);

        useEffect(() => {
            const fetchFiles = async () => {
            
                await db.collection('files').orderBy('date', "desc").get().then((snapshot) => {
                    this.filestore = []
                    
                    snapshot.docs.forEach(doc => {
                        var data = {id: doc.id, ...doc.data() };
                         this.filestore.push(data)
                         
                    })
                });
                setFiles(this.filestore);
                          
            }      
            fetchFiles();
        }, []);
    
        function deleteFile (e) {
           let id = e.target.getAttribute('fileref');
           db.collection('files').doc(id).delete();
           toast.warning('File has been deleted!');
           history.push('/')
        }

    

        return(
            <div>
                <div id="bulkOptionContainer" className="col-xs-4">
                <table className="table table-bordered blogdisplay">
                <thead>
                    <tr>
                        <th className="blogitem">Title</th>
                        <th className="blogitem">Content</th>
                        <th className="blogitem">Delete</th>
                    </tr>
                </thead>
             </table>
                {
                files && 
                files.map(file => {
            return(
                <div key={file.content}>
                <table className="table table-bordered blogdisplay">
                    <tbody>
                        <tr>
                    <td className="blogitem">{file.title}</td>
                    <td className="blogitem">{file.content}</td>
                    <td className="blogitem"><button type="submit" onClick={(e) => deleteFile(e)} fileref={file.id} className="btn btn-danger">Delete</button> </td>
                    </tr>
                    </tbody>
                </table>
                </div>
             )
             }
             )
        
             }

             </div>
            </div>   
                )
            
        
    }
    

 
export default FileEdit;