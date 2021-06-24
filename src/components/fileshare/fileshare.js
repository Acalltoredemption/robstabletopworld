import React, {useState, useEffect} from 'react';
import './fileshare.css';
import {db} from '../../firebase/firebaseconfig';
import File from '../file/file';


const FileShare = () => {
    const [files, setFiles] = useState([]);

    

    

    useEffect(() => {
        const fetchFiles = async () => {
        
            await db.collection('files').orderBy('date', "desc").get().then(snapshot => {
                this.filestore = []
                snapshot.forEach(doc => {
                    var data = {id: doc.id, ...doc.data() };
                     this.filestore.push(data)
                     
                })
            });
            setFiles(this.filestore);
            
        }
        
        fetchFiles();
    }, []);



    


return (
    <div className="fileshare">
        
        <File files={files} />
    </div>
)
        
    
}

export default FileShare;