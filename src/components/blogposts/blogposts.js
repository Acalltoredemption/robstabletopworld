import React from 'react';
import TankPlaceholder from '../../images/worldoftanks.jpg';
import './blogposts.css';
import {Button} from 'react-bootstrap';



const BlogPosts = () => {
    return (
        <div className="blogpost">

        <div className="blogpost-image">
            <img className="blogimg" src={TankPlaceholder} alt="a blogpost image" />
        </div>


        <div className="blogpost-author">Rob Oren</div>
        <div className="blogpost-summary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit libero sed lacus congue, eu sodales nisl vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla neque interdum metus ultrices, sed mattis nibh vulputate. Donec lacinia, turpis vel mattis pharetra, augue elit posuere massa, eu ultrices ex mi eget ipsum. In viverra tincidunt augue, ut auctor leo venenatis a. Vestibulum nec arcu leo. Nulla porttitor nec massa viverra euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas vitae sollicitudin purus. Sed vehicula lorem eu ultricies pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Suspendisse mollis a nunc et finibus. Mauris non felis ac nisl suscipit interdum ut in mi. Donec eget vulputate purus. Nam eget laoreet mi. Maecenas ut bibendum nulla. Morbi non nisi tincidunt, accumsan nisl fermentum, volutpat odio. Suspendisse scelerisque, metus sodales sagittis dapibus, eros nisi congue lorem, ac vehicula massa justo vel dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam mauris tellus, imperdiet a arcu eget, condimentum ultricies ante. Nulla posuere eros pulvinar turpis porta pharetra. Duis cursus quam vel auctor finibus. Fusce et faucibus ligula. Suspendisse vitae lacus ac magna faucibus tempor id in lacus.
        </div>
        <div className="buttondiv">
        <button className={Button}>To Article</button>
        </div>
        </div>
    )
}

export default BlogPosts;