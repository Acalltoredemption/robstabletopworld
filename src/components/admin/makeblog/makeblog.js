import React, {Component} from 'react';
import 'firebase/storage';
import {firebase, db} from '../../../firebase/firebaseconfig';
import history from '../../../history/history';
import './makeblog.css';

  



class MakeBlog extends Component {
    state = {
        title: '',
        content: '',
        author: '',
        photo: '',
        date: '',
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

    makeBlog2 = (e) => {
        e.preventDefault();
        history.push('/makeblog2');
    }
    makeBlog3 = (e) => {
        e.preventDefault();
        history.push('/makeblog3');
    }

    createBlog = () => {
        const ref = firebase.storage().ref()
        const file = document.querySelector("#photo").files[0];
        var filename = new Date() + '-' + file.name;


        const metadata = {
            contentType: file.type
        }


        const task = ref.child(filename).put(file, metadata)

        task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            const image = document.querySelector('#img')
            image.src = url;
            image.alt = '';
            this.setState({photo: url})
                this.sendBlog();
        
        });
        }

    
    sendBlog = (blog) => {
        db.collection('blogposts').add({
            ...blog, 
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
            photo: this.state.photo, 
  
            date: new Date()

        })
        history.push('/')
    }




    render(){
    
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
        <input className="form-control" type="text" onChange={this.handleChange} id="author" name="author" placeholder="Author Name" />
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
)
    }
}

export default MakeBlog