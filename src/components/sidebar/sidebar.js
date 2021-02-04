import React from 'react';
import Upcoming from './upcoming/upcoming';
import Merch from './merch/merch';
import Showcase from './artshowcase/artshowcase';
import './sidebar.css';


const SideBar = () => {
    return (
        <div className="sidebar">
            <Upcoming />
            <Showcase />
            <Merch />
        </div>
    )
}

export default SideBar; 