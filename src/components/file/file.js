import React from 'react';
import './file.css';


const  File = ({files}) => {

    return(
        <div>
            {
            files && 
            files.map(file => {
                return(
                    <div className="filebox">
                        <h3>{file.title}</h3>
                        <h5>{file.content}</h5>
                       <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={file.photo}>View File</a>
                        

                    </div>
                            )
                        })
                    }
        </div>
        
            )
}
 
export default File;