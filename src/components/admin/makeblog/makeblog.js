import React, {Component} from 'react';
import 'firebase/storage';
import {firebase, db} from '../../../firebase/firebaseconfig';
import history from '../../../history/history';

  



class MakeBlog extends Component {
    state = {
        title: '',
        content: '',
        secondcontent: '',
        author: '',
        photo: '',
        date: '',
        secondphoto: '',
        thirdphoto: '',
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

        const file = document.querySelector("#photo").files[0];
      //  const file2 = document.querySelector("#photo2").files[0];
      //  const file3 = document.querySelector("#photo3").files[0];
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
    
        })


        
    }
    sendBlog = (blog) => {
        db.collection('blogposts').add({
            ...blog, 
            title: this.state.title,
            content: this.state.content,
            secondcontent: this.state.content2,
            author: this.state.author,
            photo: this.state.photo, 
            secondphoto: this.state.secondphoto,
            thirdphoto: this.state.thirdphoto,
            date: new Date()

        })
        history.push('/')
    }


    render(){
    
return (
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
                <div className="form-group">
                <label htmlFor="content">Additional Blogpost Content (Optional)</label>
        <textarea className="form-control" type="text" onChange={this.handleChange} id="content2" name="content" placeholder="Post Content" />
        </div>
        </div>


        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="image2">Second Blog Image (Optional)</label>
                <input className="form-control" type="file" onChange={this.uploadImage} placeholder="Post Image" name="image2" id="photo2" />
        </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="image3">Third Blog Image (Optional)</label>
                <input className="form-control" type="file" onChange={this.uploadImage} placeholder="Post Image" name="image3" id="photo3" />
        </div>
        </div>


        <div className="col-md-12">
            <input type="submit" className="btn btn-success btn-send" value="Create Blog" />
        </div>

        <img id="img" alt =""></img>

    </form>
)
    }
}

export default MakeBlog