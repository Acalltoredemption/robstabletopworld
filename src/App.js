import React from 'react';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import HomePage from './components/homepage/homepage';
import AboutPage from './components/about/about';
import ContactPage from './components/contact/contact';
import MakeBlogPage from './components/admin/makeblog/makeblog';
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
import AddWarPage from './components/admin/addwar/addwar';
import ArtPage from './components/community/community';
import {AuthProvider} from './contexts/AuthContext';
import AdminNav from './components/admin/adminnav/adminnav';
import BlogEdit from './components/admin/blogedit/blogedit';
import {Router} from 'react-router';
import ArticlePage from './components/article/article';
import history from './history/history';


import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import {
    Route,
  } from "react-router-dom";





const App = () => {

return (
    <AuthProvider>
        <Router history={history}>
    <div className="Homepage">
        
        <Header /> 
        <NavBar />
        <AdminNav />
        
        
        <Route exact path='/' component={HomePage} />
        <Route path='/article' component={ArticlePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/submissions' component={SubmissionsPage} />
        <Route path='/communitysubmit' component={CommunitySubmit} />
        <Route path='/community' component={OurCommunityPage} />
        <Route path='/art' component={ArtPage} />
        <Route path='/makeblog' component={MakeBlogPage} />
        <Route path='/warandpieces' component={AddWarPage} />
        <Route path='/makeevent' component={MakeEventPage} />
        <Route path='/approve' component={ApprovePage} />
        <Route path='/approvedcommunity' component={ApprovedCommunity} />
        <Route path='/communitysubmissions' component={ApproveCommunity} />
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

export default App;