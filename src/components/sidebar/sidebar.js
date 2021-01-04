import React from 'react';
import Upcoming from './upcoming/upcoming';
import Merch from './merch/merch';
import './sidebar.css';


const SideBar = () => {
    return (
        <div className="sidebar">
            <Upcoming />
            <Merch />
        </div>
    )
}

export default SideBar;