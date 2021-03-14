import React from 'react';
import banner from '../../images/banner.png';
import './header.css';
import Youtube from  '../../images/Youtube.png';
import Twitter from '../../images/Twitter.png';
import Instagram from '../../images/Instagram.png';
import MiniatureMarket from '../../images/MiniatureMarket.png';
import Donate from '../../images/donate.png';


const Header = () => {



    return (
        <div>
            <a name="top" style={{display: 'none'}}> screen anchor </a>
            <div className="bannerparent">
                <p className="bannertitle">Rob's Tabletop World</p>
        <img className='banner' src={banner} alt='channel banner'></img>
        <a href="https://www.youtube.com/user/seahawk8601"><img className="Youtube" src={Youtube} alt="Youtube logo"></img></a>
        <a href="https://twitter.com/seahawk860"><img className="Twitter" src={Twitter} alt="Twitter logo"></img></a>
        <a href="https://www.instagram.com/robstabletopworld/"><img className="Instagram" src={Instagram} alt="Instagram logo"></img></a>
        <a href="https://www.miniaturemarket.com/"><img className="MiniatureMarket" src={MiniatureMarket} alt="Miniature Market logo"></img></a>
        <a href="https://streamlabs.com/robstabletopworld/tip"><img className="Donate" src={Donate} alt="Donation Button"></img></a>
        </div>
        </div>
    )
}

export default Header;
