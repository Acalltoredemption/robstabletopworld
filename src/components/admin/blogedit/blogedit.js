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
    
        //Change Page
        const paginate = (pageNumber) => setCurrentPage(pageNumber);
        
   // blog. title, photo, author, content
    
        return(
            <div>
                <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Image</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                blogs && 
                blogs.map(blog => {
            return(
                <div>
                    <td>{blog.title}</td>
                    <td>{blog.author}</td>
                    <td>{blog.title}</td>
                    <td><button>Delete</button></td>
                </div>
             )
             })
             }
             </tbody>
             </table>
            </div>
            
                )
            
        
    }
    

 
export default BlogEdit;