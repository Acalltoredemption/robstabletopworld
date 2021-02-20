import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import history from '../../../history/history';
import '../../../firebase/firebaseconfig';
import firebase from 'firebase'

const ApproveComments = () => {
        const [comments, setComments] = useState([]);
        const [bloglist, setBloglist] = useState([]);

        useEffect(() => {
            const fetchComments = async () => {
            
                await db.collection('comments').orderBy('unapproved').get().then((snapshot) => {
                    this.comments = []
                    
                    snapshot.docs.forEach(doc => {
                        var data = {id: doc.id, ...doc.data() };
                         this.comments.push(data)
                         
                    })
                });
                setComments(this.comments);
                           
            }      
            fetchComments();

            const fetchBlogTitle = async () => {
            
                await db.collection('blogposts').get().then((snapshot) => {
                    this.bloglist = []
                    
                    snapshot.docs.forEach(doc => {
                        var data = {id: doc.id, ...doc.data() };
                         this.bloglist.push(data)
                         
                    })
                });
                setBloglist(this.bloglist)             
            }      
            fetchBlogTitle();


        }, []);

    


    

        return(
            <div>
                <div id="bulkOptionContainer" className="col-xs-4">
                    <div className="approvalheading">
                    <div>Unapproved Blog Comments</div>
                    </div>
                <table class="table table-bordered blogdisplay">
                <thead>
                    <tr>
                        <th className="blogitem">Blog</th>
                        <th className="blogitem">Comment</th>
                        <th className="blogitem">Username</th>
                        <th className="blogitem">Delete</th>
                        <th className="blogitem">Approve</th>
                    </tr>
                </thead>
             </table>
                {
                comments && 
                comments.map(comment => {
                    function deleteComment (e) {
                        db.collection('comments').doc(comment.id).delete();
                        history.push('/')
                     }

                    function approveComment (e) {
                        db.collection('comments').doc(comment.id).set({
                            approved: true
                        }, { merge: true});
                        db.collection('comments').doc(comment.id);
                        var docRef = db.collection('comments').doc(comment.id);
                        docRef.update({
                            unapproved: firebase.firestore.FieldValue.delete()
                        })
                        history.push('/') 
                    }
                    if(comment.blogref === bloglist.id){
                        var blogtitle = bloglist.title;
                    } 

                    function testbut (e){
                        e.preventDefault();
                        console.log(bloglist);
                        console.log(comment.blogref);
                        console.log(bloglist.title);
                    }
            return(
                <table className="table table-bordered blogdisplay">
                    <td className="blogitem">{blogtitle}</td>
                    <td className="blogitem">{comment.content}</td>
                    <td className="blogitem">{comment.username}</td>
                    <td className="blogitem"><button type="submit" onClick={(e) => deleteComment(e)} className="btn btn-danger">Delete</button> </td>
                    <td className="blogitem" id={comment.date}><input type="submit" onClick={(e) => approveComment(e)} showcaseid={comment.id} className="btn btn-success btn-send" value="Approve" /></td>
                    <button onClick={(e) => testbut(e)} />
                </table>
             )
             }
             )
        
             }

             </div>
            </div>
            
                )
            
        
    }
    

 
export default ApproveComments;