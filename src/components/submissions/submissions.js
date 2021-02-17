import React, {Component} from 'react';
import 'firebase/storage';
import {firebase, db} from '../../firebase/firebaseconfig';
import history from '../../history/history';
import './submissions.css'
  



class Submissions extends Component {
    state = {
        description: '',
        name: '',
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
        this.createShowcase(this.state);
    }

    createShowcase = () => {
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
            const image = document.querySelector('#img')
            image.src = url;
            image.alt = '';
            this.setState({photo: url})
            this.sendShowcase();
    
        })
    }
    sendShowcase = (showcase) => {
        db.collection('showcase').add({
            ...showcase, 
            name: this.state.name,
            description: this.state.description,
            photo: this.state.photo, 
            date: new Date(),
            unapproved: true

        })
        history.push('/')
    }


    render(){
    
return (
    <form id="add-blog-form" onSubmit={this.handleSubmit}>

        <div className="infodiv communitysubmit">
        <button type="submit" className="communitybutton" onClick={() => history.push('/communitysubmit')} className="btn btn-primary">Community Submissions</button>
            <h3>Art Submissions</h3>
            <p>Have a project that came out well or something you'd like to share? Submit it below for consideration to be added to our Art Showcase!</p>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="name">Your Name</label>
        <input className="form-control" type="text" onChange={this.handleChange} id="name" name="name" placeholder="Author Name" />
        </div>
        </div> 
            <div className="col-md-12">
                <div className="form-group">
                <label htmlFor="description">Short Description</label>
        <textarea className="form-control" type="text" onChange={this.handleChange} id="description" name="description" placeholder="Description" />
        </div>
        </div>
       
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="image">Project Photo</label>
                <input className="form-control" type="file" onChange={this.uploadImage} placeholder="Post Image" name="image" id="photo" />
        </div>
        </div>
        <div className="col-md-12">
            <input type="submit" className="btn btn-primary btn-send" value="Submit" />
        </div>

        <img id="img" alt =""></img>

    </form>
)
    }
}

export default Submissions