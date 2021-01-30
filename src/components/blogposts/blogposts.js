import React from 'react';
import './blogposts.css';

import {db} from '../../firebase/firebaseconfig';
import Tilt from 'react-vanilla-tilt';


class BlogPosts extends React.Component {
    state = {
        title: null,
        author: null,
        content: null,
        photo: null,
        
    }

    componentDidMount(){
var first = db.collection('blogposts').orderBy('date').limit(5);


return first
.get()
.then(snapshot => {
    const blogs = []
    snapshot.forEach(doc => {
        const data = doc.data()
        blogs.push(data)
    })
    this.setState({blogs : blogs})
    var lastVisible = snapshot.docs[snapshot.docs.length -1];
    console.log("last", lastVisible)
console.log(blogs)

 this.next = db.collection('blogposts').orderBy('date').startAfter(lastVisible).limit(5)
})
.catch(error => console.log(error)),  []}


nextPage () {
   
    return this.next
    .get()
    .then(snapshot => {
        const blogs = []
        snapshot.forEach(doc => {
            const data = doc.data()
            blogs.push(data)
        })
        this.setState({blogs : blogs})
        var lastVisible = snapshot.docs[snapshot.docs.length -1];
        console.log("last", lastVisible)
    console.log(blogs)
    
     this.next = db.collection('blogposts').orderBy('date').startAfter(lastVisible).limit(5) 
    })
}

    render(){
        return(
            <div>
                {
                    this.state.blogs && 
                    this.state.blogs.map(blog => {
                        return (
    <div className="blogpost" key={blog.title}>
  <div className="blogbox">
 <Tilt className="tiltbox">       
     <div className="blogpost-image">
     <div className='content'>
     <h1 className='title'>{blog.title}</h1>
     </div>
     <img className="blogimg"  src={blog.photo} alt="a blogpost" /> 
     </div>
     </Tilt>
     </div>
     <div className="blogpost-author">{blog.author}</div>
     <div className="blogpost-summary">
         {blog.content}
     </div>
     <div className="buttondiv"> 
     <input type="submit" className="btn btn-success btn-send" value="To Article" />
  </div>
 <div>
 </div>
 </div>
                        )
                    })
                }
<ul className="pager">
<button onClick={(e) => this.nextPage()}value="Next Page"></button>

</ul>
            </div>
        )
    }
}

export default BlogPosts;
