import React from 'react';
import Upcoming from './upcoming/upcoming';
import MemberShowcase from './membershowcase/membershowcase';
import Showcase from './artshowcase/artshowcase';
import UserLogin from './userlogin/userlogin';
import './sidebar.css';


const SideBar = () => {
    return (
        <div>
            <UserLogin />
            <Upcoming />
            <div>
            <Showcase />
            <MemberShowcase />
            </div>
        </div>
    )
}

export default SideBar; 