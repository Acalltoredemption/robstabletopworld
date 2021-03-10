import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';


const EditBlog = ({blogref}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
        
            await db.collection('blogposts').doc(blogref).get().then((snapshot) => {
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


    
    return ( 
        <div>
        <div className="makeblogbuttons">
            <button className="btn btn-primary" style={{margin: '2px'}} onClick={this.makeBlog2}>Two Images (Medium-Length)</button>
            <button className="btn btn-primary" style={{margin: '2px'}} onClick={this.makeBlog3}>Three Images (Longer Blog)</button>
        </div>
        <div className="makeblogbuttons">
        <p>This is a SHORT Blog Entry form with 1 image and 1 text entry. Please fill out all sections before submitting, OR choose another size above.</p>
        </div>
        <form id="add-blog-form" onSubmit={this.handleSubmit}>
    
            
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="author">Author</label>
            <input className="form-control" type="text" onChange={this.handleChange} id="author" name="author" placeholder={blogs.title} />
            </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input className="form-control" type="text" onChange={this.handleChange} id="title" name="title" placeholder="Post Title" />
            </div>
            </div>
    
    
    
        
                <div className="col-md-12">
                    <div className="form-group">
                    <label htmlFor="content2">Blogpost Content</label>
            <textarea className="form-control" type="text" onChange={this.handleChange} id="content" name="content" placeholder="Post Content" />
            </div>
            </div>
           
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="image">Blog Image</label>
                    <input className="form-control" type="file" onChange={this.uploadImage} placeholder="Post Image" name="image" id="photo" />
            </div>
            </div>
    
            <div className="col-md-12">
                <input type="submit" className="btn btn-success btn-send" value="Create Blog" />
            </div>
    
            <img id="img" alt =""></img>
    
        </form>
        </div>
     );
}
 
export default EditBlog;