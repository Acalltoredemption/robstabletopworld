import React from 'react';
import './artshowcase.css';
import test from '../../../images/test1.jpg';


const Showcase = () => {
    return ( 
        <div>
        <h4>Community Showcase</h4>
        <img className="showcase maindiv" src={test} />
        </div>
     );
}
 
export default Showcase;