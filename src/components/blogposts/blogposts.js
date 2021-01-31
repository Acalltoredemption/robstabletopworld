import React, {useState, useEffect} from 'react';
import './blogposts.css';
import Pagination from '../../components/pagination/pagination';
import {db} from '../../firebase/firebaseconfig';
import Blog from '../blog/blog';


const BlogPosts = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);


    useEffect(() => {
        const fetchPosts = async () => {
        
            await db.collection('blogposts').orderBy('date').get().then(snapshot => {
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
    console.log(blogs.length);


return (
    <div>
        <Blog blogs={blogs} />
        <Pagination postsPerPage={postsPerPage} totalPosts={blogs.length} />
    </div>
)
        
    
}

export default BlogPosts;
