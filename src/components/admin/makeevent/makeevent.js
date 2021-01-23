import React, {Component} from 'react';
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage';


  const db = firebase.firestore();



class MakeEvent extends Component {
    state = {
        title: '',
        description: '',
        date: '',
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
            console.log(url)
            alert("image upload successful!")
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
            date: this.state.date,
            photo: this.state.photo

        })
    }


    render(){
    
return (
    <form id="add-blog-form" onSubmit={this.handleSubmit}>


        <div className="col-md-6">
            <div className="form-group">
                <label for="date">Date</label>
        <input className="form-control" type="date" onChange={this.handleChange} id="date" name="date" placeholder="Event Date" />
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
                <label for="description">Event Description</label>
        <textarea className="form-control" type="text" onChange={this.handleChange} id="description" name="description" placeholder="Description" />
        </div>
        </div>
       
        <div className="col-md-6">
            <div className="form-group">
                <label for="image">Event Image</label>
                <input className="form-control" type="file" onChange={this.uploadImage} placeholder="Post Image" name="image" id="photo" />
        </div>
        </div>
        <div class="col-md-12">
            <input type="submit" class="btn btn-success btn-send" value="Create Event" />
        </div>

        <img id="img" alt=""></img>

    </form>
)
    }
}

export default MakeEvent;