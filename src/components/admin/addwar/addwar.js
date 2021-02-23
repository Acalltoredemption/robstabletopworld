import React, {Component} from 'react';
import 'firebase/storage';
import {firebase, db} from '../../../firebase/firebaseconfig';
import history from '../../../history/history';


class AddWar extends Component {
    
    
    state = {
        title: '',
        photo: '',
        date: '',
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
        this.createWar(this.state);
    }

    createWar = () => {
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
            const image = document.querySelector('#photo')
            image.src = url;
            image.alt = '';
            this.setState({photo: url})
            this.sendWar();
    
        })


        
    }
    sendWar = (war) => {
        db.collection('war').add({
            ...war, 
            title: this.state.title,
            photo: this.state.photo, 
            url: this.state.url,
            date: new Date()

        })
        history.push('/')
    }


    render(){




return (
    <div>
        <div className="titleholder">
            <p>Update the contents of the War and Pieces redirect on homepage. Please fill out ALL fields.</p>
        </div>
    <form id="add-blog-form" onSubmit={this.handleSubmit}>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input className="form-control" type="text" onChange={this.handleChange} id="title" name="title" placeholder="Post Title" />
        </div>
        </div>
       
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input className="form-control" type="file" onChange={this.uploadImage} placeholder="Image" name="image" id="photo" />
        </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="title">URL</label>
                <input className="form-control" type="text" onChange={this.handleChange} id="url" name="url" placeholder="Video URL" />
        </div>
        </div>
        <div className="col-md-12">
            <input type="submit" className="btn btn-success btn-send" value="Create" />
        </div>



    </form>
    </div>
)
    }
}

export default AddWar;