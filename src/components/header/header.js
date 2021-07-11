import React, {useEffect, useState} from 'react';
import history from '../../history/history'
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
  var [welcomeMessage, setwelcomeMessage] = useState('');

    const {logout} = useAuth();
    const {currentUser} = useAuth();
    const loggedInAdmin = document.querySelectorAll('#logged-in-admin')
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
 
    if (currentUser && currentUser.email === "acalltoredemption@gmail.com"){
      loggedInAdmin.forEach(item => item.style.display = "block");
    }  else if(currentUser && currentUser.email === "novaprime860@hotmail.com"){
      loggedInAdmin.forEach(item => item.style.display = "block");
    } else {
      loggedInAdmin.forEach(item => item.style.display = "none");
    }


    useEffect(() => {
      if (currentUser){
        setwelcomeMessage(`Hello ${currentUser.email}`)
      } else {
        setwelcomeMessage('');
      }
  },);

  function headerClick() {
    history.push('/')
  }


  const {body} = document;

  function changeBackground(number) {
    // Check if background is already showing
    let previousBackground;
    if (body.className){
        previousBackground = body.className;
    }
    // Reset CSS class for body
    body.className = '';

    switch (number) {
        case '1':
        return(previousBackground === 'background-1' ? false : body.classList.add('background-1'));
            case '2':
                return(previousBackground === 'background-2' ? false : body.classList.add('background-2'));
                case '3':
                    return(previousBackground === 'background-3' ? false : body.classList.add('background-3'));
                    default:
                        break;
    }
}
 

  
    return (
    <div>
      
      <div className="background-toggles" title="Change Background">
            <div className="background-1" onClick={() => changeBackground('1')}></div>
            <div className="background-2" onClick={() => changeBackground('2')}></div>
            <div className="background-3" onClick={() => changeBackground('3')}></div>
        </div>






      <div>
          <a name="top" style={{display: 'none'}}> screen anchor </a>
          <div className="bannerparent">
      <div className='banner' onClick={headerClick} alt='channel banner'></div>
      </div>
      </div>
 

      <nav className="navbar navbar-expand-lg navbar-light navshadow">
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink exact to="/" className="nav-link">Home</NavLink>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            About
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
        <NavLink to="/about" className="nav-link">About Me</NavLink>
        </li>
        <li className="nav-item"> 
        <NavLink to="/contact" className="nav-link">Contact Me</NavLink>
        </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Community
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
        <NavLink to="/art" className="nav-link">Art Showcase</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/community" className="nav-link">Our Community</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/submissions" id="logged-in" className="nav-link">Submissions</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/fileshare" className="nav-link">File Share</NavLink>
        </li>
          </ul>
        </li>

        <li className="nav-item dropdown" id="logged-in-admin">
          <a className="nav-link dropdown-toggle text-success font-weight-bold" id="logged-in-admin navbarDropdown" display="none" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ADMIN
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li className="adminnav">
              Site Content
            </li>
          <li className="nav-item">
          <NavLink to="/makeblog" className="nav-link" id="logged-in-admin">Make Blogpost</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/blogedit" className="nav-link" id="logged-in-admin">View Blogs</NavLink>
        </li>     
        <li className="nav-item">
        <NavLink to="/fileupload" className="nav-link" id="logged-in-admin">Upload Files</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/makeevent" className="nav-link" id="logged-in-admin">Vid of the Week</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/warandpieces" className="nav-link" id="logged-in-admin">War & Pieces</NavLink>
        </li>

        <li className="adminnav">
          Users Submissions
        </li>
        <li className="nav-item">
        <NavLink to="/communitysubmissions" className="nav-link" id="logged-in-admin">Community Submissions</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/approve" className="nav-link" id="logged-in-admin">Art Submissions</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/articlecomments" className="nav-link" id="logged-in-admin">Article Comments</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/comments" className="nav-link" id="logged-in-admin">Message Inbox</NavLink>
        </li>


          </ul>
        </li>

        <li className="nav-item">
        <NavLink exact to="/login" id="logged-out" className="nav-link">Log In</NavLink>
        </li>
        <li className="nav-item">
        <NavLink exact to="/signup" id="logged-out" className="nav-link">Sign Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={logout} exact to="/" id="logged-in" className="nav-link">
            Log Out
          </NavLink>
        </li>
        <li className="nav-link text-success">{welcomeMessage}</li>



      </ul>
    </div>
  </div>
  <div className="float-right">
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
