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
        <input type="text" onChange={this.handleChange} id="author" name="author" placeholder="Author Name" />
        <input type="text" onChange={this.handleChange} id="title" name="title" placeholder="Post Title" />
        <input type="text" onChange={this.handleChange} id="content" name="content" placeholder="Post Content" />
        <input type="file" onChange={this.uploadImage} placeholder="Post Image" name="image" id="photo" />
        <button>Add Post</button>

        <img id="img"></img>

    </form>
)
    }
}

export default MakeBlog