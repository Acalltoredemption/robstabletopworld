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
        <a href="https://www.youtube.com/user/seahawk8601" target="_blank" rel="noopener noreferrer" ><img className="Youtube" src={Youtube} alt="Youtube logo"></img></a>
        <a href="https://twitter.com/seahawk860" target="_blank" rel="noopener noreferrer"><img className="Twitter" src={Twitter} alt="Twitter logo"></img></a>
        <a href="https://www.instagram.com/robstabletopworld/" target="_blank" rel="noopener noreferrer"><img className="Instagram" src={Instagram} alt="Instagram logo"></img></a>
        <a href="https://www.miniaturemarket.com/" target="_blank" rel="noopener noreferrer"><img className="MiniatureMarket" src={MiniatureMarket} alt="Miniature Market logo"></img></a>
        <a href="https://streamlabs.com/robstabletopworld/tip" target="_blank" rel="noopener noreferrer"><img className="Donate" src={Donate} alt="Donation Button"></img></a>
        </div>
        </div>

<input id="page-nav-toggle" className="main-navigation-toggle" type="checkbox" />
<label for="page-nav-toggle">
  <svg className="icon--menu-toggle" viewBox="0 0 60 30">
    <g className="icon-group">
      <g className="icon--menu">
        <path d="M 6 0 L 54 0" />
        <path d="M 6 15 L 54 15" />
        <path d="M 6 30 L 54 30" />
      </g>
      <g className="icon--close">
        <path d="M 15 0 L 45 30" />
        <path d="M 15 30 L 45 0" />
      </g>
    </g>
  </svg>
</label>

<nav class="main-navigation">
  <ul>
    <li><NavLink exact to="/"  activeStyle={{ fontWeight: "bold"}}>Home</NavLink></li>
    <li><NavLink to="/about" activeStyle={{ fontWeight: "bold"}}>About Me</NavLink></li>
    <li><NavLink to="/contact" activeStyle={{ fontWeight: "bold" }}>Contact Me</NavLink></li>
    <li><NavLink to="/art" activeStyle={{ fontWeight: "bold" }}>Art Showcase</NavLink></li>
    <li><NavLink to="/community" activeStyle={{ fontWeight: "bold" }}>Our Community</NavLink></li>
    <li><NavLink to="/submissions" id="logged-in" activeStyle={{ fontWeight: "bold" }}>Submissions</NavLink></li>
    <li><NavLink  to="/store" activeStyle={{ fontWeight: "bold" }}>Store(Coming soon!)</NavLink></li>
  </ul>
</nav>
</div>
    )
}; 

export default Header;
