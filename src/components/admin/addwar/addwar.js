import React, {useState} from 'react';
import 'firebase/storage';
import {firebase, db} from '../../../firebase/firebaseconfig';
import history from '../../../history/history';
import {toast} from 'react-toastify';


const Addwar = () => {


    const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState('');
    const [url, setUrl] = useState('');


    const updateTitle = (e) => {
        setTitle(e.target.value);
    }
    const updateUrl = (e) => {
        setUrl(e.target.value);
    }
    const updatePhoto = (e) => {
        const ref = firebase.storage().ref();
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
            setPhoto(url);
            
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendWar();
    }

    
    const sendWar = (war) => {
         db.collection('war').add({
             ...war, 
             title: title,
             photo: photo, 
             url: url,
             date: new Date()

         })
         toast.success('War and pieces section has been updated!');
         history.push('/')
    }

  


    return ( 
        <div>
        <div className="titleholder">
            <p>Update the contents of the War and Pieces redirect on homepage. Please fill out ALL fields.</p>
        </div>
    <form id="add-blog-form" onSubmit={handleSubmit}>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input className="form-control" type="text" onChange={updateTitle} id="title" name="title" placeholder="Post Title" />
        </div>
        </div>
       
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input className="form-control" type="file"  onChange={updatePhoto} placeholder="Image" name="image" id="photo" />
        </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="title">URL</label>
                <input className="form-control" type="text" onChange={updateUrl} id="url" name="url" placeholder="Video URL" />
        </div>
        </div>
        <div className="col-md-12">
            <input type="submit" disabled={ !title || !photo || !url} className="btn btn-success btn-send" value="Create" />
        </div>



    </form>
    </div>

     );
}
 
export default Addwar;