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
    const loggedInAdmin = document.querySelectorAll('#logged-in-admin')
    const loggedIn = document.querySelectorAll('#logged-in');
    const loggedOut = document.querySelectorAll('#logged-out');
  
    if (currentUser && currentUser.email) {
        //toggle UI elements
        loggedIn.forEach(item => item.style.display = 'block');
        loggedOut.forEach(item => item.style.display = 'none');
        if (currentUser.uid === 'cw67NhgIsDhyAdp2AMEuFm11a2G2'){
          loggedInAdmin.forEach(item => item.style.display = 'block');
        }
    } else {
        //toggle UI elements
        loggedIn.forEach(item => item.style.display = 'none');
        loggedOut.forEach(item => item.style.display = 'block');
        loggedInAdmin.forEach(item => item.style.display = 'none');
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

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink exact to="/" className="nav-link">Home</NavLink>
        </li>


        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        <li class="nav-item">
        <NavLink to="/fileshare" className="nav-link">File Share</NavLink>
        </li>
          </ul>
        </li>

        <li class="nav-item dropdown" id="logged-in-admin">
          <a class="nav-link dropdown-toggle text-success font-weight-bold" id="logged-in-admin" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ADMIN
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li class="nav-item">
          <NavLink to="/makeblog" className="nav-link" id="logged-in-admin">Make Blogpost</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/makeevent" className="nav-link" id="logged-in-admin">Vid of the Week</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/blogedit" className="nav-link" id="logged-in-admin">View Blogs</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/approve" className="nav-link" id="logged-in-admin">Art Submissions</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/communitysubmissions" className="nav-link" id="logged-in-admin">Community Submissions</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/warandpieces" className="nav-link" id="logged-in-admin">War & Pieces</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/comments" className="nav-link" id="logged-in-admin">Message Inbox</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/articlecomments" className="nav-link" id="logged-in-admin">Article Comments</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/fileupload" className="nav-link" id="logged-in-admin">Upload Files</NavLink>
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
