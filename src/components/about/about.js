import React from 'react';
import aboutme from '../../images/AboutMe.jpg';
import './about.css'
import {
    Link
} from 'react-router-dom';

const About = () => {
    return (
        <div>
        <div className="aboutmebox">
            <div className="itema">
            <img src={aboutme} />
            </div>
            <div className="itemb">
            <p>
Having over 30 years of experience in the hobby, Rob Oren has taught through his YouTube
channel a way of painting miniatures that is simple and with easy instructions that anyone
can do!
<br></br>
<br></br>
A family man and 7 time national powerlifting champion, Rob brings this same commitment and
competitive drive to excellence to his video reviews, painting tutorials, and just about
anything else he gets into; alongside his wonderful sponsor Miniature Market, and his amazing
community.
<br></br>
<br></br>
Learn why so many people look up to Rob and his passion for wargames and tabletop gaming!
Please join us as we have fun and raise money for charities and try to make a difference in
everyones every day life!
<br></br>
<br></br>
We hope you enjoy your stay here on our website, and encourage you to become an offical community member and  <Link to="/signup">Register</Link> where you can share your favorite artwork and miniatures with us.
<br></br>

            </p>
            </div>
        </div>
        </div>
    )
}

export default About;