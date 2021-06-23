import React, {Component} from 'react';
import 'firebase/storage';
import {firebase, db} from '../../../firebase/firebaseconfig';
import history from '../../../history/history';
import './fileupload.css';
import {toast} from 'react-toastify';
  



class FileUpload extends Component {
    state = {
        title: '',
        content: '',
        date: '',
        photostate: '',
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
        this.createFile(this.state);
    }
    photoStateHold = (e) => {
        const file = document.querySelector("#photo").files[0];
        var filenames = new Date() + '-' + file.name;
        this.setState({
            photostate: filenames
        })
    }


    createFile = () => {
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
            const image = document.querySelector('#file')
            image.src = url;
            image.alt = '';
            this.setState({photo: url})
                this.sendFile();
        
        });
        }

    
    sendFile = (file) => {
        db.collection('files').add({
            ...file, 
            title: this.state.title,
            content: this.state.content,
            photo: this.state.photo, 
  
            date: new Date()

        })
        toast.success('New File added.');
        history.push('/')
    }




    render(){
    
return (
    <div>
    <div className="makeblogbuttons">
    <p>Upload a PDF file for the fileshare section</p>
    </div>
    <form id="add-blog-form" onSubmit={this.handleSubmit}>

        
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="title">File Title</label>
                <input className="form-control" type="text" onChange={this.handleChange} id="title" name="title" placeholder="The Title of the File" />
        </div>
        </div>



    
            <div className="col-md-12">
                <div className="form-group">
                <label htmlFor="content2">File Description</label>
        <textarea className="form-control" type="text" onChange={this.handleChange} id="content" name="content" placeholder="A Description of this File" />
        </div>
        </div>
       
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="image">PDF File</label>
                <input className="form-control" type="file" onChange={this.photoStateHold} placeholder="PDF File" name="image" id="photo" />
        </div>
        </div>

        <div className="col-md-12">
            <input type="submit" disabled={this.state.author === '' || this.state.title === '' || this.state.content === '' || this.state.photostate === ''} className="btn btn-success btn-send" value="Create Blog" />
        </div>

        <div id="file" alt =""></div>

    </form>
    </div>
)
    }
}

export default FileUpload