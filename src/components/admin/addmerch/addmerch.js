import React, {Component} from 'react';
import 'firebase/storage';
import {firebase, db} from '../../../firebase/firebaseconfig';
import history from '../../../history/history';

  



class AddMerch extends Component {
    state = {
        photo: '',
        description: '',
        url: '',
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
        this.createMerch(this.state);
    }

    createMerch = () => {
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
            this.sendMerch();
    
        })
    }
    sendMerch = (merch) => {
        db.collection('merch').add({
            ...merch, 
            photo: this.state.photo, 
            description: this.state.description,
            url: this.state.url,
            date: new Date()

        })
        history.push('/')
    }


    render(){
    
return (
    <form id="add-blog-form" onSubmit={this.handleSubmit}>       
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="image">Blog Image</label>
                <input className="form-control" type="file" onChange={this.uploadImage} placeholder="Post Image" name="image" id="photo" />
        </div>

        <div className="col-md-12">
                <div className="form-group">
                <label htmlFor="description">Merch Description</label>
        <textarea className="form-control" type="text" onChange={this.handleChange} id="description" name="description" placeholder="Merch Description" />
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="url">Merch URL</label>
        <input className="form-control" type="text" onChange={this.handleChange} id="url" name="url" placeholder="URL to Merch" />
        </div>
    
        </div>



    

        </div>
        </div>
        <div className="col-md-12">
            <input type="submit" className="btn btn-success btn-send" value="Create Merch" />
        </div>

        <img id="img" alt =""></img>

    </form>
)
    }
}

export default AddMerch;