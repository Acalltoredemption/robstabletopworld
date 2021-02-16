import React, {useState, useEffect} from 'react';
import {db} from '../../firebase/firebaseconfig';
import history from '../../history/history';
import './article.css';

const  Article = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const queryString = window.location.search.substr(1);
            console.log(queryString);
            await db.collection('blogposts').doc(queryString).get().then(doc => {
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
         <div className="pageblogpost-image">
         <div className='pagecontent'>
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
         <input className="btn btn-success btn-send" value="Home" onClick={() => history.push('/')} />
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