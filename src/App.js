import React from 'react';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import HomePage from './components/homepage/homepage';
import AboutPage from './components/about/about';
import ContactPage from './components/contact/contact';
import MakeBlogPage from './components/admin/makeblog/makeblog';
import MakeEventPage from './components/admin/makeevent/makeevent';
import LoginPage from './components/login/login';


import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import {
    Route,
  } from "react-router-dom";



const App = () => {

return (
    <div className="Homepage">
        
        <Header /> 
        <NavBar />
        
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/makeblog' component={MakeBlogPage} />
        <Route path='/makeevent' component={MakeEventPage} />
        <Route path='/login' component={LoginPage} />
       
    
    </div>



)
}

export default App;