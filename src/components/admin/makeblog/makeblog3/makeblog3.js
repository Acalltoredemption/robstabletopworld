import React, {Component} from 'react';
import 'firebase/storage';
import {firebase, db} from '../../../../firebase/firebaseconfig';
import history from '../../../../history/history';
import {toast} from 'react-toastify';
  



class MakeBlog3 extends Component {
    state = {
        title: '',
        content: '',
        secondcontent: '',
        author: '',
        photo: '',
        secondphoto: '',
        date: '',
        thirdphoto: '',
        thirdcontent: '',
        photostate: '',
        photostatetwo: '',
        photostatethree: '',
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

    
    makeBlog = (e) => {
        e.preventDefault();
        history.push('/makeblog');
    }
    makeBlog2 = (e) => {
        e.preventDefault();
        history.push('/makeblog2');
    }
    photoStateHold = (e) => {
        const file = document.querySelector("#photo").files[0];
        var filenames = new Date() + '-' + file.name;
        this.setState({
            photostate: filenames
        })
    }
    photoStateHoldTwo = (e) => {
        const file = document.querySelector("#secondphoto").files[0];
        var filenamestwo = new Date() + '-' + file.name;
        this.setState({
            photostatetwo: filenamestwo
        })
    }
    photoStateHoldThree = (e) => {
        const file = document.querySelector("#thirdphoto").files[0];
        var filenamesthree = new Date() + '-' + file.name;
        this.setState({
            photostatethree: filenamesthree
        })
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
                this.secondPhoto();
        
        });
        }

    secondPhoto = () => {
        const ref = firebase.storage().ref()
        const file = document.querySelector("#secondphoto").files[0];
        var filename = new Date() + '-' + file.name;

        const metadata = {
            contentType:file.type
        }

        const task = ref.child(filename).put(file, metadata)

        task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            const image = document.querySelector('#img')
            image.src = url;
            image.alt = '';
            this.setState({secondphoto: url})
            
            this.thirdPhoto();
        });
    }

    thirdPhoto = () => {
        const ref = firebase.storage().ref()
        const file = document.querySelector("#thirdphoto").files[0];
        var filename = new Date() + '-' + file.name;

        const metadata = {
            contentType:file.type
        }

        const task = ref.child(filename).put(file, metadata)

        task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            const image = document.querySelector('#img')
            image.src = url;
            image.alt = '';
            this.setState({thirdphoto: url})
            
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
            secondphoto: this.state.secondphoto,
            secondcontent: this.state.secondcontent,
            thirdphoto: this.state.thirdphoto,
            thirdcontent: this.state.thirdcontent,
            date: new Date()

        })
        toast.success('New blog created.');
        history.push('/')
    }


    render(){
    
return (
    <div>
    <div className="makeblogbuttons">
        <button className="btn btn-primary" style={{margin: '2px'}} onClick={this.makeBlog}>One Image (Shorter Blogs)</button>
        <button className="btn btn-primary" style={{margin: '2px'}} onClick={this.makeBlog2}>Two Images (Mid-Length Blogs)</button>
    </div>
    <div className="makeblogbuttons">
    <p>This is a LONG Blog Entry form with 3 images and 3 text entries. Please fill out all sections before submitting, OR choose another size above.</p>
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
                <input className="form-control" type="file" onChange={this.photoStateHold} placeholder="Post Image" name="image" id="photo" />
        </div>
        </div>

        <div className="col-md-12">
                <div className="form-group">
                <label htmlFor="content">Additional Blogpost Content</label>
        <textarea className="form-control" type="text" onChange={this.handleChange} id="secondcontent" name="content" placeholder="Post Content" />
        </div>
        </div>


        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="image2">Second Blog Image</label>
                <input className="form-control" type="file" onChange={this.photoStateHoldTwo} placeholder="Post Image" name="image2" id="secondphoto" />
        </div>
        </div>

        <div className="col-md-12">
                <div className="form-group">
                <label htmlFor="content">Additional Blogpost Content</label>
        <textarea className="form-control" type="text" onChange={this.handleChange} id="thirdcontent" name="content" placeholder="Post Content"  />
        </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="image3">Third Blog Image</label>
                <input className="form-control" type="file" onChange={this.photoStateHoldThree} placeholder="Post Image" name="image3" id="thirdphoto" />
        </div>
        </div>

        <div className="col-md-12">
            <input type="submit" disabled={this.state.author === '' || this.state.title === '' || this.state.content === '' || this.state.photostate === '' || this.state.photostatetwo === '' || this.state.photostatethree === ''} className="btn btn-success btn-send" value="Create Blog" />
        </div>

        <img id="img" alt =""></img>

    </form>
    </div>
)
    }
}

export default MakeBlog3;