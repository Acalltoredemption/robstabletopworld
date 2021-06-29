import React from 'react';
import Header from './components/header/header';
import HomePage from './components/homepage/homepage';
import AboutPage from './components/about/about';
import ContactPage from './components/contact/contact';
import EditBlog from './components/admin/editblog/editblog';
import ApproveArticleComments from './components/admin/articlecomments/articlecomments';
import ApprovedArticleComments from './components/admin/articlecomments/approvedarticlecomments';
import MakeBlogPage from './components/admin/makeblog/makeblog';
import MakeBlog2Page from './components/admin/makeblog/makeblog2/makeblog2';
import MakeBlog3Page from './components/admin/makeblog/makeblog3/makeblog3';
import MakeEventPage from './components/admin/makeevent/makeevent';
import LoginPage from './components/login/login';
import SignupPage from './components/signup/signup';
import FileShare from './components/fileshare/fileshare';
import AddMerch from './components/admin/addmerch/addmerch';
import ViewMerch from './components/admin/viewmerch/viewmerch';
import SubmissionsPage from './components/submissions/submissions';
import CommunitySubmit from './components/submissions/communitysubmit';
import FileUpload from './components/admin/fileupload/fileupload';
import OurCommunityPage from './components/community/ourcommunity/ourcommunity';
import ApprovePage from './components/admin/approve/approve';
import ApprovedPage from './components/admin/approved/approved';
import ApproveCommunity from './components/admin/approvecommunity/approvecommunity';
import ApprovedCommunity from './components/admin/approvedcommunity/approvedcommunity';
import ApproveComments from './components/admin/comments/comments';
import AddWarPage from './components/admin/addwar/addwar';
import ArtPage from './components/community/community';
import {AuthProvider} from './contexts/AuthContext';
import BlogEdit from './components/admin/blogedit/blogedit';
import {Router} from 'react-router';
import ArticlePage from './components/article/article';
import history from './history/history';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './contexts/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { 
    Route,
  } from "react-router-dom";

  var AdminLogged = false;
  function PrivateRoute ({children, ...rest}){
      const {currentUser} = useAuth();
      if (currentUser && currentUser.email) {
      if (currentUser.uid === 'cw67NhgIsDhyAdp2AMEuFm11a2G2'){
          AdminLogged = true;
        } else if(currentUser.uid === 'YAXN8aZhJQW3d7DhFuZzv8uM4kz1') {
            AdminLogged = true;
        } else {
      AdminLogged = false;
    }
}
    
      if(AdminLogged === true){
      return (
          <Route {...rest}>
  
          </Route>
      )
      } else {
          return (
              <div></div>
          )
      }
  }





const App = () => {

    

return (
    <AuthProvider>
        <Router history={history}>
    <div className="Homepage">
        
        <Header /> 
        <ToastContainer position="top-center" />
        
        
        <Route exact path='/' component={HomePage} />
        <Route path='/article' component={ArticlePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/submissions' component={SubmissionsPage} />
        <Route path='/communitysubmit' component={CommunitySubmit} />
        <Route path='/community' component={OurCommunityPage} />
        <Route path='/art' component={ArtPage} />
        <PrivateRoute path='/editblog' component={EditBlog} />
        <PrivateRoute path='/articlecomments' component={ApproveArticleComments} />
        <PrivateRoute path='/approvedcomments' component={ApprovedArticleComments} />
        <PrivateRoute path='/makeblog' component={MakeBlogPage} />
        <PrivateRoute path='/makeblog2' component={MakeBlog2Page} />
        <PrivateRoute path='/makeblog3' component={MakeBlog3Page} />
        <PrivateRoute path='/warandpieces' component={AddWarPage} />
        <PrivateRoute path='/makeevent'  component={MakeEventPage} />
        <PrivateRoute path='/approve' component={ApprovePage}  />
        <PrivateRoute path='/approvedcommunity' component={ApprovedCommunity} />
        <PrivateRoute path='/communitysubmissions' component={ApproveCommunity} />
        <PrivateRoute path='/comments' component={ApproveComments} />
        <PrivateRoute path='/approved' component={ApprovedPage} />
        <PrivateRoute path="/addmerch" component={AddMerch} />
        <PrivateRoute path='/merch' component={ViewMerch} />
        <PrivateRoute path='/blogedit' component={BlogEdit} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <PrivateRoute path='/fileupload' component={FileUpload} />
        <Route path="/fileshare" component={FileShare} />
       
    
    </div>
    </Router>
    </AuthProvider>


)
}

export default App;