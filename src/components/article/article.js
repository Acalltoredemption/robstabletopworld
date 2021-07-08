import React, {useState, useEffect} from 'react';
import {db} from '../../firebase/firebaseconfig';
import history from '../../history/history';
import './article.css';
import {useAuth} from '../../contexts/AuthContext';
import {auth} from '../../firebase/firebaseconfig';
import {toast} from 'react-toastify';
import moment from 'moment';
import {Badge} from 'antd';

const {Ribbon} = Badge;

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
            await commentRef.orderBy("approved").orderBy("date", "asc").get().then(snapshot => {
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
            toast.success('Comment submitted for approval.');
            history.push('/')
    
    }
    const updateCommentContent = (e) => {
        setCommentContent(e.target.value);
    }

    function loginRedirect(){
        history.push('/login');
    }



    return(
        <div>
            {
            blog && 
            blog.map(blog => {
                const secondImage = document.querySelectorAll('#secondimg');
                const thirdImg = document.querySelectorAll('#thirdimg');
                const secondParagraph = document.querySelectorAll('#secondcontent');
                const thirdParagraph = document.querySelectorAll('#thirdcontent');
            
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

                if(blog.secondcontent !== undefined ){
                    secondParagraph.forEach(item => item.style.display = 'flex');
                } else {
                    secondParagraph.forEach(item => item.style.display = 'none');
                }
                if(blog.thirdcontent !== undefined){
                    thirdParagraph.forEach(item => item.style.display = 'flex');
                } else {
                    thirdParagraph.forEach(item => item.style.display = 'none');
                }


                return(
        <div className="blogpost" key={blog.title}>
         <div className="blogpost-author">{blog.title}</div>
         <div className="blogpost-author">{blog.author}</div>
      <div className="blogbox2">       
         <div className="pageblogpost-image2">
         <img className="blogimg2"  src={blog.photo} alt="a blogpost" /> 
         </div>
         </div>
         <div className="blogpost-summary" id="firstcontent">
             {blog.content}
         </div>

         
         <div className="thecenterertwo" id="secondimg">
            <div className="hidediv" >
        <div className="pageblogpost-image2" >
         <img className="blogimg2" src={blog.secondphoto} alt="a blogpost" />
         </div>
         </div>
        </div>

         <div className="blogpost-summary" id="secondcontent">
             {blog.secondcontent}
         </div>

         <div className="thecentererthree" id="thirdimg"> 
        <div className="pageblogpost-image2">
         <img className="blogimg2" src={blog.thirdphoto} alt="a blogpost" />
         </div>
        </div>

        <div className="blogpost-summary" id="thirdcontent">
             {blog.thirdcontent}
         </div>

         <div className="buttondiv"> 


                { comments &&
                    comments.map(comment => {
                        if(queryString === comment.blogRef.toString()){
                        return(
                            
                            <div className="commentholder" key={comment.date}>
                                
                            <div className="commentbox">
                            <Ribbon text={comment.username} color="geekblue"> 
                                <div className="commentdate">
                                {`${moment(comment.date).fromNow()}`}
                                </div>
                                <p className="ribbonpad">
                                {comment.content}
                                </p>
                                </Ribbon>
                            </div>
                            </div>
                            

                        );
                        }
                    })

                }
         <form id="add-blog-form" onSubmit={handleSubmit}>



        <div id="commentscontainer" className="comments-container">
            <div className="comments-field">
            <textarea id="form_message" name="message" className="commentsfield" onChange={updateCommentContent} placeholder="Leave a comment on this article" rows="4" required="required" data-error="Leave a Comment on this article"></textarea>
            <button type="submit" id="logged-in-article" className="submitbtn"disabled={commentContent.length < 5} >Submit</button>

            <button id="logged-out-article" className="loggedoutbtn" onClick={loginRedirect}>Sign in to Comment!</button>

            <div className="help-block with-errors"></div>
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