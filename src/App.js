import React from 'react';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import HomePage from './components/homepage/homepage';
import AboutPage from './components/about/about';
import ContactPage from './components/contact/contact';
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
       
    
    </div>



)
}

export default App;