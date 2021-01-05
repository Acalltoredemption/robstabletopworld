import React from 'react';
import TankPlaceholder from '../../images/worldoftanks.jpg';
import './blogposts.css';
import {Button} from 'react-bootstrap';
import firebase from "firebase/app";
import 'firebase/firestore';



var firebaseConfig = {
    apiKey: "AIzaSyCXkt08M0uJWxJHy7JhhiVanIm2iqyMzvk",
    authDomain: "robs-tabletop-world.firebaseapp.com",
    projectId: "robs-tabletop-world",
    storageBucket: "robs-tabletop-world.appspot.com",
    messagingSenderId: "272819274914",
    appId: "1:272819274914:web:268f9eb9ed56d52d1ec3fb",
    measurementId: "G-MSBBVFXXDP"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true})

 
  function renderBlog(doc){
      let parentdiv = document.createElement('div');
      let titlediv = document.createElement('div');
      let authordiv = document.createElement('div');
      let contentdiv = document.createElement('div');
      let articlebutton = document.createElement('button');
  
      titlediv.textContent = doc.data().title;
      authordiv.textContent = doc.data().author;
      contentdiv.textContent = doc.data().content;
      articlebutton.textContent = 'To Article';
  
      parentdiv.appendChild(titlediv);
      parentdiv.appendChild(authordiv);
      parentdiv.appendChild(contentdiv);
      parentdiv.appendChild(articlebutton);
      document.getElementById('blog-list').appendChild(parentdiv);
  }
  
      db.collection('blogposts').get().then((snapshot) => {
          snapshot.docs.forEach(doc => {
              renderBlog(doc);
          })
      })


const BlogPosts = () => {
    return (
        <div className="blogpost">

        <div className="blogpost-image">
        <div className='content'>
        <h1 className='title'>WORLD OF TANKS</h1>
        </div>
        <img className="blogimg" src={TankPlaceholder} alt="a blogpost image" /> 
        
        </div>


        <div className="blogpost-author">Rob Oren</div>
        <div className="blogpost-summary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit libero sed lacus congue, eu sodales nisl vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla neque interdum metus ultrices, sed mattis nibh vulputate. Donec lacinia, turpis vel mattis pharetra, augue elit posuere massa, eu ultrices ex mi eget ipsum. In viverra tincidunt augue, ut auctor leo venenatis a. Vestibulum nec arcu leo. Nulla porttitor nec massa viverra euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas vitae sollicitudin purus. Sed vehicula lorem eu ultricies pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Suspendisse mollis a nunc et finibus. Mauris non felis ac nisl suscipit interdum ut in mi. Donec eget vulputate purus. Nam eget laoreet mi. Maecenas ut bibendum nulla. Morbi non nisi tincidunt, accumsan nisl fermentum, volutpat odio. Suspendisse scelerisque, metus sodales sagittis dapibus, eros nisi congue lorem, ac vehicula massa justo vel dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam mauris tellus, imperdiet a arcu eget, condimentum ultricies ante. Nulla posuere eros pulvinar turpis porta pharetra. Duis cursus quam vel auctor finibus. Fusce et faucibus ligula. Suspendisse vitae lacus ac magna faucibus tempor id in lacus.
        </div>
        <div className="buttondiv">
        <button className={Button}>To Article</button>
        </div>


        <ul id="blog-list">
    
        </ul>



        </div>


    )
}

export default BlogPosts;