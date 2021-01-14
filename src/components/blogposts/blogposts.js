import React, {useEffect, useState} from 'react';
import './blogposts.css';
import {Button} from 'react-bootstrap';
import {db} from '../../firebase/firebaseconfig';
import Tilt from 'react-vanilla-tilt';




const BlogPosts = () => {
     const [blogs, setBlogs] = useState('')


function renderBlog(doc){ 
        let title = doc.data().title;
        let author = doc.data().author;
        let content = doc.data().content;
        let photo = doc.data().photo;
        setBlogs(
         <div className="blogpost">
         <div className="blogbox">
  <Tilt className="tiltbox">       
            <div className="blogpost-image">
            <div className='content'>
            <h1 className='title'>{title}</h1>
            </div>
            <img className="blogimg" src={photo} alt="a blogpost image" /> 
            </div>
            </Tilt>
            </div>
            <div className="blogpost-author">{author}</div>
            <div className="blogpost-summary">
                {content}
            </div>
            <div className="buttondiv"> 
            <button className={Button}>To Article</button>
         </div>
        <div>
 </div>
 </div>
        )
       
}

 useEffect(() => {
    db.collection('blogposts').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
renderBlog(doc);
        })
})
    }, []);




    return (

 

        <ul id="blog-list">
        {blogs}
        </ul>

  

    )
}

export default BlogPosts;