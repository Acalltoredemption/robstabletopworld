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
import {AuthProvider} from './contexts/AuthContext';
import AdminNav from './components/admin/adminnav/adminnav';
import BlogEdit from './components/admin/blogedit/blogedit';
import {Router} from 'react-router';

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
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/makeblog' component={MakeBlogPage} />
        <Route path='/makeevent' component={MakeEventPage} />
        <Route path='/blogedit' component={BlogEdit} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
       
    
    </div>
    </Router>
    </AuthProvider>


)
}

export default App;