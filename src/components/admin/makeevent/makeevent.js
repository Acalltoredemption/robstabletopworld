import React, {Component} from 'react';
import {firebase, db} from "../../../firebase/firebaseconfig";
import history from '../../../history/history';
import './makeevent.css';




class MakeEvent extends Component {
    state = {
        title: '',
        description: '',
        photo: '',
        createdat: '',
        url: ''
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
        this.createEvent(this.state);
    }

    createEvent = () => {
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
            this.setState({photo: url})
            this.sendEvent();
    
        })
    }
    sendEvent = (event) => {
        db.collection('events').add({
            ...event, 
            title: this.state.title,
            description: this.state.description,
            photo: this.state.photo,
            url: this.state.url,
            createdat: new Date()

        })
        history.push('/')
    }


    render(){
    
return (
    <div>
    <div className="titleholder">
        <p>Video of the Week entry for homepage. Please fill ALL fields</p>
    </div>
    <form id="add-blog-form" onSubmit={this.handleSubmit}>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="title">Video Title</label>
                <input className="form-control" type="text" onChange={this.handleChange} id="title" name="title" placeholder="Post Title" />
        </div>
        </div>



    
            <div className="col-md-12">
                <div className="form-group">
                <label htmlFor="description">Brief Description</label>
        <textarea className="form-control" type="text" onChange={this.handleChange} id="description" name="description" placeholder="Description" />
        </div>
        </div>
       
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="image">Video Image (or thumbnail)</label>
                <input className="form-control" type="file" onChange={this.uploadImage} placeholder="Post Image" name="image" id="photo" />
        </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="url">Direct URL to video</label>
                <input className="form-control" type="text" onChange={this.handleChange} id="url" name="url" placeholder="Event URL" />
        </div>
        </div>

        <div className="col-md-12">
            <input type="submit" className="btn btn-success btn-send" value="Create Event" />
        </div>

        <img id="img" alt=""></img>

    </form>
    </div>
)
    }
}

export default MakeEvent;