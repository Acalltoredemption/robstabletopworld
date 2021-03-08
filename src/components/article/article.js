import React, {useState, useEffect} from 'react';
import {db} from '../../firebase/firebaseconfig';
import history from '../../history/history';
import './article.css';
import {useAuth} from '../../contexts/AuthContext';
import {auth} from '../../firebase/firebaseconfig';

const  Article = () => {

    const [blog, setBlog] = useState([]);
    const [comments, setComments] = useState([]);
    const queryString = window.location.search.substr(1);
    const [commentContent, setCommentContent] = useState('');
    const {currentUser} = useAuth();
    const loggedInArticle = document.querySelectorAll('#logged-in-article');
    const loggedOutArticle = document.querySelectorAll('#logged-out-article');
    const [username, setUsername] = useState([]);

    if (currentUser && currentUser.email) {
        //toggle UI elements
        loggedInArticle.forEach(item => item.style.display = 'flex');
        loggedOutArticle.forEach(item => item.style.display = 'none');
      
    } else {
        //toggle UI elements
        loggedInArticle.forEach(item => item.style.display = 'none');
        loggedOutArticle.forEach(item => item.style.display = 'flex');

    }

    useEffect(() => {
        auth.onAuthStateChanged(function(user){
            if(user){
                var theusersEmail = user.email;
                var nameCapitalized = theusersEmail.charAt(0).toUpperCase() + theusersEmail.slice(1);
                fetchUsername(nameCapitalized);
            }
        })
        const fetchUsername =  (nameCapitalized) => {
            
             db.collection('usernames').doc(nameCapitalized).get().then(snapshot => {
                if (snapshot.exists){
                     var data = snapshot.data();
                     setUsername(data.username.toString());
                } else {
                    console.log('no such document');
                }
            })
        }
    }, []);


    useEffect(() => {
        const fetchPosts = async () => {
            const queryString = window.location.search.substr(1);
            await db.collection('blogposts').doc(queryString).get().then(doc => {
                this.blogstore = []
                
                    var data = {id: doc.id, ...doc.data() };
                     this.blogstore.push(data)
                     
                })
            ;
            setBlog(this.blogstore);    
        }      
        fetchPosts();
    }, []);

    useEffect(() => {
        const fetchComments = async () => {
            var commentRef = db.collection('comments');
            await commentRef.orderBy("date", "asc").get().then(snapshot => {
                this.commentstore = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                     this.commentstore.push(data)
                })
            });
            setComments(this.commentstore);  
            
        }
        fetchComments();
        
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendComment();
    } 

    function sendComment(comment){
            db.collection('comments').add({
                ...comment, 
                username: username,
                unapproved: true,
                blogRef: queryString,
                content: commentContent,
                date: new Date().toString(),
    
            })
            history.push('/')
    
    }
    const updateCommentContent = (e) => {
        setCommentContent(e.target.value);
    }





    return(
        <div>
            {
            blog && 
            blog.map(blog => {
                const secondImage = document.querySelectorAll('#secondimg');
                const thirdImg = document.querySelectorAll('#thirdimg');
            
                if (blog.secondphoto !== undefined) {
                    secondImage.forEach(item => item.style.display = 'flex');
                } else {
                    secondImage.forEach(item => item.style.display = 'none');
                } 

                if (blog.thirdphoto !== undefined){
                    thirdImg.forEach(item => item.style.display = 'flex');
                } else {
                    thirdImg.forEach(item => item.style.display = 'none');
                }


                return(
        <div className="blogpost" key={blog.title}>
      <div className="blogbox">       
         <div className="pageblogpost-imagemain">
         <div className='pagecontent'>
         <h1 className='title'>{blog.title}</h1>
         </div>
         <img className="blogimg"  src={blog.photo} alt="a blogpost" /> 
         </div>
         </div>
         <div className="blogpost-author">{blog.author}</div>
         <div className="blogpost-summary">
             {blog.content}
         </div>

         
         <div className="thecenterertwo" id="secondimg">
            <div className="hidediv" >
        <div className="pageblogpost-imagemain" >
         <img className="blogimg" src={blog.secondphoto} alt="a blogpost" />
         </div>
         </div>
        </div>

         <div className="blogpost-summary">
             {blog.secondcontent}
         </div>

         <div className="thecentererthree" id="thirdimg"> 
        <div className="pageblogpost-imagemain">
         <img className="blogimg" src={blog.thirdphoto} alt="a blogpost" />
         </div>
        </div>

        <div className="blogpost-summary">
             {blog.thirdcontent}
         </div>
         <hr></hr>
         <div className="buttondiv"> 


                { comments &&
                    comments.map(comment => {
                        if(queryString === comment.blogRef.toString()){
                        return(
                            <div className="commentholder" key={comment.date}>
                            <div className="commentbox">
                            <div className="commentusername">
                                {comment.username}
                                </div>
                                <div className="commentdate">
                                {comment.date}
                                </div>
                                {comment.content}

                            </div>
                            </div>

                        );
                        }
                    })

                }
         <form id="add-blog-form" onSubmit={handleSubmit}>
         <div className="row">
        <div className="col-md-12">
            <div className="form-group">
                <div className="commentholder">
                <textarea id="form_message" name="message" className="form-control" style={{width: '40rem'}} onChange={updateCommentContent} placeholder="Leave a comment on this article" rows="4" required="required" data-error="Leave a Comment on this article"></textarea>
                </div>
                <div className="help-block with-errors"></div>
            </div>
        </div>
        <div className="col-md-12">
            <div className="thecenterertwo">
                <p id="logged-out-article">Please log in to comment on this blog.</p>
            <input type="submit" id="logged-in-article" className="btn btn-success btn-send" value="Send message" />
            </div>
        </div>
    </div>
    </form>
    


    </div>
     <div>
     </div>
     </div>
                            )
                        })
                    }
        </div>
        
            )

}
export default Article;