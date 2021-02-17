import React from 'react';
import banner from '../../images/RobsBanner.jpg';
import './header.css';
import Youtube from  '../../images/Youtube.png';
import Twitter from '../../images/Twitter.png';
import Instagram from '../../images/Instagram.png';


const Header = () => {



    return (
        <div>
            <a name="top"></a>
            <div>
        <img className='banner' src={banner} alt='channel banner'></img>
        <a href="https://www.youtube.com/user/seahawk8601"><img className="Youtube" src={Youtube}></img></a>
        <a href="https://twitter.com/seahawk860"><img className="Twitter" src={Twitter}></img></a>
        <a href="https://www.instagram.com/robstabletopworld/"><img className="Instagram" src={Instagram}></img></a>
         
        </div>
        </div>
    )
}

export default Header;
