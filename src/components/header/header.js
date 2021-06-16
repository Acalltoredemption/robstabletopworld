import React from 'react';
import banner from '../../images/banner.png';
import './header.css';
import Youtube from  '../../images/Youtube.png';
import Twitter from '../../images/Twitter.png';
import Instagram from '../../images/Instagram.png';
import MiniatureMarket from '../../images/MiniatureMarket.png';
import Donate from '../../images/donate.png';
import
{NavLink}
from "react-router-dom";
import {useAuth} from '../../contexts/AuthContext';




const Header = () => {




    const {currentUser} = useAuth();

    const loggedIn = document.querySelectorAll('#logged-in');
    const loggedOut = document.querySelectorAll('#logged-out');
  
    if (currentUser && currentUser.email) {
        //toggle UI elements
        loggedIn.forEach(item => item.style.display = 'block');
        loggedOut.forEach(item => item.style.display = 'none');
    } else {
        //toggle UI elements
        loggedIn.forEach(item => item.style.display = 'none');
        loggedOut.forEach(item => item.style.display = 'block');
    }

  
    return (
    <div>
      <div>
          <a name="top" style={{display: 'none'}}> screen anchor </a>
          <div className="bannerparent">
      <img className='banner' src={banner} alt='channel banner'></img>
      </div>
      </div>


      <nav class="navbar navbar-expand-lg navbar-light navshadow">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink exact to="/" className="nav-link">Home</NavLink>
        </li>


        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            About
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li class="nav-item">
        <NavLink to="/about" className="nav-link">About Me</NavLink>
        </li>
        <li class="nav-item"> 
        <NavLink to="/contact" className="nav-link">Contact Me</NavLink>
        </li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Community
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li class="nav-item">
        <NavLink to="/art" className="nav-link">Art Showcase</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/community" className="nav-link">Our Community</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/submissions" id="logged-in" className="nav-link">Submissions</NavLink>
        </li>
          </ul>
        </li>

        <li class="nav-item">
        <NavLink exact to="/login" id="logged-out" className="nav-link">Log In</NavLink>
        </li>
        <li class="nav-item">
        <NavLink exact to="/signup" id="logged-out" className="nav-link">Sign Up</NavLink>
        </li>



      </ul>
    </div>
  </div>
  <div class="float-right">
  <a href="https://www.youtube.com/user/seahawk8601" target="_blank" rel="noopener noreferrer" ><img className="Youtube" src={Youtube} alt="Youtube logo"></img></a>
      <a href="https://twitter.com/seahawk860" target="_blank" rel="noopener noreferrer"><img className="Twitter" src={Twitter} alt="Twitter logo"></img></a>
      <a href="https://www.instagram.com/robstabletopworld/" target="_blank" rel="noopener noreferrer"><img className="Instagram " src={Instagram} alt="Instagram logo"></img></a>
      <a href="https://www.miniaturemarket.com/" target="_blank" rel="noopener noreferrer"><img className="MiniatureMarket" src={MiniatureMarket} alt="Miniature Market logo"></img></a> 
      <a href="https://streamlabs.com/robstabletopworld/tip" target="_blank" rel="noopener noreferrer"><img className="Donate" src={Donate} alt="Donation Button"></img></a>    
  </div>
</nav>

</div>

    )
}; 

export default Header;
