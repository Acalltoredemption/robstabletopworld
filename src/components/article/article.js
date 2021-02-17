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
         <hr></hr>
         <div className="buttondiv"> 



         <div className="row">
        <div className="col-md-12">
            <div className="form-group">
                <label htmlFor="form_message">Comment:</label>
                <div className="commentholder">
                <textarea id="form_message" name="message" className="form-control" style={{width: '40rem'}} placeholder="Leave a comment on this article" rows="4" required="required" data-error="Leave a Comment on this article"></textarea>
                </div>
                <div className="help-block with-errors"></div>
            </div>
        </div>
        <div className="col-md-12">
            <input type="submit" className="btn btn-success btn-send" value="Send message" />
        </div>
    </div>
    


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