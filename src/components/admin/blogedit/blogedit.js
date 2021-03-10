import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import './blogedit.css';
import history from '../../../history/history';

const BlogEdit = () => {
        const [blogs, setBlogs] = useState([]);

        useEffect(() => {
            const fetchPosts = async () => {
            
                await db.collection('blogposts').orderBy('date', "desc").get().then((snapshot) => {
                    this.blogstore = []
                    
                    snapshot.docs.forEach(doc => {
                        var data = {id: doc.id, ...doc.data() };
                         this.blogstore.push(data)
                         
                    })
                });
                setBlogs(this.blogstore);
                          
            }      
            fetchPosts();
        }, []);
    
        function deleteBlog (e) {
           let id = e.target.getAttribute('blogRef');
           db.collection('blogposts').doc(id).delete();
           history.push('/')
        }

    

        return(
            <div>
                <div id="bulkOptionContainer" className="col-xs-4" display="block"  id="list-display">
                <table className="table table-bordered blogdisplay">
                <thead>
                    <tr>
                        <th className="blogitem">Title</th>
                        <th className="blogitem">Author</th>
                        <th className="blogitem">Image</th>
                        <th className="blogitem">Delete</th>
                    </tr>
                </thead>
             </table>
                {
                blogs && 
                blogs.map(blog => {
            return(
                <div key={blog.photo}>
                <table className="table table-bordered blogdisplay">
                    <tbody>
                        <tr>
                    <td className="blogitem">{blog.title}</td>
                    <td className="blogitem">{blog.author}</td>
                    <td className="blogitem"><img className="adminblogimg"  src={blog.photo} alt="a blogpost" /></td>
                    <td className="blogitem"><button type="submit" onClick={(e) => deleteBlog(e)} blogRef={blog.id} className="btn btn-danger">Delete</button> </td>
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
    

 
export default BlogEdit;
