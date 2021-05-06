import React from 'react';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
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
import AddMerch from './components/admin/addmerch/addmerch';
import ViewMerch from './components/admin/viewmerch/viewmerch';
import SubmissionsPage from './components/submissions/submissions';
import CommunitySubmit from './components/submissions/communitysubmit';
import OurCommunityPage from './components/community/ourcommunity/ourcommunity';
import ApprovePage from './components/admin/approve/approve';
import ApprovedPage from './components/admin/approved/approved';
import ApproveCommunity from './components/admin/approvecommunity/approvecommunity';
import ApprovedCommunity from './components/admin/approvedcommunity/approvedcommunity';
import ApproveComments from './components/admin/comments/comments';
import AddWarPage from './components/admin/addwar/addwar';
import ArtPage from './components/community/community';
import {AuthProvider} from './contexts/AuthContext';
import AdminNav from './components/admin/adminnav/adminnav';
import BlogEdit from './components/admin/blogedit/blogedit';
import {Router} from 'react-router';
import ArticlePage from './components/article/article';
import history from './history/history';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import {
    Route,
  } from "react-router-dom";






const app = () => {


return (
    <AuthProvider>
        <Router history={history}>
    <div className="Homepage">
        
        <Header /> 
        <NavBar />
        <AdminNav />
        <ToastContainer position="top-center" />
        
        
        <Route exact path='/' component={HomePage} />
        <Route path='/article' component={ArticlePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/submissions' component={SubmissionsPage} />
        <Route path='/communitysubmit' component={CommunitySubmit} />
        <Route path='/community' component={OurCommunityPage} />
        <Route path='/art' component={ArtPage} />
        <Route path='/editblog' component={EditBlog} />
        <Route path='/articlecomments' component={ApproveArticleComments} />
        <Route path='/approvedcomments' component={ApprovedArticleComments} />
        <Route path='/makeblog' component={MakeBlogPage} />
        <Route path='/makeblog2' component={MakeBlog2Page} />
        <Route path='/makeblog3' component={MakeBlog3Page} />
        <Route path='/warandpieces' component={AddWarPage} />
        <Route path='/makeevent'  component={MakeEventPage} />
        <Route path='/approve' component={ApprovePage}  />
        <Route path='/approvedcommunity' component={ApprovedCommunity} />
        <Route path='/communitysubmissions' component={ApproveCommunity} />
        <Route path='/comments' component={ApproveComments} />
        <Route path='/approved' component={ApprovedPage} />
        <Route path="/addmerch" component={AddMerch} />
        <Route path='/merch' component={ViewMerch} />
        <Route path='/blogedit' component={BlogEdit} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
       
    
    </div>
    </Router>
    </AuthProvider>


)
}

export default app;