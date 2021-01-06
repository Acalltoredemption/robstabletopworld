import React, {Component} from 'react';
import firebase from "firebase/app";
import 'firebase/firestore';


  const db = firebase.firestore();



class MakeBlog extends Component {
    state = {
        title: '',
        content: '',
        author: '',
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
            
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.createBlog(this.state);
    }

    createBlog = (blog) => {
        db.collection('blogposts').add({
            ...blog, 
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        })
    }
   
    render(){
    
return (
    <form id="add-blog-form" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} id="author" name="author" placeholder="Author Name" />
        <input type="text" onChange={this.handleChange} id="title" name="title" placeholder="Post Title" />
        <input type="text" onChange={this.handleChange} id="content" name="content" placeholder="Post Content" />
        <button>Add Post</button>

    </form>
)
    }
}

export default MakeBlog