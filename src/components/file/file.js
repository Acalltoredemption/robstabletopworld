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
                       <div className="card cardshadow">
                <div className="card-body">
                <h5 className="card-title">{file.title}</h5>
                <p className="card-text">{file.content}</p>
                <a href={file.photo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get File</a>
                </div>
                </div>

                    </div>
                            )
                        })
                    }
        </div>
        
            )
}
 
export default File;