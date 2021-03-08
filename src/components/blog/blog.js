import React from 'react';
import Tilt from 'react-vanilla-tilt';
import history from '../../history/history';
import './blog.css'


const  Blog = ({blogs}) => {

    return(
        <div>
            {
            blogs && 
            blogs.map(blog => {
                return(
        <div className="blogpost" key={blog.title}>
      <div className="blogbox">
     <Tilt className="tiltbox">       
         <div className="pageblogpost-imagemain">
         <div className='pagecontent' onClick={() => history.push('/article?' + blog.id)}>
         <h1 className='titlemain' onClick={() => history.push('/article?' + blog.id)}>{blog.title}</h1>
         </div>
         <img className="blogimg"  src={blog.photo} alt="a blogpost" onClick={() => history.push('/article?' + blog.id)} /> 
         </div>
    </Tilt>
         </div>
     <div>
     </div>
     </div>
                            )
                        })
                    }
        </div>
        
            )
}
 
export default Blog;