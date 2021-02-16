import React, {useState, useEffect} from 'react';
import {db} from '../../firebase/firebaseconfig';


const  Article = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
        
            await db.collection('blogposts').doc('HGxZ3Bty8CifBKgljk0a').get().then(doc => {
                this.blogstore = []
                
                    var data = {id: doc.id, ...doc.data() };
                     this.blogstore.push(data)
                     
                })
            ;
            setBlog(this.blogstore);
            
            
        }
        
        fetchPosts();
    }, []);


    return(
        <div>
            {
            blog && 
            blog.map(blog => {
                return(
        <div className="blogpost" key={blog.title}>
      <div className="blogbox">       
         <div className="blogpost-image">
         <div className='content'>
         <h1 className='title'>{blog.title}</h1>
         </div>
         <img className="blogimg"  src={blog.photo} alt="a blogpost" /> 
         </div>
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
export default Article;