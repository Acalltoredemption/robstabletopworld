import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import './blogedit.css';

const BlogEdit = () => {
        const [blogs, setBlogs] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const [postsPerPage] = useState(5);
    
    
        useEffect(() => {
            const fetchPosts = async () => {
            
                await db.collection('blogposts').orderBy('date', "desc").get().then(snapshot => {
                    this.blogstore = []
                    snapshot.forEach(doc => {
                        const data = doc.data()
                         this.blogstore.push(data)
                    })
                });
                setBlogs(this.blogstore);
                
            }
           
            fetchPosts();
        }, []);
    
        //get current posts
        const indexOfLastBlog = currentPage * postsPerPage;
        const indexOfFirstBlog = indexOfLastBlog - postsPerPage;
        const currentBlog = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
    

    

        return(
            <div>
                <div id="bulkOptionContainer" className="col-xs-4">
                <table class="table table-bordered blogdisplay">
                <thead>
                    <tr>
                        <th className="blogitem">Title</th>
                        <th className="blogitem">Author</th>
                        <th className="blogitem">Image</th>
                        <th className="blogitem">Delete</th>
                        <th className="blogitem">Edit</th>
                    </tr>
                </thead>
             </table>
                {
                blogs && 
                blogs.map(blog => {
                    var blogRef = db.collection('blogposts').doc('date');
                    console.log(blogRef);

            return(
                <table className="table table-bordered blogdisplay">
                    <td className="blogitem">{blog.title}</td>
                    <td className="blogitem">{blog.author}</td>
                    <td className="blogitem"><img className="adminblogimg"  src={blog.photo} alt="a blogpost" /></td>
                    <td className="blogitem" id={blog.date}><input type="submit" className="btn btn-danger btn-send" value="Delete" /> </td>
                    <td className="blogitem" id={blog.date}><input type="submit" className="btn btn-primary btn-send" value="Edit Blog" /> </td>
                </table>
             )
             })
             }

             </div>
            </div>
            
                )
            
        
    }
    

 
export default BlogEdit;