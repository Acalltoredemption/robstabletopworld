import React, {Component} from 'react';
import 'firebase/storage';
import {firebase, db} from '../../firebase/firebaseconfig';
import history from '../../history/history';
import './submissions.css'
import {toast} from 'react-toastify';



class CommunitySubmissions extends Component {
    state = {
        bio: '',
        name: '',
        photo: '',
        date: '',
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
            
        })
    }
    handleCommunitySubmit = (e) => {
        e.preventDefault();
        this.createCommunityMember(this.state);
    }

    createCommunityMember = () => {
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
            this.sendCommunityMember();
    
        })
    }
    sendCommunityMember = (member) => {
        db.collection('community').add({
            ...member, 
            name: this.state.name,
            bio: this.state.bio,
            photo: this.state.photo, 
            date: new Date(),
            unapproved: true

        })
        toast('Entry submitted and awaiting approval.');
        history.push('/')
    }


    render(){
    
return (
    <form id="add-blog-form" onSubmit={this.handleCommunitySubmit}>

        <div className="infodiv communitysubmit">
        <button type="submit" onClick={() => history.push('/submissions')} className="btn communitybutton btn-primary">Art Submissions</button>
            <h3>Community Submissions</h3>
            <p>Join the Robs Tabletop World community! Tell us a bit about yourself and be featured here on the website! 
                <br></br>Once per month we will select a community member to win a Miniature Market gift certificate!</p>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="name">Your Name</label>
        <input className="form-control" type="text" onChange={this.handleChange} id="name" name="name" placeholder="Your Name" />
        </div>
        </div> 
            <div className="col-md-12">
                <div className="form-group">
                <label htmlFor="description">About You</label>
        <textarea className="form-control" type="text" onChange={this.handleChange} id="bio" name="bio" placeholder="About You" />
        </div>
        </div>
       
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="image">Your Photo</label>
                <input className="form-control" type="file" onChange={this.uploadImage} placeholder="Post Image" name="photo" id="photo" />
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

export default CommunitySubmissions;