import React from 'react';
import banner from '../../images/banner.jpg';
import './header.css';

const Header = () => {
    return (
        <img className='banner' src={banner} alt='channel banner'></img>
    )
}

export default Header;