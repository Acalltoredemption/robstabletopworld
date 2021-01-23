import React, {Component} from 'react';
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage';


  const db = firebase.firestore();



class MakeBlog extends Component {
    state = {
        title: '',
        content: '',
        author: '',
        photo: '',
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

    createBlog = () => {
        const ref = firebase.storage().ref()

        const file = document.querySelector("#photo").files[0]

        const filename = new Date() + '-' + file.name

        const metadata = {
            contentType: file.type
        }

        const task = ref.child(filename).put(file, metadata)

        task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            console.log(url)
            alert("image upload successful!")
            const image = document.querySelector('#img')
            image.src = url;
            image.alt = '';
            this.setState({photo: url})
            this.sendBlog();
    
        })
    }
    sendBlog = (blog) => {
        db.collection('blogposts').add({
            ...blog, 
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
            photo: this.state.photo

        })
    }


    render(){
    
return (
    <form id="add-blog-form" onSubmit={this.handleSubmit}>


        <div className="col-md-6">
            <div className="form-group">
                <label for="author">Author</label>
        <input className="form-control" type="text" onChange={this.handleChange} id="author" name="author" placeholder="Author Name" />
        </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label for="title">Title</label>
                <input className="form-control" type="text" onChange={this.handleChange} id="title" name="title" placeholder="Post Title" />
        </div>
        </div>



    
            <div className="col-md-12">
                <div className="form-group">
                <label for="content">Blogpost Content</label>
        <textarea className="form-control" type="text" onChange={this.handleChange} id="content" name="content" placeholder="Post Content" />
        </div>
        </div>
       
        <div className="col-md-6">
            <div className="form-group">
                <label for="image">Blog Image</label>
                <input className="form-control" type="file" onChange={this.uploadImage} placeholder="Post Image" name="image" id="photo" />
        </div>
        </div>
        <div class="col-md-12">
            <input type="submit" class="btn btn-success btn-send" value="Create Blog" />
        </div>

        <img id="img" alt =""></img>

    </form>
)
    }
}

export default MakeBlog