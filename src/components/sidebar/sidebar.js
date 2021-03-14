import React from 'react';
import Upcoming from './upcoming/upcoming';
import MemberShowcase from './membershowcase/membershowcase';
import Showcase from './artshowcase/artshowcase';
import WarShowcase from './warnpieces/warnpieces';
import MiniMarket from './miniaturemarket/miniaturemarket';
import './sidebar.css';


const SideBar = () => {
    return (
        <div>
            <Upcoming />
            <MiniMarket />
            
            <div>
            <Showcase />
            <MemberShowcase />
            <WarShowcase />
            </div>
        </div>
    )
}

export default SideBar; 