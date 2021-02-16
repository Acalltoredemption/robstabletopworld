import React from 'react';
import Tilt from 'react-vanilla-tilt';



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
         <div className="blogpost-image">
         <div className='content'>
         <h1 className='title'>{blog.title}</h1>
         </div>
         <img className="blogimg"  src={blog.photo} alt="a blogpost" onClick={() => console.log(blog.id)}/> 
         </div>
    </Tilt>
         </div>
         <div className="blogpost-author">{blog.author}</div>
         <div className="blogpost-summary">
             {blog.content}
         </div>
         <div className="buttondiv"> 
         <input type="submit" className="btn btn-success btn-send" value="To Article" />
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